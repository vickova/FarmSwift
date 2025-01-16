import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { vendors } from '../utils/Dataset';
import { VendorStyle } from '../styles/PagesStyles';
import RatingContent from '../components/RatingContent/RatingContent';

const VendorDetails = () => {
const [open, setOpen] = useState(false);
console.log(open)
const {id} = useParams();
const vendordetail = vendors.filter((item)=> item.id === Number(id))
console.log(vendordetail)
  return (
    <VendorStyle>
        {
            vendordetail.map((item, index)=>{
                return <div key={index} className='vendor-cover d-flex align-items-center justify-content-center gap-5'>
                    <div className='vendor-picture'>
                        <img src={item.image} alt="" />
                    </div>
                    <div className='vendor-text'>
                        <h2>{item.name}</h2>
                        <div className='gap-4 d-flex align-items-center my-3'>
                            <p className='vendor-major'>Rice farmer</p>
                            <button onClick={()=>setOpen(true)} style={{backgroundColor:'#fff', borderRadius:'5px', padding:'0 .5rem', color:'#199b74', border:'1px solid #199b74'}}>Rate me</button>
                        </div>
                        <div className='rating gap-2 d-flex align-items-center'>
                            <span className='stars d-flex gap-1'>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </span>
                            <p>{item.rating}</p>
                        </div>
                        <p className='vendor-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid qui voluptates officia porro quod a cumque aperiam ab vero optio. Qui dolorum laudantium quibusdam cum pariatur corporis possimus, aut repudiandae?</p>
                        <div className='links d-flex gap-4'>
                            <div><i className="ri-facebook-box-line"></i></div>
                            <div><i className="ri-twitter-line"></i></div>
                            <div><i className="ri-youtube-line"></i></div>
                            <div><i className="ri-linkedin-box-line"></i></div>
                        </div>
                    </div>
                    <RatingContent open={open} setOpen={setOpen}/>
                </div>
            })
        }
    </VendorStyle>
  )
}

export default VendorDetails