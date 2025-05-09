import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { orders } from '../utils/Dataset';
import { OrderDetailsStyle } from '../styles/PagesStyles';
import { Link } from 'react-router-dom';
import { useGetP } from '../hooks/useApi';
import { useSelector } from 'react-redux';

const OrderDetails = () => {
  const userData = useSelector((state)=> state.AuthReducer?.user?.data);
  const userId = userData?._id;
  console.log({userData})
  const { data: AllOrder, loading: LoadingOrderItems, error: CartItemsError } = useGetP(
    userId ? (userData?.role === 'seller' ? `/order/seller/${userId}` : `/order/${userId}`) : null,
    ['order', userId]
  );
  console.log({CartItemsError})
    console.log('AllOrder', AllOrder);
  
  const ratingBodyTemplate = (rowData)=>{
    const data = rowData.paymentStatus
    return (
      <p className="p-button p-component" style={{color:'#fff', backgroundColor: `${data==='Pending'?'rgba(255, 165, 0, 0.5)': data=== 'paid'? 'rgba(0,0, 255, 0.5)': data === 'Delivered'?'rgba(0,128, 0, 0.5)':'rgba(255, 0, 0, 0.5)'}`}}>
          {rowData.paymentStatus}
      </p>
  );
  }
  const orderBodyTemplate = (rowData)=>{
    if(userData?.role === 'seller'){
    return(
      <p className="p-button p-component">
          {rowData._id}
      </p>
  )}else{
    return (
      <Link to={`/account/order-details/${rowData._id}`} className='order-link'>
      <p className="p-button p-component">
          {rowData._id}
      </p>
      </Link>
  );
}
  }
  return (
    <OrderDetailsStyle>
      <h3>Order Overview</h3>
      <div className='order-details'>
        <DataTable 
                value={AllOrder?.orders || AllOrder?.data} 
                responsiveLayout="scroll" 
                paginator 
                emptyMessage="No data found" 
                paginatorTemplate="CurrentPageReport RowsPerPageDropDown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink" 
                rows={5} 
                tableStyle={{ minWidth: '50rem' }}
                stripedRows={true}
                loading={LoadingOrderItems}
            >
                {/* Common to all users */}
                <Column field="_id" header="Order ID" body={orderBodyTemplate} />
                <Column field="createdAt" sortable header="Order Date" />

                {/* Conditional Columns */}
                {userData?.role === 'seller' ? (
                  <>
                    <Column field="customerName" sortable header="Customer Name" />
                    <Column field="products" header="Items Sold" body={(rowData) => (
                      <span>{rowData.products?.length}</span>
                    )} />
                  </>
                ) : (
                  <>
                    <Column field="shippingAddress" header="Shipping Address" />
                    <Column field="products" header="Items Ordered" body={(rowData) => (
                      <span>{rowData.products?.length}</span>
                    )} />
                  </>
                )}

                {/* Common */}
                <Column field="totalAmount" sortable header="Order Total" style={{ textAlign: 'center' }} />
                <Column field="paymentStatus" sortable header="Order Status" body={ratingBodyTemplate} />
          </DataTable>
        </div>
    </OrderDetailsStyle>
  )
}

export default OrderDetails