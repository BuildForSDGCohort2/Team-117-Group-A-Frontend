import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import { LogonPage } from './pages'
import SignupPage from './pages/SignUpPage'
import TempHomePage from './pages/TempHomePage'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/global.css'
import './App.css'

function App() {
    return (
        <div className="App">
            {/* Temp nav bar - These links should be moved where needed. */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/LogonPage">LogonPage</Link>
                    </li>
                    <li>
                        <Link to="/SignupPage">SignupPage</Link>
                    </li>
                </ul>
            </nav>

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
