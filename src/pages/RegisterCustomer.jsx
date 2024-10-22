import React, { useState } from 'react';
import { Container, Col, Row, Button, FormGroup, Form } from 'reactstrap';
import Google from '../assets/icons/google-logo.svg';
import { useNavigate } from 'react-router-dom';
import { RegisterStyle } from '../styles/PagesStyles';
import RegisterSlide from '../components/Slider/RegisterSlide';

const RegisterCustomer = () => {
  const [eye, setEye] = useState(false);
  const [seceye, setSecEye] = useState(false);
    const navigate = useNavigate()
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
          <p>Already have an account?</p>
          <Button onClick={()=>navigate('/login')}>login</Button>
        </div>
        <div>
          <h2>Customer Sign up</h2>
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
                  <input type="text" placeholder='Firstname' required id='firstname'/>
                </FormGroup>
                <FormGroup>
                  <input type="text" placeholder='Lastname' required id='lastname'/>
                </FormGroup>
                <FormGroup>
                  <input type="email" placeholder='Email' required id='email'/>
                </FormGroup>
                <FormGroup className='password'>
                  <input type={`${eye?'password':'text'}`} placeholder='Password' required id='password'/>
                  {eye? <i class="ri-eye-line" onClick={()=>setEye(!eye)}></i>:
                  <i class="ri-eye-close-line" onClick={()=>setEye(!eye)}></i>
                  }
                </FormGroup>
                <FormGroup className='password'>
                  <input type={`${seceye?'password':'text'}`} placeholder='Confirm Password' required id='password'/>
                  {seceye? <i class="ri-eye-line" onClick={()=>setSecEye(!seceye)}></i>:
                  <i class="ri-eye-close-line" onClick={()=>setSecEye(!seceye)}></i>
                  }
                </FormGroup>
                <div className='terms d-flex align-item-center gap-2'>
                  <input type="checkbox" />
                  <p>I have read and agree to FarmSwift’s Privacy Policy and Terms of Use</p>
                </div>
                <Button className='auth__btn btn secondary__btn' type='submit'>Create Account</Button>
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

export default RegisterCustomer