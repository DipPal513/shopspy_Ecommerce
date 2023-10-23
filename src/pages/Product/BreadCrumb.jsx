import React from 'react'
import { Link, useLoaderData, useLocation } from 'react-router-dom'

const BreadCrumb = ({title}) => {
  const location= useLocation();
  const path = location.pathname.split("/");
  console.log(path)


  return (
    <div className='text-gray-700 mb-4'>
      {
        path.map((e,index) => {
          console.log(e)
        })
      }
      <h3><Link to={-1}>{path[1]} </Link>/{title}</h3>
    </div>
  )
}

export default BreadCrumb