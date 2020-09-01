import React from 'react'

import './SignupForm.css'

const SignupForm = ({
    handleChangeFirsName,
    firstname,
    handleChangeLastName,
    lastname,
    handleChangeEmail,
    email,
    handleChangePhone,
    phone,
    handleChangePassword,
    password,
    handleChangePasswordConfirmation,
    passwordconfirmation,
    onSubmitForm,
}) => {
    return (
        <div className=" body">
            <h3>Register as a MoboClinic user</h3>
            <form>
                <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    className="form-control input-sm"
                    placeholder="First Name"
                    onChange={handleChangeFirsName}
                    firstname={firstname}
                />
                <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    className="form-control input-sm"
                    placeholder="Last Name"
                    onChange={handleChangeLastName}
                    lastname={lastname}
                />
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="form-control input-sm"
                    placeholder="Phone Number"
                    onChange={handleChangePhone}
                    phone={phone}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control input-sm"
                    placeholder="Email Adress"
                    onChange={handleChangeEmail}
                    email={email}
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control input-sm"
                    placeholder="Password"
                    onChange={handleChangePassword}
                    password={password}
                />
                <input
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    className="form-control input-sm"
                    placeholder="Confirm Password"
                    onChange={handleChangePasswordConfirmation}
                    passwordconfirmation={passwordconfirmation}
                />
                <input type="submit" value="Register" className="btn-block button" onClick={onSubmitForm} />
            </form>
        </div>
    )
}

export default SignupForm
