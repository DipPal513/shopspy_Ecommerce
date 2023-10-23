import React from 'react'
import {Link} from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='max-w-screen-sm mx-auto text-center'>
      <img src="https://img.freepik.com/free-vector/hand-drawn-404-error_23-2147738999.jpg?size=626&ext=jpg&ga=GA1.1.1320449184.1698051876&semt=ais" class="img-fluid rounded-top" alt=""/>
      <button className="bg-red-500 py-5 px-10 text-white mt-5 hover:bg-red-600"><Link to={"/"}>Back to Home</Link></button>
    </div>
  )
}

export default NotFound