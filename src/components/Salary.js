import React from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import {Link} from 'react-router-dom'

export default function Salary(props) {
  
  return (
    <div className='content row fluid-container'>
    <MDBBreadcrumb style = {{padding: '20px'}}>
        <MDBBreadcrumbItem>
          <Link to='/'>Nhân Viên</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Bảng Lương</MDBBreadcrumbItem>
      </MDBBreadcrumb>
    {props.staffs.map((staff) => {
      const luong = Math.floor(staff.salaryScale*3000000 + staff.overTime*200000/8)
      return (
       <div className='col-12 col-md-6 col-lg-4'>        
          <div className='card'>
            <h3 className='card-title'>
              {staff.name}
            </h3>
            <div className='card-text'>
              Mã nhân viên: {staff.id} <br />
              Hệ số lương: {staff.salaryScale} <br />
              Số giờ làm thêm: {staff.overTime} <br />
            </div>
            <div className='card-header' style={{backgroundColor: "#f5f5f5"}}>
              Lương: {luong.toLocaleString(undefined, {maximumFractionDigits:2})} vnd
            </div>
          </div>        
       </div>
    )})}
    </div>
  )
}
