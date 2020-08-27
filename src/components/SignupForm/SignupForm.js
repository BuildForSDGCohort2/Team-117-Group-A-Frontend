import React from 'react'

import './SignupForm.css'

const SignupForm = ({
    handleChangeFirsName,
    firstName,
    handleChangeLastName,
    lastName,
    handleChangeEmail,
    email,
    handleChangePhone,
    phone,
    handleChangePassword,
    password,
    handleChangePasswordConfirmation,
    passwordConfirmation,
    onSubmitForm,
}) => {
    return (
        <div className="container body">
            <div className="row centered-form">
                <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Signup for .......</h3>
                        </div>
                        <div className="panel-body">
                            <form>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="first_name"
                                                id="first_name"
                                                className="form-control input-sm"
                                                placeholder="First Name"
                                                onChange={handleChangeFirsName}
                                                firstName={firstName}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="last_name"
                                                id="last_name"
                                                className="form-control input-sm"
                                                placeholder="Last Name"
                                                onChange={handleChangeLastName}
                                                lastName={lastName}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="tel"
                                                name="phone"
                                                id="phone"
                                                className="form-control input-sm"
                                                placeholder="Phone Number"
                                                onChange={handleChangePhone}
                                                phone={phone}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="form-control input-sm"
                                                placeholder="Email Adress"
                                                onChange={handleChangeEmail}
                                                email={email}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                className="form-control input-sm"
                                                placeholder="Password"
                                                onChange={handleChangePassword}
                                                password={password}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                name="password_confirmation"
                                                id="password_confirmation"
                                                className="form-control input-sm"
                                                placeholder="Confirm Password"
                                                onChange={handleChangePasswordConfirmation}
                                                passwordConfirmation={passwordConfirmation}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <input
                                    type="submit"
                                    value="Register"
                                    className="btn btn-info btn-block"
                                    onClick={onSubmitForm}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupForm
