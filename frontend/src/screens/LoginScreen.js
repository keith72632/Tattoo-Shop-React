import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
const LoginScreen = ({history}) => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
        history.push('/')
    }
    return (
        <FormContainer>
            <h1>Login</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button type='submit'>Login</Button>                    
            </Form>
            <Link to='/register'>
                Not a Member? Click here
            </Link>
        </FormContainer>
    )
}

export default LoginScreen
