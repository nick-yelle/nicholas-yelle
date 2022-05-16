import React from 'react'
import ChurchCover from '../images/church-cover.jpg'

function CoverImage() {
  return (
    <div className='cover-image'>
        <img src={ChurchCover} alt="New England Cover" />
    </div>
  )
}

export default CoverImage