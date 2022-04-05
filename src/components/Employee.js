import React, { useEffect } from "react";
import { fetchStaffs } from "../Redux/ActionCreator";
import { STAFFS } from "../shared/staffs";
import dateFormat from 'dateformat'
import {useParams, Link} from 'react-router-dom'
import { useSelector, connect } from 'react-redux'
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import {Loading} from './Loading'
import './Employee.css'
import { baseUrl } from "../shared/baseUrl";


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
    }else if (props.staff != null)
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
          </div>
        </div>
      );
      else return <div></div>;
  
    }
    return <EmployeeDetail />;
  }


export default Employee;
