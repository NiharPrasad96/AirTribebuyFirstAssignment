// src/App.js
import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ProductDetailsPage from './ProductDetailsPage';
import HomePage from './HomePage';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here (e.g., validate credentials)
    // On successful login, redirect to ProductDetailsPage
    console.log(email)
if(email == password)
    {
        navigate('/home');
    }
    else{
        alert('Invalid credentials');
    }
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <h2 className="text-center mb-4">AirtribeBuy Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control required="true" type="email" placeholder="Enter email" value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control required="true" type="password" placeholder="Password" value={password}
                onChange={(e) => setPassword(e.target.value)}
/>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-4">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
      <footer>*Please enter the email as password to validate, the validation logic will be added in next project</footer>
    </Container>
  );
};

// const Login = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginForm />} />
//         <Route path="/home" element={<HomePage />} />
//       </Routes>
//     </Router>
//   );
// };

export default LoginForm;
