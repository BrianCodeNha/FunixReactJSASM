import React from 'react'
import './Department.module.css'
export default function Department(props) {
  return (
    <div className='row fluid-container'>
      {props.department.map((depart) => (
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <h4 className='card-header'>{depart.name}</h4>
            <div className='card-text'>Số lượng nhân viên: {depart.numberOfStaff}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
