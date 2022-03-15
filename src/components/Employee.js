import React from "react";
import dateFormat from 'dateformat'
import {useParams, Link} from 'react-router-dom'
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import './Employee.module.css'

export default function Employee(props) {
  const id = useParams().staffId;
  const idList = props.staffs.map((a) => a.id)
  const index = idList.indexOf(parseInt(id))
  const staff = props.staffs[index] // có thể dùng trực tiếp id, tuy nhiên do id và index trùng nhau nên mới được, nếu id # index phải phải dùng cách như trên

  // ngoài ra có thể truyền props từ main component là từng employee, thông qua việc click vào hình, tuy nhiên việc này bắt buộc phải có event click thì mới chạy được, còn nếu reload loại trang sẽ cho ra trang trắng vì không có load data từ event onClick.
  

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
          Phòng ban: {staff.department.name}<br />
          Số ngày nghỉ còn lại: {staff.annualLeave}<br />
          Số ngày đã làm thêm: {staff.overTime}<br />
        </p>
      </div>
    </div>
  );
}
