import { useState } from 'react'
import placeholder_art from '../assets/placeholder_art.jpg'
import placeholder_code from '../assets/placeholder_code.jpg'
import '../pages/Selection.css'
import { Link, useNavigate } from "react-router-dom";

function Selection() {

  return (
    <>
      {/* <div className='flex w-screen h-screen overflow-visible'> {/* or overflow-hidden */}
          {/* <img src={placeholder_code} alt='Code portfolio' className='block w-1/2 h-full min-w-0 object-cover'/>
          <h1 className='absolute text-center text-nowrap left-1/5 top-1/2 bottom-1/2 font-extrabold text-green-700'>Computer Science</h1>
          <img src={placeholder_art} alt='Art portfolio'  className='block w-1/2 h-full min-w-0 object-cover'/> */}
      {/* </div> */}

      <div class="images-container">
        <Link to='/MyPortfolio/code' class="image">
            <img src={placeholder_code} alt="" />

            <div class="description font-extrabold text-5xl ">
                <h2 className="">Computer Science</h2>
                {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, repellat.</p> */}
            </div>
        </Link>

        <Link to='/MyPortfolio/art' className='image'>
          <img src={placeholder_art} alt="" />
          <div class="description font-extrabold text-5xl">
              <h2>Art</h2>
              {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, repellat.</p> */}
          </div>
        </Link>
      </div>
    </>
  )
}

export default Selection