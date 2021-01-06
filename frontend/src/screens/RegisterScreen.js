import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'
const RegisterScreen = ({history}) => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ passwordConfirmed, setPasswordConfirmed ] = useState('')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        if(password && password === passwordConfirmed) {
            dispatch(register(firstName, lastName, email, password))
            history.push('/')
        }
       
    }
    return (
        <FormContainer>
            <h1>Login</h1>
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='firstName'>
                    <Form.Label>Enter First Name</Form.Label>
                    <Form.Control type='text' placeholder='enter first name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId='lastName'>
                    <Form.Label>Enter Last Name</Form.Label>
                    <Form.Control type='text' placeholder='enter last name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group controlId='passwordConfirmed'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='confirm password' value={passwordConfirmed} onChange={(e) => setPasswordConfirmed(e.target.value)} />
                </Form.Group>
                <Button type='submit'>Login</Button>                    
            </Form>
            <Link to='/login'>
                Not a Member? Click here
            </Link>
        </FormContainer>
    )
}

export default RegisterScreen
