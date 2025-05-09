import React from 'react';
import { Row, Col } from 'reactstrap';
// import {DashboardChart, DoughnutCircle, LineChart} from '../Visuals/DashboardChart';
import { DashboardChart, LineChart } from '../Visuals/DashboardChart';
import { ProductsBarChart } from '../Visuals/barChart';
import { UserPieChart } from '../Visuals/Piechart';
import { OrderStatusChart } from '../Visuals/StackedBarChart';
import './Dashboard.css'
import { SalesLineChart } from '../Visuals/LineChart';
import { customerData } from '../Visuals/dummyData';
import { ActivityAreaChart } from '../Visuals/AreaChart';
import { useSelector } from 'react-redux';
import { useGetP } from '../../hooks/useApi';
import { CustomerBarChart } from '../Visuals/CustomerBarChart';


const CustomerDashboard = () => {
  const date = new Date();
  const day = date.toLocaleString('default', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

    const userData = useSelector((state)=> state.AuthReducer?.user?.data);
    const userId = userData?._id;
  console.log({userId})

  const { data: AllSellerOrder, loading: LoadingOrderItems, error: CartItemsError } = useGetP((`/order/${userId}`), ['order', userId]);
    const sellerOrders = AllSellerOrder?.orders;
    console.log({sellerOrders})
    const sellerOrdersLength = sellerOrders?.length;

    const { data: popularProducts, isLoading: getProductsLoading } = useGetP(`/products`, ['products']);
    console.log({popularProducts})
    const popular_products = popularProducts?.data;
    
    const totalProducts = Array.isArray(AllSellerOrder?.orders)
    ? AllSellerOrder?.orders.reduce((sum, product) => sum + Number(product.totalAmount || 0), 0)
    : 0;
  

    const DashboardData = {
      id: userData?._id,
      name: userData?.name,
      totalProducts: totalProducts,
      totalOrders: sellerOrdersLength,
      recentOrders:sellerOrders,
      productSales: totalProducts
    }
    console.log({DashboardData})
  return (
    <div>
        <h2>Dashboard</h2>
        <p className='m-0'>{day}</p>
        <Row className='dashboard__charts'>
          <Col lg='7' className='firstcol'>
            <div className='chart__cards'>
              <div className='visual__chart'>
                <div className='icon__price d-flex justify-content-between align-items-between'>
                  <i className="ri-sticky-note-line"></i>
                  <p>+12.40%</p>
                </div>
                <p className='mt-4'>Total Orders Recieved</p>
                <div className='d-flex gap-3 justify-content-between align-items-between'>
                  <h4 className='m-0'>{sellerOrdersLength}</h4>
                  <p className='m-0'>Orders vs last month</p>
                </div>
              </div>
              <div className='visual__chart'>
                <div className='icon__price d-flex justify-content-between align-items-between'>
                  <i className="ri-user-heart-line"></i>
                  <p>+2.06%</p>
                </div>
                <p className='mt-4'>Products Listed</p>
                <div className='d-flex gap-3 justify-content-between align-items-between'>
                  <h4 className='m-0'>#{DashboardData?.totalProducts}</h4>
                  <p className='m-0'>Users vs last month</p>
                </div>
              </div>
            </div>
            <div className='customer__chart' style={{height:'80%'}}>
              <div className='d-flex justify-content-between'>
                <div>
                  <h3>Recent Orders</h3>
                  <p>Displays the recent orders</p>
                </div>
                <select name="duration" id="duration">
                  <option value="year">This year</option>
                  <option value="month">This month</option>
                  <option value="day">Today</option>
                </select>
              </div>
              <div className='doughnut'>
                <ActivityAreaChart data={DashboardData.recentOrders}/>
              </div>
            </div>
          </Col>
          <Col lg='5' className='firstcol'>
            <div className='customer__chart chart__left'>
              <div className='d-flex justify-content-between'>
                <div>
                  <h3>Top Products Purchased</h3>
                  <p>Track the amount of products purchased</p>
                </div>
                <select name="duration" id="duration">
                  <option value="year">This year</option>
                  <option value="month">This month</option>
                  <option value="day">Today</option>
                </select>
              </div>
              <div className='doughnut'>
                <CustomerBarChart data={sellerOrders}/>
              </div>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default CustomerDashboard