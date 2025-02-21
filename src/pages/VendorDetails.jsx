import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { vendors } from '../utils/Dataset';
import { VendorStyle } from '../styles/PagesStyles';
import RatingContent from '../components/RatingContent/RatingContent';
import Reviews from '../components/Reviews/Reviews';
import { useGet } from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import calculateAvgRating from '../components/RatingContent/AvgRating';

const VendorDetails = () => {
const [open, setOpen] = useState(false);
console.log(open)
const {id} = useParams();
 const { data: AllUsers, loading: LoadingUsers, error: UsersError } = useGet(`${BASE_URL}/users`);
const vendordetail = AllUsers?.data.filter((user)=>user._id === id)[0]
const {avgRating, totalRating} = calculateAvgRating(vendordetail?.reviews||[]);console.log(avgRating)
const validAvgRating = isNaN(avgRating) ? 0 : Math.round(avgRating); 
  console.log(vendordetail)
const total_rating = 5
  const remaining_rating = total_rating-validAvgRating
if (!vendordetail){
    return <h4>Loading ...</h4>
}
  return (
    <VendorStyle>
                <div className='vendor-cover d-flex align-items-center justify-content-center gap-5'>
                    <div className='vendor-picture'>
                        <img src={vendordetail.photo} alt="" />
                    </div>
                    <div className='vendor-text'>
                        <h2>{vendordetail.username}</h2>
                        <div className='gap-4 d-flex align-items-center my-3'>
                            <p className='vendor-major'>{vendordetail.email}</p>
                            <button onClick={()=>setOpen(true)} style={{backgroundColor:'#fff', borderRadius:'5px', padding:'0 .5rem', color:'#199b74', border:'1px solid #199b74'}}>Rate me</button>
                        </div>
                        <div className='rating gap-2 d-flex align-items-center'>
                            <span className='stars d-flex gap-1'>
                            {
                                [...Array(validAvgRating)]?.map((item, index)=>{
                                    return <i key={index} className="ri-star-fill"></i>
                                })
                            }
                            {
                                [...Array(remaining_rating?remaining_rating:0)]?.map((item, index)=>{
                                    return <i key={index} className="ri-star-line"></i>
                                })
                            }
                            </span>
                            <p>{vendordetail.rating}</p>
                        </div>
                        <p className='vendor-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid qui voluptates officia porro quod a cumque aperiam ab vero optio. Qui dolorum laudantium quibusdam cum pariatur corporis possimus, aut repudiandae?</p>
                        <div className='links d-flex gap-4'>
                            <div className='vednors-details-link'><i className="ri-facebook-box-line"></i></div>
                            <div className='vednors-details-link'><i className="ri-twitter-line"></i></div>
                            <div className='vednors-details-link'><i className="ri-youtube-line"></i></div>
                            <div className='vednors-details-link'><i className="ri-linkedin-box-line"></i></div>
                        </div>
                    </div>
                    <RatingContent open={open} setOpen={setOpen}/>
                </div>
        <div className='reviews_container text-center'>
        <h4>Reviews</h4>

        <div className='reviews_cover d-flex gap-4'>
        {
         vendordetail.reviews.map((item, index)=>{
            return <Reviews key={index} review={item}/>
            })
        }
        </div>
        </div>
    </VendorStyle>
  )
}

export default VendorDetails