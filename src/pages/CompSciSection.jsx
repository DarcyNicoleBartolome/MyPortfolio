import { useState } from 'react'
import './CompSciSection.css'
import CompsciWork from '../Component/CompsciWork'

function CompSciSection() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
         <button className='bg-blue-600'>hello there</button>
         "CompSciSection"
      </div> */}

      <CompsciWork />
    </>
  )
}

export default CompSciSection