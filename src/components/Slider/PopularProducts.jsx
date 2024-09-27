import React from 'react';
import './PopularProducts.css';
import Potatoe from '../../assets/images/potato.jpeg';
import Cocoyam from '../../assets/images/coco-yam.jpeg';
import Tangerine from '../../assets/images/tangerine.jpeg';
import Mango from '../../assets/images/mango.jpeg';
import Apple from '../../assets/images/apple.jpeg';
import Watermelon from '../../assets/images/watermelon.jpeg';
import Rice from '../../assets/images/Rice.jpeg';
import Banana from '../../assets/images/banana.jpeg';
import Cashew from '../../assets/images/cashew.jpeg';
import guava from '../../assets/images/guava.jpeg';
import Pineapple from '../../assets/images/pineapple.jpeg';
import Cocoa from '../../assets/images/cocoa.jpeg';
import Eggs from '../../assets/images/eggs.jpeg';
import Orange from '../../assets/images/orange.jpeg';

import ProductCard from '../ProductCard/ProductCard';


const PopularProducts = () => {
    const popular_products = [
        {
            category:'fruits',
            description: 'One bunch of big plantains available',
            rating: '4',
            sellername:'Afolabi ventures',
            price:'#350/kg',
            discountedprice:'#300/kg',
            picture: Potatoe
        },
        {
            category:'fruits',
            description: 'One bunch of big plantains available',
            rating: '4',
            sellername:'Afolabi ventures',
            price:'#350/kg',
            discountedprice:'#300/kg',
            picture: Cocoyam
        },
        {
            category:'fruits',
            description: 'One bunch of big plantains available',
            rating: '4',
            sellername:'Afolabi ventures',
            price:'#350/kg',
            discountedprice:'#300/kg',
            picture: Tangerine
        },
        {
            category:'fruits',
            description: 'One bunch of big plantains available',
            rating: '4',
            sellername:'Afolabi ventures',
            price:'#350/kg',
            discountedprice:'#300/kg',
            picture: Mango
        },
        {
            category:'fruits',
            description: 'One bunch of big plantains available',
            rating: '4',
            sellername:'Afolabi ventures',
            price:'#350/kg',
            discountedprice:'#300/kg',
            picture: Cashew
        },
        {
            category:'fruits',
            description: 'One bunch of big plantains available',
            rating: '4',
            sellername:'Afolabi ventures',
            price:'#350/kg',
            discountedprice:'#300/kg',
            picture: Rice
        },
        {
            category:'fruits',
            description: 'One bunch of big plantains available',
            rating: '4',
            sellername:'Afolabi ventures',
            price:'#350/kg',
            discountedprice:'#300/kg',
            picture: Watermelon
        },
        {
            category:'fruits',
            description: 'One bunch of big plantains available',
            rating: '4',
            sellername:'Afolabi ventures',
            price:'#350/kg',
            discountedprice:'#300/kg',
            picture: Banana
        },
        {
            category:'fruits',
            description: 'One bunch of big plantains available',
            rating: '4',
            sellername:'Afolabi ventures',
            price:'#350/kg',
            discountedprice:'#300/kg',
            picture: Apple
        },
        {
            category:'fruits',
            description: 'One bunch of big plantains available',
            rating: '4',
            sellername:'Afolabi ventures',
            price:'#350/kg',
            discountedprice:'#300/kg',
            picture: guava
        },
        {
            category:'fruits',
            description: 'One bunch of big plantains available',
            rating: '4',
            sellername:'Afolabi ventures',
            price:'#350/kg',
            discountedprice:'#300/kg',
            picture: Pineapple
        },
        {
            category:'fruits',
            description: 'One bunch of big plantains available',
            rating: '4',
            sellername:'Afolabi ventures',
            price:'#350/kg',
            discountedprice:'#300/kg',
            picture: Cocoa
        },
        {
            category:'fruits',
            description: 'One bunch of big plantains available',
            rating: '4',
            sellername:'Afolabi ventures',
            price:'#350/kg',
            discountedprice:'#300/kg',
            picture: Eggs
        },
        {
            category:'fruits',
            description: 'One bunch of big plantains available',
            rating: '4',
            sellername:'Afolabi ventures',
            price:'#350/kg',
            discountedprice:'#300/kg',
            picture: Orange
        },
        {
            category:'fruits',
            description: 'One bunch of big plantains available',
            rating: '4',
            sellername:'Afolabi ventures',
            price:'#350/kg',
            discountedprice:'#300/kg',
            picture: Potatoe
        },
        {
            category:'fruits',
            description: 'One bunch of big plantains available',
            rating: '4',
            sellername:'Afolabi ventures',
            price:'#350/kg',
            discountedprice:'#300/kg',
            picture: Cashew
        },
        
    ]
  return (
    <div className='products__wrapper d-flex gap-4 justify-content-center'>
        {
        popular_products.map((item, index)=>{
            return <ProductCard item={item}/>
        })
        
        }
    </div>
  )
}

export default PopularProducts