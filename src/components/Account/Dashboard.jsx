import React from 'react';
import { Row, Col } from 'reactstrap';
import {DashboardChart, DoughnutCircle, LineChart} from '../Visuals/DashboardChart';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div>
        <h2>Dashboard</h2>
        <p className='m-0'>Tuesday, October 22, 2024</p>
        <Row className='dashboard__charts'>
          <Col lg='7' className='firstcol'>
            <div className='chart__cards'>
              <div className='visual__chart'>
                <div className='icon__price d-flex justify-content-between'>
                  <i className="ri-file-list-3-line"></i>
                  <p>+2.06%</p>
                </div>
                <p className='mt-4'>Total Sales</p>
                <div className='d-flex gap-3 justify-content-between align-items-between'>
                  <h4 className='m-0'>$612.917</h4>
                  <p className='m-0'>Products vs last month</p>
                </div>
              </div>
              <div className='visual__chart'>
                <div className='icon__price d-flex justify-content-between align-items-between'>
                  <i className="ri-sticky-note-line"></i>
                  <p>+12.40%</p>
                </div>
                <p className='mt-4'>Total Orders</p>
                <div className='d-flex gap-3 justify-content-between align-items-between'>
                  <h4 className='m-0'>34.760</h4>
                  <p className='m-0'>Orders vs last month</p>
                </div>
              </div>
              <div className='visual__chart'>
                <div className='icon__price d-flex justify-content-between align-items-between'>
                  <i className="ri-user-heart-line"></i>
                  <p>+2.06%</p>
                </div>
                <p className='mt-4'>Visitors</p>
                <div className='d-flex gap-3 justify-content-between align-items-between'>
                  <h4 className='m-0'>14.987</h4>
                  <p className='m-0'>Users vs last month</p>
                </div>
              </div>
              <div className='visual__chart'>
                <div className='icon__price d-flex justify-content-between align-items-between'>
                  <i className="ri-store-line"></i>
                  <p>+12.06%</p>
                </div>
                <p className='mt-4'>Total Sold Products</p>
                <div className='d-flex gap-3 justify-content-between align-items-between'>
                  <h4 className='m-0'>12.987</h4>
                  <p className='m-0'>Products vs last month</p>
                </div>
              </div>
            </div>
            <div className='customer__chart'>
              <div className='d-flex justify-content-between align-items-between'>
                <div>
                  <h3>Customer Habbits</h3>
                  <p>Track your customer habit</p>
                </div>
                <select name="duration" id="duration">
                  <option value="year">This year</option>
                  <option value="month">This month</option>
                  <option value="day">Today</option>
                </select>
              </div>
              <div>
                <DashboardChart/>
              </div>
            </div>
          </Col>
          <Col lg='5' className='firstcol'>
            <div className='customer__chart'>
              <div className='d-flex justify-content-between'>
                <div>
                  <h3>Customer Habbits</h3>
                  <p>Track your customer habit</p>
                </div>
                  <select name="duration" id="duration">
                    <option value="year">This year</option>
                    <option value="month">This month</option>
                    <option value="day">Today</option>
                  </select>
              </div>
              <div className='line'>
                <LineChart/>
              </div>
            </div>
            <div className='customer__chart'>
              <div className='d-flex justify-content-between'>
                <div>
                  <h3>Customer Habbits</h3>
                  <p>Track your customer habit</p>
                </div>
                <select name="duration" id="duration">
                  <option value="year">This year</option>
                  <option value="month">This month</option>
                  <option value="day">Today</option>
                </select>
              </div>
              <div className='doughnut'>
                <DoughnutCircle/>
              </div>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default Dashboard