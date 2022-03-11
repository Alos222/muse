import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Nav from "./components/Nav";
import Main from "./pages/Main"
import Dashboard from "./pages/Dashboard"
import Context from './context/context';
// import Login from './pages/Login';
// import Register from './pages/Register';

import { useEffect, useState, React } from 'react';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';



function App() {

  const [error, setError] = useState();
  const [userCredentials, setUserCredentials] = useState({

    token: null,
    user: null,

  });

  useEffect(() => {

    const checkLoggedIn = async () => {

      let token = localStorage.getItem('auth-token');

      if (token === null) {
        localStorage.setItem('auth-token', '');
        token = '';
      }

      const tokenResponse = await axios.post
        (
          'http://localhost:6000/api/auth/tokenIsValid',
          null,
          {
            headers: {
              'x-auth-token': token
            }
          }
        ).catch((error) => {
          console.log(error.toJSON());
        });

      if (tokenResponse) {
        const res = await axios.get
          (
            'http://localhost:6000/api/auth/tokenIsValid',
            {
              headers: {
                'x-auth-token': token
              }
            }).catch((error) => {
              setError(error);
            });

        setUserCredentials({
          token,
          user: res,
        });
      }
    }

    checkLoggedIn();

  }, []);

  return (
      <Context.Provider value={{ userCredentials, setUserCredentials }}>
        <Nav />
        <Routes >
          <Route path="/" element={<App />} />
          <Route index element={<Main />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Context.Provider>
  );
}

export default App;
