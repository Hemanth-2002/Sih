import React, { useState } from 'react';
import {Form,Button} from "react-bootstrap"


const Login = () => {  
    const lol = ()=>{
        localStorage.setItem("auth",true);
        window.location.assign("http://localhost:3000/Home")
    }
    return (
        <>
            <Form>
                <Form.Group>
                <h1>Login</h1>
                    <Form.Control
                        type="email"
                        placeholder="Email *"
                        name="email"
                        className='name'
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        className='name'
                    />
                </Form.Group>
                <Button variant="success" className='edit' onClick = {lol} block>
                    Login
                </Button>
            </Form>


        </>


    )
}
export default Login