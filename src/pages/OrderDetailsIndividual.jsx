import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { orders } from '../utils/Dataset';
import { IndividualOrder } from '../styles/PagesStyles';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useSelector } from 'react-redux';
import { useGetP, usePaymentResponse, usePostBody } from '../hooks/useApi';
import { DateFormtatter } from '../components/Dateconverter/DateConverter';
import Loader from '../components/Loader/Loader';

const OrderDetailsIndividual = () => {
    const {id} = useParams()

   

    const userData = JSON.parse(localStorage.getItem('user'));
      const userId = userData?._id;
      const { data: AllOrder, loading: LoadingOrderItems, error: CartItemsError } = useGetP(userId ? `/order/${userId}` : null, ['order', userId]);
      console.log('AllOrder', AllOrder);

    const { data: popular_products, isLoading: getProductsLoading } = useGetP(`/products`, ['products']);
    console.log({reactQueryProducts: popular_products})

    let currentOrder = AllOrder?.orders?.filter((item)=> item._id === id)
    currentOrder = currentOrder?currentOrder[0]: {}
    console.log({currentOrder})
    // const [formData, setFormData] = useState({
    //     email: '',
    //     amount: currentOrder?.totalAmount,
    //     orderId: currentOrder?._id,
    //     });
    const userPaymentResponse = usePaymentResponse(`order/pay`);
    
const products = currentOrder?.products?.map((item)=>{
    console.log({item})
    const product = popular_products?.data?.find((product)=> product?._id === item.product)
    console.log({product})
    return {
        ...item,
        image: product?.photo,
        name: product?.name,
        price: product?.price,
        quantity: item?.quantity,
        _id: item?._id,
        createdBy: product?.createdBy,
        description: product?.description,
        category: product?.category,
        createdAt: product?.createdAt
}
})
console.log({products})
const date = DateFormtatter(currentOrder?.createdAt)
console.log('date', date)

const identityBodyTemplate = (rowData) => {
    return (
      <div className='' style={{width:'30px', height:'30px'}}>
      <img src={rowData.image} alt="" style={{width:'100%', height:'100%', borderRadius:'4px'}}/>
    </div>
    );
  };
  const totalBodyTemplate = (rowData) => {
    return (
      <p style={{margin:0}}>{rowData.quantity * rowData.price}</p>
    );
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    console.log('clicked')
    userPaymentResponse.mutate({
        email: currentOrder?.email,
        amount:currentOrder?.totalAmount,
        orderId:currentOrder?._id,
        transactionRef: currentOrder?.paymentReference,
  })
  console.log({userPaymentResponse})
};
    userPaymentResponse?.isSuccess && console.log('Payment Response:', userPaymentResponse?.data?.data);
  return (
    <IndividualOrder>
        <h5><Link to='/account/order-details' className='back-order'>Back to Orders</Link></h5>
        <div>
            <div className='order-section'>
                <div className='order-flex'>
                    <p>Order Id: #{currentOrder?._id}</p>
                    <p>Status: {currentOrder?.paymentStatus}</p>
                </div>
                <p>Order date: {date}</p>
            </div>
            <div className='order-section'>
                <h5><strong>Customer Information</strong></h5>
                <div>
                    <div className='order-flex'>
                        <p>Name: {currentOrder?.name}</p>
                        <p>Contact: {currentOrder?.email}</p>
                    </div>
                    <p>Shipping Address: {currentOrder?.shippingAddress}</p>
                </div>
            </div>
            <div className='order-section'>
                <h5><strong>Order Items</strong></h5>
                <DataTable 
                value={products} 
                responsiveLayout="scroll" 
                paginator 
                emptyMessage="No data found" 
                paginatorTemplate="CurrentPageReport RowsPerPageDropDown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink" 
                rows={5} 
                tableStyle={{ minWidth: '50rem' }}
                stripedRows={true}
                loading={LoadingOrderItems}
            >
                <Column field="_id" header="Order ID"/>
                <Column field="image" header="" body={identityBodyTemplate}/>
                <Column field="name" sortable header="Product Name" />
                <Column field="quantity" sortable header="Quantity" />
                <Column field="price" sortable header="Price" />
                <Column field="" sortable header="Total" body={totalBodyTemplate} />
                </DataTable>
            </div>
            <div className='order-section'>
                <h5><strong>Payment Details</strong></h5>
                <div>
                    <p>Transaction ID: {currentOrder?.paymentReference}</p>
                    <p>Payment Status: {currentOrder?.paymentStatus}</p>
                </div>
            </div>
            {/* <div className='order-section'>
                <h5>Shipping Details</h5>
                <div>
                    <p>Shipping Method: Standard</p>
                    <p>Carrier: UPS</p>
                    <p>Tracking Number: 1Z999AA10123456784 (Track Shipment)</p>
                    <p>Estimated Delivery: 2024-11-25</p>
                </div>
            </div> */}
            <div className='order-section'>
                <h5><strong>Customer/Order Notes</strong></h5>
                <div>
                    <p>Customer Note: {currentOrder?.remarks}</p>
                </div>
            </div>
            <button onClick={handlePaymentSubmit} style={{padding:'5px 8px', borderRadius:'5px', margin:'15px 0', border:'none', background:'#199b74', color:'#fff'}}>{!userPaymentResponse.isPending ? 'Make Payment' : <Loader/>}</button>
        </div>
    </IndividualOrder>
  )
}

export default OrderDetailsIndividual