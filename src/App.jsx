import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import LoginButton from './components/loginButton'
import LogoutButton from './components/logoutButton'
import Profile from './components/profile'
import { useAuth0 } from "@auth0/auth0-react";


function App() {


  const { isAuthenticated } = useAuth0();

 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello from FlexLink</p>
        <p>


          {


            isAuthenticated ?
              (
                <>
                  <LogoutButton></LogoutButton>

                  <Profile ></Profile></>) : (<LoginButton ></LoginButton>)


          }

        </p>

      </header>
    </div>
  )
}

export default App
