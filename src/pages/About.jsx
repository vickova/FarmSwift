import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import AboutImage from '../assets/images/mission.webp';
import Greyman from '../assets/images/grey-man.webp';
import '../styles/About.css';
import {galleryImages, actionImages} from '../components/image.gallery/galleryImages';
import MansoryImagesGallery from '../components/image.gallery/MansoryImages';
import TestimonialSlide from '../components/Slider/TestimonialSlide';

const About = () => {
  const offer = [
    {
      title: 'AI Crop Disease Diagnosis',
      description: ' Upload a picture of your crop and get AI-powered results instantly, helping you identify and treat diseases.',
      icon: 'ri-plant-line'
    },
    {
      title: 'Consultation Services',
      description: ' Get expert advice from agricultural specialists near you, starting with our AI assitant and followed by human consultations if needed',
      icon: 'ri-customer-service-line'
    },
    {
      title: 'Marketplace',
      description: 'Buy and sell farm produce with ease. Farmers can list their products, set prices and connect with buyers directly',
      icon: 'ri-store-3-line'
    },
    {
      title: 'Location and Services',
      description: 'find nearby soil testing facilities and agricultural labs to ensure your soil is heathy and fertile',
      icon:'ri-user-location-line'
    },
  ]
  return (
    <div className='about-us'>
        <Container>
          <Row className='about-hero'>
            <div className='about-hero-inner'>
            <h2>Empowering Farmers, Connecting Buyers, and Enhancing Agriculture with Technology</h2>
            <p>Farmswift brings innovation to agriculture by connecting farmers, buyers, and researchers through seamless, tech-driven platform</p>
            </div>
          </Row>
            <Row className='about__section'>
                
                <div className='empower__women d-flex align-items-center justify-content-center gap-5'>
                <Col lg='5'>
                <h2>Our Mision</h2>
                  <h3>Bringing the Future of Farming to your Fingertips</h3>
                  <p>At FarmSwift, our mission is to empower farmers by providing tools that enhance crop management, increase yields, and open new markets. We connect farmers
                    with buyers and researchers ensuring seamless collaboration across the agricultural ecosystem. With a focus on innovation, our platform simplifies everything 
                    from disease diagnosis to consultation, helping farmers thrive in today's fast-paced world.
                  </p>
                </Col>
                <Col lg='4' className='women'>
                    <img src={AboutImage} alt="" />
                </Col>
                </div>
            </Row>
            <Row className='offer'>
              <h2>What We Offer</h2>
              <div className='offer-cover d-flex gap-3 justify-content-center'>
                {
                  offer.map((item, index)=>{
                    return <Col lg='2' key={index} className='offer-card'>
                      <i className={`${item.icon}`}></i>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </Col>
                  })
                }
              </div>
            </Row>
            <Row className='about__section'>
                <div className='empower__women d-flex align-items-center justify-content-center gap-5'>
                  <Col lg='5'>
                  <h2>Our Vision</h2>
                    <h3>Building Sustianable Agricultural Future</h3>
                    <p>FarmSift envisions a future where farmers are empowered by technology, agriculture is more sustainable, and communities around the world
                  have access to fresh, healthy produce. By harnessing the power of AI, data, and collaboration, we aim to build a platform that not only helps
                  farmers today but also paves the way for the next ganaration of agricultural innovation.
                    </p>
                  </Col>
                  <Col lg='4' className='women'>
                      <img src={Greyman} alt="" />
                  </Col>
                </div>
            </Row>
            <Row className='gallery d-flex align-items-start justify-content-between'>
              <Col lg='6'>
                <MansoryImagesGallery galleryImages={galleryImages}/>
              </Col>
              <Col lg='6' className='gallery-text__cover'>
                <div>
                  <div className='testimonial__subtitle'>
                    <h2>What They Say</h2>
                  </div>
                  <div>
                    <TestimonialSlide/>
                  </div>
                </div>
                </Col>
            </Row>
            <Row className='action d-flex align-items-start justify-content-between'>
                <Col lg='6' className='action-text'>
                  <h2>Join Us in Revolutionizing Agriculture</h2>
                  <p>Becaome part of the FarmSwift Community and help shape the suture of farming. Whether you're a farmer, buyer, or resaercher, there's a place for you here</p>
                  <Button>Sign Up Now</Button>
                </Col>
                <Col lg='6' className='action-image'>
                  <MansoryImagesGallery galleryImages={actionImages}/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default About