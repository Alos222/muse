//Styling Imports
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Header from "./components/Header";
import Main from "./pages/Main"
import Dashboard from "./pages/Dashboard"
import Context from './context/context';
import Login from './pages/login';
import Register from './pages/register';

import { useEffect, useState, React } from 'react';
import {  Routes, Route } from 'react-router-dom';
import axios from 'axios';


function App() {
 
  const user = localStorage.getItem('auth-token')

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
          'http://localhost:3001/api/auth/tokenIsValid',
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
        const res = await axios.post
          (
            'http://localhost:3001/api/auth/tokenIsValid',
            {
              headers: {
                'x-auth-token': token
              }
            }).catch((error) => {
              setError(error);
            });
        console.log(res.data)
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
        <Header />
        <Routes >
          <Route exact path="/" index element={user ? < Dashboard /> : < Main />} />
          <Route exact path="/dashboard" index element={!user ? <Dashboard /> : < Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Context.Provider>
  );
}

export default App;
