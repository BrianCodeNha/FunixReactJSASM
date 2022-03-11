import React, { useState } from "react";
import { ROLE, STAFFS } from "../shared/staffs";
import dateFormat from "dateformat";
import "./StaffListComponent.css";
import logo from '../shared/logo192.png'

export default function StaffListComponent() {
  const idList = STAFFS.map((s) => s.id);
  const [sIndex, setSIndex] = useState(0);
  const [onShow, setOnShow] = useState(true);
  const  [option, setOption] = useState(null);
  let grid = 'list col-12 col-md-5 col-lg-3';
  

  const OnShowInfo = (staff) => {
    setSIndex(idList.indexOf(staff.id));
    setOnShow(false);
   
  };
 
  const changeCol = () => {
    
    setOption(document.getElementById('select').value);   
    
    if (option  == 1) {grid = 'list col-12 col-md-12 col-lg-12'   }
    else if (option  == 2) { grid ='list col-6 col-md-6 col-lg-6' }
    else if (option  == 3) {grid ='list col-4 col-md-4 col-lg-4' }
    else if (option  == 4) {grid ='list col-3 col-md-3 col-lg-3' }
    else if (option  == 5) {grid ='list col-2 col-md-2 col-lg-2' }
    else if (option  == 6) {grid ='list col-1 col-md-1 col-lg-1' }
    console.log(option, grid)
    
    
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          {STAFFS.map((staff) => {
            return (
              <div
                onClick={() => OnShowInfo(staff)}
                className={grid}
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
          Bấm vào tên nhân viên để hiển thị thông tin. Số cột hiển thị <select id="select" onChange={changeCol}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          </select>
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
          {<img src={require( "../shared/profile_64.png")} alt=" not found"/>}
          </div>
        </div>
      </div>
    </div>
  );
}
