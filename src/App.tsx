import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { LogonPage } from './pages'
import SignupPage from './pages/SignUpPage'
import MedicalSignupPage from './pages/MedicalSignupPage'
import TempHomePage from './pages/TempHomePage'
import HeaderBar from './components/NavBar/NavBar'
import CustomerDashBoardPage from './pages/CustomerDashBoardPage'
import AvailableTestsCon from './components/customerComponents/AvailableTestsCon'
import RequestATestForm from './components/customerComponents/RequestATestForm'

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
                <Route path="/MedicalSignupPage">
                    <MedicalSignupPage />
                </Route>
                <Route path="/CustomerDashBoardPage">
                    <CustomerDashBoardPage />
                </Route>
                <Route path="/AvailableTestsCon">
                    <AvailableTestsCon />
                </Route>
                <Route path="/RequestATestForm">
                    <RequestATestForm />
                </Route>
            </Switch>
        </div>
    )
}

export default App
