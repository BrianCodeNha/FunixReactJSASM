import React  from "react";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";

import SearchBar from "./SearchBar";
//styles
import "./staff.css";
import { useState } from "react";
// transition animation
import { FadeTransform} from 'react-animation-components';



export default function Staff(props) {

  const staffDetail = props.staffs.map((staff) => (
    
    <div
      onClick={() => props.onClick(staff.id)}
      key={staff.id}
      className="outer col-12 col-md-4 col-lg-2 justify-content-center"
    >
    <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
      <Link exact to={`/employee/${staff.id}`}>
        <div className="item">
        <div className="row">
        <img src={staff.image} alt={staff.name} />
          {staff.name}
        </div>
        <div className="row">
        <button className="col info">Delete</button>
        <button className="col info">Edit</button>
        </div>
          
          
        </div>
      </Link>
      </FadeTransform>
    </div>
    
  ))

  if (props.isLoading) {
    return <Loading />;
  } else if (props.errMess) {
    return  <h4>{props.errMess}</h4>;
    
  } else {
    return (
      <div className="row cod-flex p-2">
      
          <SearchBar
          getSortEntry={(entry) => props.getSortEntry(entry)}
          getEmployee={(employee) => props.getEmployee(employee)}
        />        
        {staffDetail}
     
      </div>
    );
  }
}
