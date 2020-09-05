import React from 'react'

import './SignupForm.css'
import HeaderBar from '../NavBar/NavBar'

const SignupForm = ({
    firstname,
    lastname,
    email,
    phone,
    password,
    passwordconfirmation,
    onSubmitForm,
    handleChange,
}) => {
    return (
        <>
            <HeaderBar />
            <div className=" body">
                <h3>Register as a MoboClinic user</h3>
                <form>
                    <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="form-control input-sm"
                        placeholder="First Name"
                        onChange={handleChange}
                        firstname={firstname}
                    />
                    <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        className="form-control input-sm"
                        placeholder="Last Name"
                        onChange={handleChange}
                        lastname={lastname}
                    />
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="form-control input-sm"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        phone={phone}
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control input-sm"
                        placeholder="Email Adress"
                        onChange={handleChange}
                        email={email}
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control input-sm"
                        placeholder="Password"
                        onChange={handleChange}
                        password={password}
                    />
                    <input
                        type="password"
                        name="password_confirmation"
                        id="password_confirmation"
                        className="form-control input-sm"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        passwordconfirmation={passwordconfirmation}
                    />
                    <input type="submit" value="Register" className="btn-block button" onClick={onSubmitForm} />
                </form>
            </div>
        </>
    )
}

export default SignupForm
