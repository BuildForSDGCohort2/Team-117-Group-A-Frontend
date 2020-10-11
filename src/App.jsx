import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { LogonPage } from './pages'
import SignupPage from './pages/SignUpPage'
import MedicalSignupPage from './pages/MedicalSignupPage'
import TempHomePage from './pages/TempHomePage'
import CustomerDashBoardPage from './pages/CustomerDashBoardPage'
import MedicalDashboardPage from './pages/MedicalDashboardPage'
import RequestATestPage from './pages/RequestATestPage'
import AminPage from './pages/AdminPage'
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
                <Route path="/customer-dashboard">
                    <CustomerDashBoardPage />
                </Route>
                <Route path="/medical-dashboard">
                    <MedicalDashboardPage />
                </Route>
                <Route path="/RequestATestPage">
                    <RequestATestPage />
                </Route>
                <Route path="/AminPage">
                    <AminPage />
                </Route>
                <Route path="/ListOfTests">
                    <ListOfTests />
                </Route>
            </Switch>
        </div>
    )
}

export default App
