import React, {useRef} from 'react'
import { Container, Table, Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../styles/Vendors.css';
import { vendors } from '../utils/Dataset';

const Vendors = () => {
  
  return (
    <Container className='vendor-wrapper'>
      <h2 className='vendor-header'>Our Vendors</h2>
      <div>
        <div>
          <Row className='header-row'>
            <Col lg='3' className='vendor-item'>Identity</Col>
            <Col lg='3' className='vendor-item'>Rating</Col>
            <Col lg='3' className='vendor-item'>City</Col>
            <Col lg='3' className='vendor-item'>Country</Col>
          </Row>
        </div>
        <div className='vendor-info-cover'>
        {
          vendors.map((item, index)=>{
            return <NavLink to={`/vendors/${item.id}`} key={index}>
            <Row className='vendor-info'>
                <Col lg='3' scope="row" className='vendor-identity vendor-item d-flex align-items-center gap-2'>
                  <img src={item.image} alt="" />
                  <h3>{item.name}</h3>
                </Col>
                <Col className='vendor-item' lg='3'>{item.rating}</Col>
                <Col className='vendor-item' lg='3'>{item.city}</Col>
                <Col className='vendor-item' lg='3'>{item.country}</Col>
            </Row>
            </NavLink>
          })
        }
        </div>
      </div>
    </Container>
  )
}

export default Vendors