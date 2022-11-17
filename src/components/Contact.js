import React, { useState } from 'react'
import {Form} from 'react-bootstrap'
import {InputGroup} from 'react-bootstrap'
import validator from 'validator'

function Contact() {

    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }
  return (
    <>
    <h1 className='headone'> Fill out the form and send me a message!</h1>
        <Form className='m-5'>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" onChange={(e) => validateEmail(e)} onMouseLeave={(event) => {
                if (event.target.value == "") {
                    alert('Cannot leave the email field blank!')
                }
            }
            }/>
            <span style={{
          fontWeight: 'bold',
        }}>{emailError}</span>
          </Form.Group>
          <Form.Label>First and Last Name</Form.Label>
          <InputGroup className="mb-3">
      
      <Form.Control aria-label="First name" placeholder="First Name"onMouseLeave={(event) => {
                if (event.target.value == "") {
                    alert('Cannot leave the first name field blank!')
                }
            }
            } />
      <Form.Control aria-label="Last name" placeholder="Last Name" onMouseLeave={(event) => {
                if (event.target.value == "") {
                    alert('Cannot leave the last name field blank!')
                }
            }
            }  />
    </InputGroup>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message Content</Form.Label>
            <Form.Control as="textarea" name="messagebox" rows={3} placeholder="Enter your messsage here..." onMouseLeave={(event) => {
                if (event.target.value == "") {
                    alert('Cannot leave the message field blank!')
                }
            }
            }/>
          </Form.Group>
        </Form>
        </>
      );
}

export default Contact