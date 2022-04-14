import React, { Component} from 'react';
import { Form, Button } from "react-bootstrap"
import '../update/EditForm.css'

class Add extends Component{
    render(){
    return(
        <Form>
           <Form.Group>
               <Form.Control
                   type="text"
                   placeholder="Name *"
                   name="name"
                   className='name'
                   required
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
                   type="text"
                   placeholder="Committee Name *"
                   name="Committee Name"
                   className='name'
                   required
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
           <Button variant="success" type="submit"  className="edit" block>
               Add New Member
           </Button>
        </Form>

    )
}

}
export default Add