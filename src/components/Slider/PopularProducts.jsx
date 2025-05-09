import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Placeholder, Card, CardBody } from 'reactstrap';
import './PopularProducts.css';
import ProductCard from '../ProductCard/ProductCard';
import { BASE_URL } from '../../utils/config';
import { vendors } from '../../utils/Dataset';
import { useGet } from '../../hooks/useFetch';
import { useGetP } from '../../hooks/useApi';

const PopularProducts = ({popular_products, getProductsLoading}) => {
    const { pathname } = useLocation();
    // const { data: popular_products, loading: getProductsLoading } = useGet(`${BASE_URL}/products`);
    
console.log({popular_products})
    // const { data: AllUsers } = useGet(`${BASE_URL}/users`);
    const { data: AllUsers } = useGetP(`/users`, ['users']);

    const categoryItem = useSelector((state) => state?.WishReducer.categoryItem);
    const searchItem = useSelector((state) => state?.WishReducer.searchItem);

    const categoryList = popular_products?.filter((item) => item?.category === categoryItem.toLowerCase());

    const searchList = popular_products?.filter((item) => {
        const vendor = vendors.find((vendor) => vendor?.id === item.createdBy);
        const vendorName = vendor ? vendor.name.toLowerCase() : '';
        return (
            item.category === searchItem.toLowerCase() ||
            item.description.toLowerCase().includes(searchItem.toLowerCase()) ||
            vendorName.includes(searchItem.toLowerCase())
        );
    });

    return (
        <div className='products__wrapper d-flex gap-4 flex-wrap'>
            {getProductsLoading ? (
                // Skeleton Loader (Without CSS)
                [...Array(6)].map((_, index) => (
                    <Card key={index} style={{ width: '200px', borderRadius: 'none', padding: '10px' }}>
                        <div style={{ width: '100%', height: '150px', borderRadius: '5px', backgroundColor: 'rgba(25, 155, 116, 0.2)' }}></div>
                        <CardBody>
                            <div style={{ height: '12px', width: '75%', backgroundColor: 'rgba(25, 155, 116, 0.2)', borderRadius: '5px', marginBottom: '8px' }}></div>
                            <div style={{ height: '12px', width: '50%', backgroundColor: 'rgba(25, 155, 116, 0.2)', borderRadius: '5px' }}></div>
                        </CardBody>
                    </Card>
                ))
            ) : pathname !== '/search' ? (
                categoryItem === 'All Categories' ? (
                    popular_products?.map((item) => (
                        <ProductCard key={item._id} AllUsers={AllUsers?.data} item={item} />
                    ))
                ) : (
                    categoryList.map((item) => <ProductCard key={item._id} item={item} />)
                )
            ) : searchList.length !== 0 ? (
                searchList.map((item) => <ProductCard key={item._id} item={item} />)
            ) : (
                <h5>Search item does not exist</h5>
            )}
        </div>
    );
};

export default PopularProducts;
