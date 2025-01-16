import React, {useState} from 'react';
import { Rating } from 'react-simple-star-rating';
import Write from '../../assets/icons/Write.svg';
import './RatingContent.css';
import { useParams } from 'react-router-dom';
import { vendors } from '../../utils/Dataset';


const RatingContent = ({open, setOpen}) => {
    const {id} = useParams()
    console.log(id)
    const current_vendor = vendors?.filter((item)=>item?.id===Number(id))[0];
    console.log(current_vendor)
    const [rating, setRating] = useState(0)
    const [description, setDecription] = useState('')
    const formData={
            description: description,
            rateValue:rating
          }
          
    const handleChange = (event) => {
        setDecription(event.target.value);
    };
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)

    // other logic
  }
  const handleReviewSubmit = (e)=>{
    e.preventDefault()
    console.log(formData)

}
const handleClose = (e)=>{
    e.preventDefault()
    setOpen(false)
}
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value, index) => console.log(value, index)
  return (
    <div className='rate-container' style={{display:open?'block':'none', position:'fixed', boxShadow:'3px 3px 25px -3px #ddd', padding:'1.2rem', height:'100%', top:0, right:0, backgroundColor:'#fff', zIndex:99, overflowY:'auto'}}>
        <div style={{marginTop:4}}>
            <h4 style={{color:'#199b74'}}>
            ⭐Rate and Review {current_vendor?.name}
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
                style={{width:'100%',display:'flex', alignItems:'center', gap:1, border:'1px solid rgba(110, 107, 123, 1)', textTransform:'none', color:'rgba(18, 18, 18, 1)', boxShadow:'none', backgroundColor:'rgba(219, 220, 221, 1)', padding:'1rem 2rem', minWidth:'fit-content', borderRadius:'100px', ':hover': {
                backgroundColor:'rgba(219, 220, 221, 1)', 
                fontWeight:600,
                boxShadow:'0px 3px 1px -2px rgba(179, 179, 179, 0.2),0px 2px 2px 0px rgba(179, 179, 179, 0.2),0px 1px 5px 0px rgba(179, 179, 179, 0.2)'
                }}}>Cancel</button>
                <button variant="contained"
                onClick={handleReviewSubmit}
                style={{width:'100%',display:'flex', alignItems:'center', gap:1, textTransform:'none', color:'rgba(255, 255, 255, 1)', boxShadow:'none', backgroundColor:'#199b74', padding:'1rem 2rem', minWidth:'fit-content', borderRadius:'100px', ':hover': {
                backgroundColor:'#199b74', 
                fontWeight:600,
                boxShadow:'0px 3px 1px -2px rgba(86, 4, 246,0.2),0px 2px 2px 0px rgba(86, 4, 246,0.14),0px 1px 5px 0px rgba(86, 4, 246,0.12)'
                }}}>Submit Feedback</button>
            </div>
        </form>
    </div>
  )
}

export default RatingContent