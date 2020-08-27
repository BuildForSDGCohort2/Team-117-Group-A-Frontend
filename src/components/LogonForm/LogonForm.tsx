import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import Logo from '../Logo'

import styles from './LogonForm.module.css'

interface FormData {
    email: string
    password: string
}

const initialFormData: FormData = {
    email: '',
    password: '',
}
const LogonForm = () => {
    const [formData, setFormData] = useState<FormData>(initialFormData)

    const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setFormData({
            ...formData,
            [e.target.name]: value,
        })
        console.log(formData)
    }

    const submitForm = (e: FormEvent<HTMLElement>) => {
        e.preventDefault()
        // validate and send form Data
        console.log(formData)
    }

    return (
        <>
            <div className={styles.logonForm}>
                <Logo />
                <h3>Login</h3>
                <p>Sign in to your account</p>
                <Form className={styles.form} onSubmit={submitForm}>
                    <Form.Group controlId="formBasicEmail">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    {' '}
                                    <FontAwesomeIcon className={styles.light} icon={faUser} />
                                </InputGroup.Text>

                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    onChange={handleFormChange}
                                    value={formData.email}
                                />
                            </InputGroup.Prepend>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text className={styles.light}>
                                    {' '}
                                    <FontAwesomeIcon icon={faLock} />
                                </InputGroup.Text>

                                <Form.Control
                                    type="password"
                                    placeholder="Enter password"
                                    name="password"
                                    onChange={handleFormChange}
                                    value={formData.password}
                                />
                            </InputGroup.Prepend>
                        </InputGroup>
                    </Form.Group>
                    <div className={styles.sigin}>
                        Forgot Password
                        <Button variant="primary" type="submit">
                            Sign In
                        </Button>
                        Create a new account? <a>SignUp</a>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default LogonForm
