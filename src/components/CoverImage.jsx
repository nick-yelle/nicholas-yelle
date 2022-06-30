import React from 'react'


function CoverImage({img}) {
  return (
    <div 
      className='cover-image'
      style={{position: 'relative',paddingTop:'50px'}}
    >
      <img style={{width:'100%',}} src={img} />
    </div>
  )
}

export default CoverImage