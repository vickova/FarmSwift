import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import ProductSlide from '../components/Slider/ProductSlide';
import CategoriesSlide from '../components/Slider/Categoris';
import { TypeAnimation } from 'react-type-animation';
import SubCategory from '../components/Slider/SubCategory';
import PopularProducts from '../components/Slider/PopularProducts';
import { HomeStyle } from '../styles/PagesStyles';

const Home = () => {
  return (
    <HomeStyle>
        <Container>
            <Row className='hero d-flex align-items-center'>
                <Col lg='6' className='hero-text__cover'>
                  <div className="hero__content">
                    <div className="hero__subtitle">
                      <div>
                      <h1>Organic Foods & Vegetables</h1>
                      <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          '...with years of Experience in Agricultural Farming.',
                          1000, // wait 1s before replacing "Mice" with "Hamsters"
                          '...with years of Experience in Farming.',
                          1000,
                          '...with years of Experience in anything organic',
                          1000,
                          '...with years of Experience in selling quality',
                          1000
                        ]}
                        wrapper="span"
                        speed={1000}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                      />
                      
                      </div>
                    </div>
                    <div className='hero-buttons d-flex align-items-center gap-2'>
                      <Button className='d-flex align-items-center'><span>Shop Now</span><i className="ri-arrow-drop-down-line"></i></Button>
                      <Button className='d-flex align-items-center'><span>Learn More</span><i className="ri-arrow-drop-down-line"></i></Button>
                    </div>
                  </div>
                </Col>
                <Col lg='6'>
                <ProductSlide/>
                </Col>
            </Row>
            <Row className='categories__wrapper'>
              <div className='categories__subtitle'>
                <h2>Features Categories</h2>
              </div>
              <div>
                <CategoriesSlide/>
              </div>
              <div>
                <SubCategory/>
              </div>
            </Row>
            
            <Row className='popular__jingos'>
              <h2>Popular Products</h2>
              <PopularProducts/>
            </Row>
        </Container>
    </HomeStyle>
  )
}

export default Home