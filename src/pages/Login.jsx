import React from 'react';
import { Container, Col, Row, Button, FormGroup, Form } from 'reactstrap';
import Google from '../assets/icons/google-logo.svg';

const Login = () => {
  return (
    <Container>
      <Row>

      </Row>
      <Row>
        <div>
          <p>Don't an account?</p>
          <Button>Sign up</Button>
        </div>
        <div>
          <h2>log in</h2>
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
                  <input type="email" placeholder='Email' required id='email'/>
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='Password' required id='password'/>
                </FormGroup>
                <Button className='auth__btn btn secondary__btn' type='submit'>Create Account</Button>
                <div>
                  <p>Forget password?</p>
                </div>
                <Button>Sign Up</Button>
              </Form>
          </div>
        </div>
      </Row>
    </Container>
  )
}

export default Login