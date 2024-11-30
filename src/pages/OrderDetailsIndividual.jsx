import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { orders } from '../utils/Dataset';
import { IndividualOrder } from '../styles/PagesStyles';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

const OrderDetailsIndividual = () => {
    const {id} = useParams()
    let currentOrder = orders?.filter((item)=> item.orderId === id)
    currentOrder = currentOrder[0]
    console.log(currentOrder)
  return (
    <IndividualOrder>
        <h5><Link to='/account/order-details' className='back-order'>Back to Orders</Link></h5>
        <div>
            <div className='order-section'>
                <div className='order-flex'>
                    <p>Order Id: #{currentOrder.orderId}</p>
                    <p>Status: {currentOrder.status}</p>
                </div>
                <p>Order date: {currentOrder.orderDate}</p>
            </div>
            <div className='order-section'>
                <h5>Customer Information</h5>
                <div>
                    <div className='order-flex'>
                        <p>Name: {currentOrder.customerName}</p>
                        <p>Contact: {currentOrder.customerName.split(' ').join(' ').toLowerCase()}@gmail.com</p>
                    </div>
                    <p>Billing Address: 123 Elm St, Springfield, IL, USA</p>
                    <p>Shipping Address: 123 Elm St, Springfield, IL, USA</p>
                </div>
            </div>
            <div className='order-section'>
                <h5>Order Items</h5>
                <DataTable 
                value={orders} 
                responsiveLayout="scroll" 
                paginator 
                emptyMessage="No data found" 
                paginatorTemplate="CurrentPageReport RowsPerPageDropDown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink" 
                rows={5} 
                tableStyle={{ minWidth: '50rem' }}
                stripedRows={true}
            >
                <Column field="orderId" header="Order ID"/>
                <Column field="customerName" sortable header="Customer Name" />
                <Column field="orderDate" sortable header="Order Date" />
                <Column field="totalAmount" sortable header="Order Total" />
                </DataTable>
            </div>
            <div className='order-section'>
                <h5>Payment Details</h5>
                <div>
                    <p>Payment Method: Credit Card (**** **** **** 1234)</p>
                    <p>Transaction ID: TXN-987654</p>
                    <p>Payment Status: Paid</p>
                </div>
            </div>
            <div className='order-section'>
                <h5>Shipping Details</h5>
                <div>
                    <p>Shipping Method: Standard</p>
                    <p>Carrier: UPS</p>
                    <p>Tracking Number: 1Z999AA10123456784 (Track Shipment)</p>
                    <p>Estimated Delivery: 2024-11-25</p>
                </div>
            </div>
            <div className='order-section'>
                <h5>Customer/Order Notes</h5>
                <div>
                    <p>Customer Note: Please leave the package at the back door</p>
                    <p>Admin Note: Confirmed delivery address. </p>
                </div>
            </div>
        </div>
    </IndividualOrder>
  )
}

export default OrderDetailsIndividual