//Styling Imports
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Header from "./components/Header";
import Main from "./pages/Main"
import Dashboard from "./pages/Dashboard"
import Context from './context/context';


//Pages
import Login from './pages/login';
import Register from './pages/register';
import DeptView from './pages/deptview';
import ArtDetail from './pages/artDetailView';


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
      console.log('checking for login')
      console.log(token)

      if (!token) {
        localStorage.setItem('auth-token', '');
        token = '';
        console.log('i am null')
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
      // console.log(tokenResponse)
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
        setUserCredentials({
          token,
          user: tokenResponse,
         
        });
      }
    }
    checkLoggedIn();
  }, []);

  return (
      <Context.Provider value={{ userCredentials, setUserCredentials }}>
        <Header />
        <Routes >
          <Route exact path="/" index element={!userCredentials ? < Dashboard /> : < Main />} />
          <Route exact path="/dashboard" index element={userCredentials.token ? <Dashboard /> : < Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path='/department/:deptID' element={<DeptView/>}/>
          <Route path="/artDetail/:objectID" element={< ArtDetail />}/>

        </Routes>
      </Context.Provider>
  );
}

export default App;
