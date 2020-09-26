import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { LogonPage } from './pages'
import SignupPage from './pages/SignUpPage'
import MedicalSignupPage from './pages/MedicalSignupPage'
import TempHomePage from './pages/TempHomePage'
import CustomerDashBoardPage from './pages/CustomerDashBoardPage'
import RequestATestForm from './components/customerComponents/RequestATestForm'
import ListOfTests from './components/customerComponents/ListOfTests'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/global.css'
import './App.css'

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <TempHomePage />
                </Route>
                <Route path="/login">
                    <LogonPage />
                </Route>
                <Route path="/sign-up">
                    <SignupPage />
                </Route>
                <Route path="/medical-signup">
                    <MedicalSignupPage />
                </Route>
                <Route path="/customerDashBoardPage">
                    <CustomerDashBoardPage />
                </Route>
                <Route path="/availableTestsCon">
                    <ListOfTests />
                </Route>
                <Route path="/requestATestForm">
                    <RequestATestForm />
                </Route>
            </Switch>
        </div>
    )
}

export default App
