import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import './Footer.css';
import { useLocation } from 'react-router-dom';
import Logo from '../../assets/icons/swift-logo.png';
import LocalFarmer from '../../assets/images/bg-man.webp'
import ConsultationButton from '../ConsultationButton/ConsultationButton';


const Footer = () => {
  const {pathname} = useLocation();
  const accountexists = pathname.includes('account');
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className='footer' style={{display:`${pathname==='/get-started'||pathname==='/checkout'||accountexists||pathname==='/get-started/register'||pathname==='/login'?'none':'block'}`}}>
      <Container className='footer__container'>
      <Row className='footer-first d-flex'>
        <div className='farmer-cover'>
          <img src={LocalFarmer} alt="" />
        </div>
        <h2>Join us, <span>Empower</span> <br /> local farmers</h2>
      </Row>
      <Row className='info-cover d-flex justify-content-center'>
        <div className='contact-information d-flex align-items-center justify-content-between'>
          <Col lg='6'>
          <div className='logo-cover'><img src={Logo} alt="" /></div>
          <p>FarmSwift group is a very innovative and valuable <br /> platform for farmersand customersin the <br /> agricultural sector</p>
          </Col>
          <Col>
            <h3>Services</h3>
            <p>FarmHub group</p>
            <p>Management</p>
            <p>Investor</p>
            <p>Media</p>
          </Col>
          <Col>
            <h3>Company</h3>
            <p>About us</p>
            <p>Contact us</p>
            <p>Career</p>
            <p>Press Release</p>
          </Col>
          <Col>
            <h3>Social Media</h3>
            <p>FarmHub group</p>
            <p>Management</p>
            <p>Investor</p>
            <p>Media</p>
          </Col>
        </div>
        <div className='inner-footer d-flex justify-content-between'>
          <div className='d-flex gap-3'>
            <p>Privacy policy</p>
            <p>Terms of use</p>
          </div>
          <p>
            copyright {year} FarmSwift
          </p>
        </div>
      </Row>
      <ConsultationButton/>
      </Container>
    </div>
  )
}

export default Footer