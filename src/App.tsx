import React from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import apiClient from './Utils/api';
import {showErrorToast, showSuccessToast} from './Utils/toast'
import {ApiError} from './Types/error'
import { AxiosError } from 'axios';
import Quiz from './Pages/Quiz';
import { AppState } from './Types/appState';
import Home from './Pages/Home';

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
