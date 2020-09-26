import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { LogonPage } from './pages'
import SignupPage from './pages/SignUpPage'
import MedicalSignupPage from './pages/MedicalSignupPage'
import TempHomePage from './pages/TempHomePage'
import CustomerDashBoardPage from './pages/CustomerDashBoardPage'
import RequestATestForm from './components/customerComponents/RequestATestForm'
import AminPage from './pages/AdminPage'

import { getUserFromLocalStorage } from './utils'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/global.css'
import './App.css'

function App() {
    const isAuth = path => {
        return getUserFromLocalStorage() ? path : '/'
    }
    return (
        <div className="App">
            <Switch>
                <Route exact path={isAuth('/')}>
                    <TempHomePage />
                </Route>
                <Route path="/login">
                    <LogonPage />
                </Route>
                <Route path={isAuth('/sign-up')}>
                    <SignupPage />
                </Route>
                <Route path="/medical-signup">
                    <MedicalSignupPage />
                </Route>
                <Route path={isAuth('/customer-dashboard')}>
                    <CustomerDashBoardPage />
                </Route>
                <Route path={isAuth('/requestATestPage')}>
                    <RequestATestForm />
                </Route>
                <Route path="/AminPage">
                    <AminPage />
                </Route>
            </Switch>
        </div>
    )
}

export default App
