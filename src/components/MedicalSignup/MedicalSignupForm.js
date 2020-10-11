import React from 'react'

const MedicalSignupForm = ({
    handleChange,
    onSubmitForm,
    companyname,
    address,
    companyemail,
    phonenumber,
    password,
    passwordconfirmation,
}) => {
    return (
        <div className=" body">
            <h3>Register as a MoboClinic Regestered Company</h3>
            <form>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control input-sm"
                    placeholder="Company Name"
                    onChange={handleChange}
                    companyname={companyname}
                />
                <input
                    type="text"
                    name="address"
                    id="address"
                    className="form-control input-sm"
                    placeholder="Address"
                    onChange={handleChange}
                    address={address}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control input-sm"
                    placeholder="Company Email"
                    onChange={handleChange}
                    companyemail={companyemail}
                />
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="form-control input-sm"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    phonenumber={phonenumber}
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
    )
}

export default MedicalSignupForm
