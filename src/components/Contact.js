// import React, { useState } from 'react'
// import {Form} from 'react-bootstrap'
// import {InputGroup} from 'react-bootstrap'
// import validator from 'validator'
// import {Button} from 'react-bootstrap'
// import Stack from 'react-bootstrap/Stack';

// function Contact() {

//     const [headerText, setHeaderText] = useState('Fill out the form and send me a message!')

//     // const [emailError, setEmailError] = useState('')
//     const validateEmail = (e) => {
//     var email = e.target.value

//     if (validator.isEmail(email)) {
//       setHeaderText('Valid Email :)')
//     } else {
//       setHeaderText('Enter valid Email!')
//     }
//   }
//   return (
//     <>
//     <h1 className='headone'>{headerText}</h1>
//         <Form className='m-5'>
//           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="name@example.com" onChange={(e) => validateEmail(e)} onMouseLeave={(event) => {
//                 if (event.target.value == "") {
//                     setHeaderText('Cannot leave the email field blank!')
//                 }
//             }
//             }/>
//             {/* <span style={{
//           fontWeight: 'bold',
//         }}>{emailError}</span> */}
//           </Form.Group>
//           <Form.Label>First and Last Name</Form.Label>
//           <InputGroup className="mb-3">
      
//       <Form.Control aria-label="First name" placeholder="First Name"onMouseLeave={(event) => {
//                 if (event.target.value == "") {
//                   setHeaderText('Cannot leave the first name field blank!')
//                 }
//             }
//             } />
//       <Form.Control aria-label="Last name" placeholder="Last Name" onMouseLeave={(event) => {
//                 if (event.target.value == "") {
//                   setHeaderText('Cannot leave the last name field blank!')
//                 }
//             }
//             }  />
//     </InputGroup>
//           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//             <Form.Label>Message Content</Form.Label>
//             <Form.Control as="textarea" name="messagebox" rows={3} placeholder="Enter your messsage here..." onMouseLeave={(event) => {
//                 if (event.target.value == "") {
//                   setHeaderText('Cannot leave the message field blank!')
//                 }
//             }
//             }/>
//           </Form.Group>
//         </Form>
//         <Stack gap={2} className="col-md-5 mx-auto">
//           <Button variant="primary" className="button-84 m-3">Submit Message</Button>
//           <p>As of 11/17/2022, this submit feature is down for maintenance.</p>
//           <p>Please send me an email at sobczyk1290@gmail.com if you would like to connect!</p>
//         </Stack>
//         </>
//       );
// }

// export default Contact