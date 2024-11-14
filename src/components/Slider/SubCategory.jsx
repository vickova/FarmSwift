import React from 'react';
import Banana from '../../assets/images/banana.jpeg';
import Orange from '../../assets/images/orange.jpeg';
import Guava from '../../assets/images/guava.jpeg';
import './Subcategory.css'

const SubCategory = () => {
    const subcategory_items  = [
        {
            title:'Organics that does your body good',
            subtitle:'What a good way to diet',
            image:Banana
        },
        {
            title:'Sweet & Fresh',
            subtitle:'That what we serve',
            image:Guava
        },
    ]
  return (
    <div className='sub__category'>
        {
            subcategory_items.map((item, index)=>{
                return <div key={index} className='subcategory__card d-flex justify-content-end align-items-center'>
                    <div className='subcategory__text'>
                        <h2>{item.title}</h2>
                        <p>{item.subtitle}</p>
                    </div>
                    <div className='subcategory__image' style={{backgroundImage:`url(${item.image})`}}>
                    </div>
                </div>
            })
        }
    </div>
  )
}

export default SubCategory