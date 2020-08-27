import React from 'react'

import { LogonPage } from './pages'
import SignupPage from './pages/SignUpPage'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/global.css'

function App() {
    return (
        <div className="App">
            <LogonPage />
            <SignupPage />
        </div>
    )
}

export default App
