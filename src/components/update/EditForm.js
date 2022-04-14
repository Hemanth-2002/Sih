import React, { Component} from 'react';
import { Form, Button } from "react-bootstrap"
import './EditForm.css'

class EditForm extends Component{
    render(){
    return(

        <Form>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="Name *"
                name="name"
                required
                className='name'
            />
        </Form.Group>
        <Form.Group>
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
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="Phone"
                name="phone"
                className='name'
            />
        </Form.Group>
        <Button variant="success" type="submit" className='edit' block>
            Edit Employee
        </Button>
    </Form>
    )
}

}
export default EditForm;