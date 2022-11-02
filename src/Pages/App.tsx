import React from 'react';
import {ToastContainer} from 'react-toastify';
import { AxiosError } from 'axios';

// css imports
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/App.css';
// Type imports
import { AppState } from '../Types/appState';
import {ApiError} from '../Types/error'
// Util imports
import apiClient from '../Utils/api';
import {showErrorToast} from '../Utils/toast'
// Page and component imports
import Quiz from './Quiz';
import Home from './Home';

class App extends React.Component<{}, AppState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      questions: [],
      userSelections: [],
      loading: false,
      started: false
    }

    this.handleGameStart = this.handleGameStart.bind(this);
  }

  handleGameStart() {
    this.fetchQuizData();
  }

  async fetchQuizData() {
    this.setState({
      loading: true
    })
    try {
      const res = await apiClient.get(`questions`, {
        params: {
          difficulty: 'easy',
          limit: 5
        },
      })
      this.setState({
        questions: res.data,
        started: true,
        loading: false
      })
    } catch(err: ApiError | AxiosError | Error | any) {
      this.setState({
        loading: false
      })
      console.error(err);
      showErrorToast(err?.error || err?.message || 'Error in fetching data');
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
        {!this.state.started && !this.state.loading && <Home handleGameStartClick={this.handleGameStart}/>}
        {this.state.started  && !this.state.loading && <Quiz/>}
        {this.state.loading && <h3>Loading...</h3>}
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          theme="light"
        />
      </>
    );
  }
}

export default App;
