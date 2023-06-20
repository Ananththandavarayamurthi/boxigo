import React, { useState } from 'react'

function Child() {

    const [data,setData]=useState("helloworld")
  return (
    <div>Child</div>
  )
}

export default Child