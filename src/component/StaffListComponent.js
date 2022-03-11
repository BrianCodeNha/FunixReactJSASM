import React, { useState } from "react";
import { ROLE, STAFFS } from "../shared/staffs";
import dateFormat from "dateformat";
import "./StaffListComponent.css";
import logo from '../shared/logo192.png'

export default function StaffListComponent() {
  const idList = STAFFS.map((s) => s.id);
  const [sIndex, setSIndex] = useState(0);
  const [onShow, setOnShow] = useState(true);
  console.log(sIndex, onShow, idList);

  const OnShowInfo = (staff) => {
    setSIndex(idList.indexOf(staff.id));
    setOnShow(false);
    console.log(sIndex);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {STAFFS.map((staff) => {
            return (
              <div
                onClick={() => OnShowInfo(staff)}
                className="list col-12 col-md-5 col-lg-3"
                key={staff.id}
              >
                {staff.name}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <br></br>
        <h4 className="a" style={{ textAlign: "left" }}>
          Bấm vào tên nhân viên để hiển thị thông tin
        </h4>
        <div hidden={onShow} className="info" >
          <div className="half col-5 col-md-5 col-lg-5" style={{textAlign: "left"}}>
          <h2>Họ và tên: {STAFFS[sIndex].name}</h2>
          <p>Năm sinh: {dateFormat(STAFFS[sIndex].doB, "dd/mm/yyyy")}</p>
          <p>
            Ngày vào công ty:{" "}
            {dateFormat(STAFFS[sIndex].startDate, "dd/mm/yyyy")}
          </p>
          <p>Phòng ban: {STAFFS[sIndex].department.name}</p>
          <p>Chức danh: {STAFFS[sIndex].salaryScale > 1 ? ROLE.NORMAL_STAFF : ROLE.MANAGER_STAFF}</p>
          <p>Số ngày nghỉ còn lại: {STAFFS[sIndex].annualLeave}</p>
          <p>Số ngày đã làm thêm: {STAFFS[sIndex].overTime}</p>
          </div>
          <div className="half col-5 col-md-5 col-lg-5">        
          {<img src={require( "../shared/logo192.png")} alt=" not found"/>}
          </div>
        </div>
      </div>
    </div>
  );
}
