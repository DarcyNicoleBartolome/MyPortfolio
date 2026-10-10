import { useState } from 'react'
import './CompSciSection.css'

function CompSciSection() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <button className='bg-blue-600'>hello there</button>
         "CompSciSection"
      </div>
    </>
  )
}

export default CompSciSection