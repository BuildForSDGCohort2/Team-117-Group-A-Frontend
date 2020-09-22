import React from 'react'

import './LoginForm.css'

const LoginForm = ({ username, password, handleChange, onSubmitForm, error }) => {
    return (
        <div className="container loginForm">
            <div className="row centered-form">
                <div className="col-xs-12">
                    <div className="panel panel-default form">
                        <div className="panel-heading">
                            <h3 className="panel-title text-center">Login</h3>
                        </div>
                        <div className="panel-body">
                            <form onSubmit={e => onSubmitForm(e)}>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12">
                                        <div className="form-group">
                                            <input
                                                type="username"
                                                name="username"
                                                id="username"
                                                className="form-control  form"
                                                placeholder="username"
                                                onChange={handleChange}
                                                username={username}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12">
                                        <p className="text-danger">{error}</p>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                className="form-control"
                                                placeholder="Password"
                                                onChange={handleChange}
                                                password={password}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <input
                                    type="submit"
                                    value="Login"
                                    className="btn btn-danger btn-block align-center"
                                    onClick={onSubmitForm}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {error}
        </div>
    )
}

export default LoginForm
