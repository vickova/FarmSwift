import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { orders } from '../utils/Dataset';
import { OrderDetailsStyle } from '../styles/PagesStyles';
import { Link } from 'react-router-dom';

const OrderDetails = () => {
  const ratingBodyTemplate = (rowData)=>{
    const data = rowData.status
    return (
      <p className="p-button p-component" style={{color:'#fff', backgroundColor: `${data==='Pending'?'rgba(255, 165, 0, 0.5)': data=== 'Shipped'? 'rgba(0,0, 255, 0.5)': data === 'Delivered'?'rgba(0,128, 0, 0.5)':'rgba(255, 0, 0, 0.5)'}`}}>
          {rowData.status}
      </p>
  );
  }
  const orderBodyTemplate = (rowData)=>{
    return (
      <Link to={`/account/order-details/${rowData.orderId}`} className='order-link'>
      <p className="p-button p-component">
          {rowData.orderId}
      </p>
      </Link>
  );
  }
  return (
    <OrderDetailsStyle>
      <h3>Order Overview</h3>
      <div className='order-details'>
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
                <Column field="orderId" header="Order ID" body={orderBodyTemplate}/>
                <Column field="customerName" sortable header="Customer Name" />
                <Column field="orderDate" sortable header="Order Date" />
                <Column field="totalAmount" sortable header="Order Total" />
                <Column field="status" sortable header="Order Status" body={ratingBodyTemplate}/>
          </DataTable>
        </div>
    </OrderDetailsStyle>
  )
}

export default OrderDetails