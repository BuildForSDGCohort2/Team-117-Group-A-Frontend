import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { LogonPage } from './pages'
import SignupPage from './pages/SignUpPage'
import TempHomePage from './pages/TempHomePage'
import HeaderBar from './components/NavBar/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/global.css'
import './App.css'

function App() {
    return (
        <div className="App">
            <HeaderBar />
            <Switch>
                <Route exact path="/">
                    <TempHomePage />
                </Route>
                <Route path="/LogonPage">
                    <LogonPage />
                </Route>
                <Route path="/SignupPage">
                    <SignupPage />
                </Route>
            </Switch>
        </div>
    )
}

export default App
