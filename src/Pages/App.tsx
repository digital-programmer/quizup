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
  }

  async componentDidMount() {
    try {
      const res = await apiClient.get(`questions`, {
        params: {
          difficulty: 'easy',
          limit: 5
        },
      })
      this.setState({
        questions: res.data,
        started: true
      })
    } catch(err: ApiError | AxiosError | Error | any) {
      console.error(err);
      showErrorToast(err?.error || err?.message || 'Error in fetching data');
    }
  }

  render() {
    return (
      <>
        {!this.state.started && <Home/>}
        {this.state.started && <Quiz/>}
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
