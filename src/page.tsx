import React, { useState } from 'react'

const Page = () => {

   const [a,b] = useState(12)
  return (
    <div>
      <h1>{a}</h1>
      <button onClick={()=>b(a+1)}>Click Me</button>
    </div>
  )
}

export default Page
