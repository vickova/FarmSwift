import React, {useState} from 'react';
import { Rating } from 'react-simple-star-rating';
import Write from '../../assets/icons/Write.svg';
import './RatingContent.css';
import { useParams, useNavigate } from 'react-router-dom';
import { vendors } from '../../utils/Dataset';
// import { usePost, useGet } from '../../hooks/useFetch';
import { usePost, usePostBody } from '../../hooks/useApi';
import { useGetP } from '../../hooks/useApi';
import { BASE_URL } from '../../utils/config';
import { SignUser } from '../../redux/actions';
import { useSelector } from 'react-redux';


const RatingContent = ({open, setOpen}) => {
    const navigate = useNavigate();
    const [rating, setRating] = useState(0)
    const [description, setDecription] = useState('')
    const formData={
            description: description,
            rateValue:rating
          }
    const [reviewDetails, setReviewDetails] = useState(null)
    const {id} = useParams()
    console.log(id)
    // const { data: AllUsers, loading: LoadingUsers, error: UsersError } = useGet(`${BASE_URL}/users`);
    const { data: AllUsers, loading: LoadingUsers, error: UsersError } = useGetP(`/users`, ['users']);

    console.log(AllUsers)
    const current_vendor = AllUsers?.data.filter((user)=>user._id === id)[0]
    const userData = JSON.parse(localStorage.getItem('user'));
    const addReview = usePostBody(`/reviews/${userData?._id}`);
    console.log({addReview:addReview})
    // const current_vendor = vendors?.filter((item)=>item?.id===Number(id))[0];
    console.log(current_vendor)
          
    const handleChange = (event) => {
        setDecription(event.target.value);
    };
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)

    // other logic
  }

// const handleReviewSubmit = (event) => {
//         event.preventDefault();
//     console.log('clicked')
    
//       postData({
//         sellerId:id,
//         rating:formData.rateValue,
//         review:formData.description
//     }, SignUser, `/vendors/${id}`)
//     setReviewDetails(reviewResponse?.data)
//       // dispatch(SignUser(formData))
//       };
const handleReviewSubmit = (event) => {
    event.preventDefault();
if (userData?.isVerified) {
    addReview.mutate({
        sellerId:id,
            rating:formData.rateValue,
            review:formData.description
    })

} else {
    console.log('Please login');
    return navigate('/login');
}
};
const handleClose = (e)=>{
    e.preventDefault()
    setOpen(false)
} 
const ToggleSetter = (e)=>{
    if(e.target.classList.value === 'toggle-children-overlay'){
      setOpen(!open);
    }

  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value, index) => console.log(value, index)
  return (
    <div className='toggle-children-overlay' style={{display:open?'block':'none'}} onClick={ToggleSetter}>
    <div className='rate-container' style={{ position:'fixed', boxShadow:'3px 3px 25px -3px #ddd', padding:'1.2rem', height:'100%', top:0, right:0, backgroundColor:'#fff', zIndex:99, overflowY:'auto'}}>
        <div style={{marginTop:4}}>
            <h4 style={{color:'#199b74'}}>
            ⭐  Rate and Review {current_vendor?.name}
            </h4>
            <p style={{fontSize:'1rem', margin:'2rem 0', color:'rgba(18, 18, 18, 0.8)'}}>
                Your feedback matters! Rate your experience and help us improve while guiding other customers.
            </p>
        </div>
        <div  style={{backgroundColor:'rgba(255, 255, 255, 1)', border:'1px solid rgba(241, 240, 242, 1)', padding:'.5rem', margin:'1rem 0', borderRadius:'16px'}}>
            <p style={{fontSize:'1rem', margin:'1rem 0'}}>
                How would you rate your experience with this product/course?
            </p>
            <div style={{
                display: 'flex',
                gap:2,
                justifyContent: 'center', // Centers horizontally
                alignItems: 'center', // Centers vertically (if needed)
            }}>
                <Rating
                    onClick={handleRating}
                    onPointerEnter={onPointerEnter}
                    onPointerLeave={onPointerLeave}
                    onPointerMove={onPointerMove}
                    size={20}
                        /* Available Props */
                    />
            </div>
            <p style={{fontSize:'1rem', textAlign:'center', color:'rgba(10, 10, 10, 0.5)', marginTop:2}}>Tap A Star to Rate</p>
        </div>
        <form>
        <div style={{backgroundColor:'rgba(255, 255, 255, 1)', border:'1px solid rgba(241, 240, 242, 1)', padding:'.5rem', margin:'1rem 0', borderRadius:'16px', boxShadow:'rgba(0, 0, 0, 0.08) rgba(0, 0, 0, 0.08) rgba(0, 0, 0, 0.08) rgba(0, 0, 0, 0.08)'}}>
            <p style={{margin:'.5rem 0'}}><span style={{fontWeight:'600'}}>Write a Review</span> <span style={{color:'rgba(10, 10, 10, 0.7)'}}>(optional).</span></p>
            <div style={{display:'flex', borderRadius:'8px', padding:'.5rem 1rem'}}>
                <input
                onChange={handleChange} type="text" style={{outline:'none', border:'1px solid rgba(0, 0, 0, 0.08)', width:'100%', boxSizing:'border-box', height:'40px', border:'none', fontSize:'1rem'}} placeholder="Tell us what you liked or how we can improve"/>
                <img src={Write} alt="" />
                {/* color:'rgba(179, 179, 179, 1)' */}
            </div>
            </div>
            <div style={{display:'flex', gap:2, my:3}}>
                <button variant="contained"
                onClick={handleClose}
                style={{width:'100%', border:'none',display:'flex',justifyContent:'center', alignItems:'center', gap:1, border:'1px solid rgba(110, 107, 123, 1)', textTransform:'none', color:'rgba(18, 18, 18, 1)', boxShadow:'none', backgroundColor:'rgba(219, 220, 221, 1)', padding:'.8rem 1rem', minWidth:'fit-content', borderRadius:'100px', ':hover': {
                backgroundColor:'rgba(219, 220, 221, 1)', 
                fontWeight:600,
                boxShadow:'0px 3px 1px -2px rgba(179, 179, 179, 0.2),0px 2px 2px 0px rgba(179, 179, 179, 0.2),0px 1px 5px 0px rgba(179, 179, 179, 0.2)'
                }}}>Cancel</button>
                <button variant="contained"
                onClick={handleReviewSubmit}
                style={{width:'100%', border:'none',display:'flex', justifyContent:'center', alignItems:'center', gap:1, textTransform:'none', color:'rgba(255, 255, 255, 1)', boxShadow:'none', backgroundColor:'#199b74', padding:'.8rem 1rem', minWidth:'fit-content', borderRadius:'100px', ':hover': {
                backgroundColor:'#199b74', 
                fontWeight:600,
                boxShadow:'0px 3px 1px -2px rgba(86, 4, 246,0.2),0px 2px 2px 0px rgba(86, 4, 246,0.14),0px 1px 5px 0px rgba(86, 4, 246,0.12)'
                }}}>Submit Feedback</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default RatingContent