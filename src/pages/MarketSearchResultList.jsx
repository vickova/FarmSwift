import React from 'react';
import { Container, Row } from 'reactstrap';
import PopularProducts from '../components/Slider/PopularProducts';
import { HomeStyle } from '../styles/PagesStyles';

const MarketSearchResultList = () => {
  return (
    <HomeStyle>
      <Row className='popular__jingos'>
        <h2>Search Results</h2>
        <PopularProducts/>
      </Row>
    </HomeStyle>
  )
}

export default MarketSearchResultList