import React from 'react';
import { Container, Col, Row, Button, FormGroup, Form } from 'reactstrap';
import Google from '../assets/icons/google-logo.svg';

const Register = () => {
  return (
    <Container>
      <Row>

      </Row>
      <Row>
        <div>
          <p>Already have an account?</p>
          <Button>login</Button>
        </div>
        <div>
          <h2>Sign up</h2>
          <div>
            <Button>
            <i class="ri-github-fill"></i>
              Continue with Github
            </Button>
            <Button>
              <img src={Google} alt="" />
              Continue with Google
            </Button>
            <p>or</p>
            <Form>
              <FormGroup>
                  <input type="text" placeholder='Firstname' required id='username'/>
                </FormGroup>
                <FormGroup>
                  <input type="text" placeholder='Lastname' required id='username'/>
                </FormGroup>
                <FormGroup>
                  <input type="email" placeholder='Email' required id='email'/>
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='Password' required id='password'/>
                </FormGroup>
                <Button className='auth__btn btn secondary__btn' type='submit'>Create Account</Button>
                <div>
                  <input type="checkbox" />
                  <p>I have read and agree to FarmSwift’s Privacy Policy and Terms of Use</p>
                </div>
                <Button>Sign Up</Button>
              </Form>
          </div>
        </div>
      </Row>
    </Container>
  )
}

export default Register