import React, {useState} from 'react';
import { setCategory } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


const ToggleCategories = ({children, title, icon}) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const categoryItem = useSelector((state)=> state?.WishReducer.categoryItem);
  const categorieslist = [
    {
      title:'All Categories'
    },
    {
      title:'Fruit'
    },
    {
      title:'Cereal'
    },
    {
      title:'Tuber'
    },
    {
      title:'Vegetable'
    },
    {
      title:'Livestock'
    },
  ]
return (
  <div className='toggle-categories category__menu '>
      <button onClick={()=>setToggle(!toggle)} className='d-flex align-items-center gap-3'>
        <i className="ri-layout-grid-line"></i>
        <span>{categoryItem}</span>
        <i className="ri-arrow-drop-down-line"></i>
      </button>
      <div className='toggleaccount-children-categories' style={{display:`${toggle?'block':'none'}`}}>
      <div className='categories-list'>
        {
          categorieslist?.map((item, index)=>{
            return <p key={index} onClick={(e)=>dispatch(setCategory(item.title))}>{item?.title}</p>
          })
        }
      </div>
      </div>
  </div>
)
}

export default ToggleCategories

