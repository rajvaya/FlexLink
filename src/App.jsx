
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import HomePage from './pages/HomePage'
import React from 'react'
import DashBoard from './pages/DashBoard'

function App() {
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
