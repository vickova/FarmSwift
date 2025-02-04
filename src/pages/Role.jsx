import React, {useState} from 'react';
import { Container, Col, Row, Button, FormGroup, Form } from 'reactstrap';
import Google from '../assets/icons/google-logo.svg';
import { useNavigate } from 'react-router-dom';
import { RegisterStyle } from '../styles/PagesStyles';
import RegisterSlide from '../components/Slider/RegisterSlide';

const Role = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!role) {
      alert('Please select a role to continue.');
      return;
    }

    // Save role in local storage or pass it as a query parameter
    localStorage.setItem('selectedRole', role);
    navigate(`/get-started/register`); // Redirect to the registration page
  };
  return (
    <RegisterStyle className='sign__cover d-flex align-items-center'>
    <Container className='sign__info'>
      <Row className='inner__info'>
      <Col lg='4' className='register__info d-flex justify-content-center align-items-center'>
        <div className='covers'>
          <h2>Ready to get started?</h2>
          <p>Here is how yousign up to FarmSwift</p>
            <RegisterSlide/>
        </div>
      </Col>
      <Col lg='8' className='register__action d-flex align-items-center justify-content-center'>
      <div>
        <h2>Register as a </h2>
        <div className='alternative__btn d-flex align-items-center gap-3'>
            <Button className='alternative d-flex align-items-center gap-2' value={'customer'} onClick={(e)=>setRole(e.target.value)}>
                Customer
              </Button>
              <Button className='alternative d-flex align-items-center gap-2' value={'seller'} onClick={(e)=>setRole(e.target.value)}>
                Seller
              </Button>
            </div>
            <Button className='d-flex align-items-center gap-2' value={'seller'} onClick={handleContinue}>
                Continue
            </Button>
      </div>
      </Col>
      </Row>
    </Container>
    </RegisterStyle>
  )
}

export default Role