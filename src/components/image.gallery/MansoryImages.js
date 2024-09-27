import React from 'react';
import Mansory,{ResponsiveMasonry} from 'react-responsive-masonry';


const MansoryImagesGallery = ({galleryImages}) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:2,520:3,768:3, 992:3}}>
        <Mansory gutter='1rem'>
            {
                galleryImages.map((item, index)=>(
                    <img className='mansonry__img' src={item} alt='' key={index} style={{width:'100%', display:'block'}}/>
                ))
            }
        </Mansory>
    </ResponsiveMasonry>
  )
}

export default MansoryImagesGallery