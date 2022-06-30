import React, { useEffect } from 'react'
import CoverImage from '../CoverImage'
import LibraryPic from '../../images/LibraryB&W.jpg'

function Library() {
  
  // Positioning the toggle on scroll
  window.onscroll = () => {
    // Toggle Element
    let libraryToggle = document.getElementById('library-toggle');
    // Image element
    let img = document.getElementsByClassName('cover-image').item(0);
    // Image distance from top of screen
    let imgPxFromTop = img.getBoundingClientRect().top;

    if(imgPxFromTop < -img.clientHeight+55){
      libraryToggle.classList.add('sticky');
    } else {
      libraryToggle.classList.remove('sticky');
    }
  }
  
  return (
    <>
      <CoverImage img={LibraryPic} />
      <div style={{height:'1000px', position:'relative'}}>
        <div id='library-toggle' style={{textAlign:'center', padding:'20px', width:'100%', fontSize:'20px'}}>
          <span>Book Log </span> | <span> Book Reviews</span></div>
      </div>
      
    </>
  )
}

export default Library