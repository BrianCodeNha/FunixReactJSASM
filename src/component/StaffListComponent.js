import React, { useState } from "react";
import { ROLE, STAFFS } from "../shared/staffs";
import { Card, CardImg } from 'reactstrap';
import dateFormat from "dateformat";
import "./StaffListComponent.css";



export default function StaffListComponent() {
  const idList = STAFFS.map((s) => s.id);
  const [sIndex, setSIndex] = useState(0);
  const [onShow, setOnShow] = useState(true);  
  const [grid, setGrid] = useState(null); 

  const [imgSrc, setImgSrc] = useState('')
  
  const OnShowInfo = (staff) => {
    setSIndex(idList.indexOf(staff.id));
    setOnShow(false);
    setImgSrc(staff.image)
   
  };
 
  const changeCol = (value) => {   
   
    if (value  === "1") {return setGrid('list col-12 col-md-12 col-lg-12')   }
    else if (value  === "2") {return setGrid('list col-5 col-md-5 col-lg-5') }
    else if (value  === "3") {return setGrid('list col-3 col-md-3 col-lg-3') }
    else if (value  === "5") {return setGrid('list col-2 col-md-2 col-lg-2') }
    else if (value  === "5") {return setGrid('list col-1 col-md-1 col-lg-1') }    
    console.log(value, grid)   
   
  }

 

  return (
    <div>
      <div className="container">
        <div className="row">
          {STAFFS.map((staff) => {
            return (
              <div
                onClick={() => OnShowInfo(staff)}
                className={grid ? grid : 'list col-12 col-md-5 col-lg-3'}
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
          Bấm vào tên nhân viên để hiển thị thông tin. Số cột hiển thị <select id="select" onChange={() => changeCol(document.getElementById('select').value)}>
          <option value="None"></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="5">5</option>        
          
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
          <p>Số ngày đã làm thêm: {STAFFS[sIndex].overTime }</p>
          </div> 
          <div className="half col-5 col-md-5 col-lg-5">        
          { <Card>
            
            <CardImg top src={imgSrc} alt={STAFFS[sIndex].name} />
            
            </Card>}
          </div>
        </div>
      </div>
    </div>
  );
}
