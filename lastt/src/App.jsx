import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Content from './Components/Dashboard/Content';
import Profile from './Components/Profile/Profile';
import Error from './Components/Error';
import Leads from './Components/Leads/Leads';
import 'semantic-ui-css/semantic.min.css'
import SignIn from './Components/Signn/SignIn';
import Settings from './Components/Settingspage/Settings';
import Signup from './Components/Signn/Signup';
import Email from './Components/Emails/Email';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/SignIn' element={<SignIn/>}/> */}
      <Route path='/' element={<Layout/>} >
        <Route path='/content'  element={<Content/>}/>
        <Route path='/prof' element={<Profile/>}/>
        <Route path='/Leads' element={<Leads/>}/>
      <Route path='/Settings' element={<Settings/>}/>
      <Route path='/Email' element={<Email/>}/>
      </Route>

      <Route index element={<SignIn/>}/>
      <Route path='/SignUp' element={<Signup/>}/>
      <Route path='/Error' element={<Error/>}/>

    </Routes> 
    {/* </Navigation> */}
    </BrowserRouter>
    </>
  );
}

export default App;
