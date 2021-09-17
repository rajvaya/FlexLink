
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import HomePage from './pages/HomePage'
import React, { useEffect } from 'react'
import DashBoard from './pages/DashBoard'
import { useAuth0 } from '@auth0/auth0-react'

function App() {


  // const { getAccessTokenSilently } = useAuth0()

  // useEffect(() => {
  //   getAccessTokenSilently();
  //  }, []);


  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/dashboard">
          <DashBoard />
        </Route>
        <Redirect path="*" to="/" />
      </Switch>

    </Router>
  )




}

export default App
