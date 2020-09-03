import React from 'react'

const MedicalSignupForm = () => {
    return (
        <div className=" body">
            <h3>Register as a MoboClinic user</h3>
            <form>
                <input
                    type="text"
                    name="company_name"
                    id="fcompany_name"
                    className="form-control input-sm"
                    placeholder="Company Name"
                />
                <input
                    type="text"
                    name="address"
                    id="address"
                    className="form-control input-sm"
                    placeholder="Address"
                />
                <input
                    type="email"
                    name="company_email"
                    id="emcompany_emailail"
                    className="form-control input-sm"
                    placeholder="Company Email"
                />
                <input
                    type="tel"
                    name="phone_number"
                    id="phone_number"
                    className="form-control input-sm"
                    placeholder="Phone Number"
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control input-sm"
                    placeholder="Password"
                />
                <input
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    className="form-control input-sm"
                    placeholder="Confirm Password"
                />
                <input type="submit" value="Register" className="btn-block button" />
            </form>
        </div>
    )
}

export default MedicalSignupForm
