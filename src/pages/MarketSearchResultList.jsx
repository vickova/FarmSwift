import React from 'react';
import { Container, Row } from 'reactstrap';
import PopularProducts from '../components/Slider/PopularProducts';
import { HomeStyle } from '../styles/PagesStyles';
import { useGetP } from '../hooks/useApi';

const MarketSearchResultList = () => {
  const { data: popularProducts, isLoading: getProductsLoading } = useGetP(`/products`, ['products']);
    console.log({popularProducts})
    const popular_products = popularProducts?.data;
  return (
    <HomeStyle>
      <Row className='popular__jingos'>
        <h2>Search Results</h2>
        <PopularProducts popular_products={popular_products} getProductsLoading={getProductsLoading}/>
      </Row>
    </HomeStyle>
  )
}

export default MarketSearchResultList