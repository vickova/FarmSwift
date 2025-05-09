import React, {useRef} from 'react'
import { Container, Table, Col, Row } from 'reactstrap';
import { DataTable } from 'primereact/datatable';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { VendorStyle } from '../styles/PagesStyles';
import { Column } from 'primereact/column';
import { vendors } from '../utils/Dataset';
import { useGet } from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import { useGetP } from '../hooks/useApi';


const Vendors = () => {
  const { data: AllUsers, loading: LoadingUsers, error: UsersError } = useGetP(`/users`, ['users']);

    const AllSellers = AllUsers?.data.filter((user)=>user.role === 'seller')
    console.log(AllSellers)
    console.log(vendors)
  const navigate = useNavigate();
  const identityBodyTemplate = (rowData) => {
    return (
      <div className='vendor-identity vendor-item d-flex align-items-center gap-4'>
      <img src={rowData.photo} alt="" />
      <h3>{rowData.username}</h3>
    </div>
    );
  };
  const ratingBodyTemplate = (rowData) => {
    if (!rowData.createdAt) return "N/A"; // Handle cases where the date is missing
  
    const date = new Date(rowData.createdAt); // Extract the correct date field
  
    const formattedDate = date.toLocaleString("en-US", {
      weekday: "long",  // "Tuesday"
      year: "numeric",  // "2025"
      month: "long",    // "February"
      day: "numeric",   // "18"
      hour: "numeric",  // "12 PM"
      minute: "numeric",
      second: "numeric",
      hour12: true // Use 12-hour format
    });
  
    return (
      <div className="rating gap-2 d-flex align-items-center">
        {formattedDate}
      </div>
    );
  };
  
  const redirectTemplate = (rowData)=>{
    return (
      <button className="vendor-button p-component" onClick={()=> navigate(`/vendors/${rowData._id}`)}>
          View More Details
      </button>
  );
  }
  return (
    <VendorStyle>
    <Container className='vendor-wrapper'>
      <h2 className='vendor-header'>Our Vendors</h2>
      <DataTable 
              value={AllSellers} 
              responsiveLayout="scroll" 
              paginator 
              emptyMessage="No data found" 
              paginatorTemplate="CurrentPageReport RowsPerPageDropDown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink" 
              rows={5} 
              tableStyle={{ minWidth: '50rem' }}
              stripedRows={true}
          >
              <Column field="identity" header="Identity" body={identityBodyTemplate} />
              <Column field="createdAt" header="Joined Date" body={ratingBodyTemplate} sortable />
              <Column field="email" sortable header="Email" />
              <Column body={redirectTemplate} />
        </DataTable>
    </Container>
    </VendorStyle>
  )
}

export default Vendors