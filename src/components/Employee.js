import React, { useEffect } from "react";
import { fetchStaffs } from "../Redux/ActionCreator";
import { STAFFS } from "../shared/staffs";
import dateFormat from 'dateformat'
import {useParams, Link} from 'react-router-dom'
import { useSelector, connect } from 'react-redux'
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import './Employee.css'
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => ({
  staffsFromServer: state.staffList
})

const mapDispatchToProp = (dispatch) => ({
  fetchStaffs: () => {dispatch(fetchStaffs())},
  
})

export function Employee({staff}) { //truyền data fetch từ server truyền vào props   

  // useEffect(() => {
  //   // insert mapDispatchToProp
  //   fetchStaffs();    

  // },[]) // component Did mount
  // const id = useParams().staffId;
  
  // const idList = staffsFromServer.map((a) => a.id)
  // const index = idList.indexOf(parseInt(id))
  // const staff = staffsFromServer[index] // có thể dùng trực tiếp id, tuy nhiên do id và index trùng nhau nên mới được, nếu id # index phải phải dùng cách như trên

  // ngoài ra có thể truyền props từ main component là từng employee, thông qua việc click vào hình, tuy nhiên việc này bắt buộc phải có event click thì mới chạy được, còn nếu reload loại trang sẽ cho ra trang trắng vì không có load data từ event onClick.
  
  console.log("staff", staff)
  
    return (
      <div className="staff row container">
      <MDBBreadcrumb>
          <MDBBreadcrumbItem>
            <Link to='/'>Nhân Viên</Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>{staff.name}</MDBBreadcrumbItem>
        </MDBBreadcrumb>
        <div className="col-12 col-md-4 col-lg-3">
          <img src={staff.image} alt={staff.name} />
        </div>
        <div className="col-12 col-md-8 col-lg-9">
        <h3>Họ và tên: {staff.name}</h3>
          <p>          
            Ngày sinh: {dateFormat(staff.doB,"dd/mm/yyyy")}<br />
            Ngày vào công ty: {dateFormat(staff.startDate,"dd/mm/yyyy")}<br />
            Phòng ban: {staff.departmentId}<br />
            Số ngày nghỉ còn lại: {staff.annualLeave}<br />
            Số ngày đã làm thêm: {staff.overTime}<br />
          </p>
        </div>
      </div>
    );
  
}

export default connect(mapStateToProps, mapDispatchToProp)(Employee);
