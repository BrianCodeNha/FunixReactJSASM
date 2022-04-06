import React, { useState } from "react";
import dateFormat from 'dateformat'
import {Link} from 'react-router-dom'
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import {Loading} from './Loading'
import './Employee.css'
import { updateEmployee } from "../Redux/ActionCreator";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  updateEmployee: (editId, Editedemployee) => dispatch(updateEmployee(editId, Editedemployee))
})

export function Employee(props) { //truyền data fetch từ server truyền vào props     

  const EmployeeDetail = () => {
    if (props.isLoading){
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      )
    } else if ( props.errorMess){
      return (
        <div className="container">
        <div className="row">
        <h4>{props.errorMess}</h4>
        </div>
        </div>
      )
    }else if (props.staff != null){     

      let updateEmployee = {
        id: props.staff.id,
        name: props.staff.name,
        doB: props.staff.doB,
        departmentId: props.staff.departmentId,
        startDate: props.staff.startDate,
        annualLeave: props.staff.annualLeave,
        overTime: props.staff.overTime,
        image: "/assets/images/alberto.png"
      }


      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(updateEmployee)
       props.updateEmployee(updateEmployee.id, updateEmployee);
      }
      
      const handleChange = (e) => {
        const {name, value} = e.target;
       return updateEmployee = {...updateEmployee,[name]: value}       
      }
 
      return (
        <div className="staff row container">
        <MDBBreadcrumb>
            <MDBBreadcrumbItem>
              <Link to='/'>Nhân Viên</Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>{props.staff.name}</MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <div className="col-12 col-md-4 col-lg-3">
            <img src={props.staff.image} alt={props.staff.name} />
          </div>
          <div className="col-12 col-md-8 col-lg-9">
          <h3>Họ và tên: {props.staff.name}</h3>
            <p>          
              Ngày sinh: {dateFormat(props.staff.doB,"dd/mm/yyyy")}<br />
              Ngày vào công ty: {dateFormat(props.staff.startDate,"dd/mm/yyyy")}<br />
              Phòng ban: {props.staff.departmentId}<br />
              Số ngày nghỉ còn lại: {props.staff.annualLeave}<br />
              Số ngày đã làm thêm: {props.staff.overTime}<br />
            </p>
            <hr/>
           <h3>Cập nhật thông tin nhân viên</h3>
           <form onSubmit={handleSubmit}>
           <label htmlFor="name" className="row container">Họ và tên: 
           <input type='text' name='name' placeholder={props.staff.name} onChange={(e) => handleChange(e)} />
           </label>
           <label htmlFor="doB" className="row container">Ngày sinh: 
           <input type='date' name='doB' placeholder={props.staff.doB} onChange={(e) => handleChange(e)} />
           </label>
           <label htmlFor="startDate" className="row container">Ngày vào công ty: 
           <input type='date' name='startDate' placeholder={props.staff.startDate} onChange={(e) => handleChange(e)} />
           </label>
           <label htmlFor="department" className="row container">Phòng ban: 
           <input type='date' name='department' placeholder={props.staff.department} onChange={(e) => handleChange(e)} />
           </label>
           <label htmlFor="annualLeave" className="row container">Số ngày nghỉ còn lại: 
           <input type='number' name='annualLeave' placeholder={props.staff.annualLeave} onChange={(e) => handleChange(e)} />
           </label>
           <label htmlFor="overTime" className="row container">Số giờ làm thêm: 
           <input type='number' name='overTime' placeholder={props.staff.overTime} onChange={(e) => handleChange(e)} />
           </label>
           <button type="submit">update</button>
           </form>
          </div>
        </div>
      );}
      else return <div></div>;
  
    }
    return <EmployeeDetail />;
  }


export default connect(null,mapDispatchToProps)(Employee);
