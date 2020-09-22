import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'

import { LogonPage } from './pages'
import SignupPage from './pages/SignUpPage'
import MedicalSignupPage from './pages/MedicalSignupPage'
import TempHomePage from './pages/TempHomePage'
import CustomerDashBoardPage from './pages/CustomerDashBoardPage'
import AvailableTestsCon from './components/customerComponents/AvailableTestsCon'
import RequestATestForm from './components/customerComponents/RequestATestForm'

import { AppContext } from './context'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/global.css'
import './App.css'

function App() {
    const { currentUser } = useContext(AppContext)
    const isAuth = path => {
        return currentUser?.id ? path : '/'
    }
    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <TempHomePage />
                </Route>
                <Route path={isAuth('/login')}>
                    <LogonPage />
                </Route>
                <Route path={isAuth('/sign-up')}>
                    <SignupPage />
                </Route>
                <Route path={isAuth('/medical-signup')}>
                    <MedicalSignupPage />
                </Route>
                <Route path={isAuth('/customerDashBoard')}>
                    <CustomerDashBoardPage />
                </Route>
                <Route path={isAuth('/availableTestsCon')}>
                    <AvailableTestsCon />
                </Route>
                <Route path={isAuth('/requestATestForm')}>
                    <RequestATestForm />
                </Route>
            </Switch>
        </div>
    )
}

export default App
