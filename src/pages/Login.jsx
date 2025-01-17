import React, { useState } from 'react';
import { Container, Col, Row, Button, FormGroup, Form } from 'reactstrap';
import Google from '../assets/icons/google-logo.svg';
import { useNavigate } from 'react-router-dom';
import { RegisterStyle } from '../styles/PagesStyles';
import RegisterSlide from '../components/Slider/RegisterSlide';

const Login = () => {
  const navigate = useNavigate();
  const [eye, setEye] = useState(false)
  return (
    <RegisterStyle className='sign__cover d-flex align-items-center'>
    <Container className='sign__info'>
      <Row className='inner__info'>
      <Col lg='4' className='register__info d-flex justify-content-center align-items-center'>
        <div className='covers'>
          <h2>Ready to get started?</h2>
          <p>Here is how you sign up to FarmSwift</p>
          <RegisterSlide/>
        </div>
      </Col>
      <Col lg='8' className='register__action d-flex justify-content-center align-items-center'>
      <div className='covers'>
        <div className='login d-flex align-items-center gap-3'>
          <p>Don't have an account?</p>
          <Button onClick={()=>navigate('/get-started')}>Sign Up</Button>
        </div>
        <div>
          <h2>Log in</h2>
          <div>
          <div className='alternative__btn d-flex align-items-center gap-3'>
            <Button className='alternative d-flex align-items-center gap-2'>
              <i className="ri-github-fill"></i>
                <span>Continue with Github</span>
              </Button>
              <Button className='alternative d-flex align-items-center gap-2'>
                <img src={Google} alt="" />
                <span>Continue with Google</span>
              </Button>
            </div>
            <p>or</p>
            <Form>
                <FormGroup>
                  <input type="email" placeholder='Email' required id='email'/>
                </FormGroup>
                <FormGroup className='password'>
                  <input type={`${eye?'password':'text'}`} placeholder='Password' required id='password'/>
                  {eye? <i className="ri-eye-line" onClick={()=>setEye(!eye)}></i>:
                  <i className="ri-eye-close-line" onClick={()=>setEye(!eye)}></i>
                  }
                </FormGroup>
                <div className='terms d-flex align-item-center gap-2'>
                  <input type="checkbox" />
                  <p>I have read and agree to FarmSwift’s Privacy Policy and Terms of Use</p>
                </div>
                <Button className='auth__btn btn secondary__btn' type='submit'>Login</Button>
              </Form>
          </div>
        </div>
        </div>
      </Col>
      </Row>
    </Container>
    </RegisterStyle>
  )
}

export default Login