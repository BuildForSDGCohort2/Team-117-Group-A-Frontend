import React, { useState } from 'react'

import SignupForm from '../components/SignupForm/SignupForm'

const SignUpPage = () => {
    // Form state
    const [first_name, setFirsName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConformation] = useState('')

    //handel change of input for the form
    const handleChangeFirsName = event => {
        const { name, value } = event.target
        setFirsName({ [name]: value })
    }

    const handleChangeLastName = event => {
        const { name, value } = event.target
        setLastName({ [name]: value })
    }

    const handleChangeEmail = event => {
        const { name, value } = event.target
        setEmail({ [name]: value })
    }

    const handleChangePhone = event => {
        const { name, value } = event.target
        setPhone({ [name]: value })
    }

    const handleChangePassword = event => {
        const { name, value } = event.target
        setPassword({ [name]: value })
    }

    const handleChangePasswordConfirmation = event => {
        const { name, value } = event.target
        setPasswordConformation({ [name]: value })
    }

    const onSubmitForm = e => {
        e.preventDefault()
        try {
            const body = { first_name, last_name, email, phone, password }
            const response = fetch('http://moboclinic.herokuapp.com/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            window.location = '/'
        } catch (err) {
            console.error(err.message)
        }
    }
    return (
        <div>
            <SignupForm
                handleChangeFirsName={handleChangeFirsName}
                handleChangeLastName={handleChangeLastName}
                handleChangeEmail={handleChangeEmail}
                handleChangePhone={handleChangePhone}
                handleChangePassword={handleChangePassword}
                handleChangePasswordConfirmation={handleChangePasswordConfirmation}
                onSubmitForm={onSubmitForm}
                firstname={first_name}
                lastname={last_name}
                email={email}
                phone={phone}
                password={password}
                passwordconfirmation={password_confirmation}
            />
        </div>
    )
}

export default SignUpPage
