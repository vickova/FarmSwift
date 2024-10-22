import React from 'react';
import { Row, Col } from 'reactstrap';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div>
        <h2>Dashboard</h2>
        <p>Tuesday, October 22, 2024</p>
        <Row>
          <Col lg='8'>
            <div className='d-flex flex-wrap gap-2'>
              <div>
                <div>
                  <i class="ri-file-list-3-line"></i>
                  <p>+2.06%</p>
                </div>
                <p>Total Sales</p>
                <div>
                  <h4>$612.917</h4>
                  <p>Products vs last month</p>
                </div>
              </div>
              <div>
                <div>
                  <i class="ri-sticky-note-line"></i>
                  <p>+12.40%</p>
                </div>
                <p>Total Orders</p>
                <div>
                  <h4>34.760</h4>
                  <p>Orders vs last month</p>
                </div>
              </div>
              <div>
                <div>
                  <i class="ri-user-heart-line"></i>
                  <p>+2.06%</p>
                </div>
                <p>Visitors</p>
                <div>
                  <h4>14.987</h4>
                  <p>Users vs last month</p>
                </div>
              </div>
              <div>
                <div>
                  <i class="ri-store-line"></i>
                  <p>+12.06%</p>
                </div>
                <p>Total Sold Products</p>
                <div>
                  <h4>12.987</h4>
                  <p>Products vs last month</p>
                </div>
              </div>
            </div>
            <div>
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
              <div>
                <h4>tracking graph goes here</h4>
              </div>
            </div>
          </Col>
          <Col lg='4'>
          <div>
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
              <div>
                <h4>tracking graph goes here</h4>
              </div>
            </div>
            <div>
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
              <div>
                <h4>tracking graph goes here</h4>
              </div>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default Dashboard