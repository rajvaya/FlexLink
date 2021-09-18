
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
import LinksPage from './pages/LinksPage'
import PageNotFound from './pages/PageNotFound'
import Footer from './components/footer'


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
        <Route path="/u/:id" exact component={LinksPage} />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
      <Footer />

    </Router>
  )




}

export default App
