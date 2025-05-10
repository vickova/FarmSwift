import React from 'react';
import { Row, Col } from 'reactstrap';
// import {DashboardChart, DoughnutCircle, LineChart} from '../Visuals/DashboardChart';
import { DashboardChart, LineChart } from '../Visuals/DashboardChart';
import { ProductsBarChart } from '../Visuals/barChart';
import { UserPieChart } from '../Visuals/Piechart';
import { OrderStatusChart } from '../Visuals/StackedBarChart';
import './Dashboard.css'
import { SalesLineChart } from '../Visuals/LineChart';
import { sellerData } from '../Visuals/dummyData';
import { ActivityAreaChart } from '../Visuals/AreaChart';
import { useSelector } from 'react-redux';
import { useGetP } from '../../hooks/useApi';



const Dashboard = () => {
  console.log(sellerData)
  const userData = JSON.parse(localStorage.getItem('user'));
  const userId = userData?._id;
console.log({userId})
  const { data: popularProducts, isLoading: getProductsLoading } = useGetP(`/products`, ['products']);
  console.log({popularProducts})
  const popular_products = popularProducts?.data;

  const totalProducts = popular_products?.filter((item)=> item.createdBy === userData?._id);
  const totalProductsLength = totalProducts?.length;
  console.log({totalProducts})

  const { data: AllSellerOrder, loading: LoadingOrderItems, error: CartItemsError } = useGetP((`/order/seller/${userId}`), ['order', userId]);
  const sellerOrders = AllSellerOrder?.data;
  console.log({sellerOrders})
  const sellerOrdersLength = sellerOrders?.length;


  // id: 1,
  // name: "Ayo Farmer",
  // totalProducts: 5,
  // totalOrders: 12,
  // recentOrders: [
  //   { product: "Tomatoes", quantity: 10, buyer: "Grace Harvest", status: "Fulfilled", amount: 5000 },
  //   { product: "Pepper", quantity: 5, buyer: "Musa Buyer", status: "Pending", amount: 2500 },
  // ],
  // revenueByMonth: [
  //   { month: "Jan", revenue: 8000 },
  //   { month: "Feb", revenue: 11000 },
  //   { month: "Mar", revenue: 13000 },
  // ],
  // productSales: [
  //   { name: "Tomatoes", count: 6 },
  //   { name: "Pepper", count: 4 },
  //   { name: "Yam", count: 2 },
  // ],
  // inventory: [
  //   { name: "Tomatoes", stock: 25 },
  //   { name: "Pepper", stock: 6 },
  //   { name: "Yam", stock: 15 },
  // ],
  const DashboardData = {
    id: userData?._id,
    name: userData?.name,
    totalProducts: totalProductsLength,
    totalOrders: sellerOrdersLength,
    recentOrders:sellerOrders,
    productSales: totalProducts
  }
  console.log({DashboardData})
  const date = new Date();
  const day = date.toLocaleString('default', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
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
                  <h4 className='m-0'>{DashboardData?.totalProducts}</h4>
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
                <ProductsBarChart data={DashboardData?.productSales}/>
              </div>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default Dashboard