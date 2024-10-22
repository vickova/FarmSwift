import React from 'react';
import { Container, Col, Button, Row } from 'reactstrap';
import Shoping from '../assets/images/gallery4.jpeg';
import PopularProducts from '../components/Slider/PopularProducts';
import '../styles/Home.css'

const Shop = () => {
  return (
    <div className='container'>
        <Container>
        <Row className='shop-hero d-flex align-items-center justify-content-center'>
                <Col lg='8' className='hero-text__cover'>
                  <div className="hero__content">
                    <div className="hero__subtitle">
                      <div>
                      <h1>What are you getting from us today?</h1>
                      <p>...let's bring it to you even at a cheaper rate</p>
                      </div>
                    </div>
                    
                  </div>
                </Col>
                <Col lg='4' className='shop-image d-flex align-items-center'>
                <img src={Shoping} alt="" />
                </Col>
            </Row>
            <Row>
              <h2>products</h2>
              <PopularProducts/>
            </Row>
        </Container>
    </div>
  )
}

export default Shop