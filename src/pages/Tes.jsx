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
  const navigate = useNavigate();
  const identityBodyTemplate = (rowData) => {
    console.log(rowData)
    return (
      <div className='vendor-identity vendor-item d-flex align-items-center gap-4'>
      <img src={rowData} alt="" />
    </div>
    );
  };
  const ratingBodyTemplate = (rowData) =>{
    return(
    <div className='rating gap-2 d-flex align-items-center'>
      <span className='stars d-flex gap-1'>
        {[...Array(Number(rowData.rating))].map((x, i) =>
          <i key={i} className="ri-star-fill"></i>
        )}

      </span>
      <p>{rowData.rating}</p>
    </div>
    )
  }
  const redirectTemplate = (rowData)=>{
    return (
      <button className="vendor-button p-component" onClick={()=> navigate(`/vendors/${rowData.id}`)}>
          View More Details
      </button>
  );
  }
  return (
    <VendorStyle>
    <Container className='vendor-wrapper'>
      <h2 className='vendor-header'>Our Vendors</h2>
      <DataTable 
              value={AllUsers} 
              responsiveLayout="scroll" 
              paginator 
              emptyMessage="No data found" 
              paginatorTemplate="CurrentPageReport RowsPerPageDropDown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink" 
              rows={5} 
              tableStyle={{ minWidth: '50rem' }}
              stripedRows={true}
          >
              {/* <Column field="photo" header="photo" body={identityBodyTemplate}/> */}
              <Column field="username" sortable header="username" />
              <Column body={redirectTemplate} />
              {/* <Column field="city" sortable header="City" />
              <Column field="country" sortable header="Country" /> */}
        </DataTable>
    </Container>
    </VendorStyle>
  )
}

export default Vendors