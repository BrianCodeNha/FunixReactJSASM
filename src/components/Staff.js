import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from 'react'

import SearchBar from "./SearchBar";
//styles
import "./staff.css";

export default function Staff(props) {
  return (
    <div className="row col-flex p-2">
      <SearchBar 
      getSortEntry={(entry) => props.getSortEntry(entry)} 
      getEmployee = {(employee) => props.getEmployee(employee)}
      />
      {props.staffs.map((staff) => (
        <div
          onClick={() => props.onClick(staff.id)}
          key={staff.id}
          className="outer col-12 col-md-4 col-lg-2 justify-content-center"
        >
          <Link to={`employee/${staff.id}`}>
            <div className="item">
              <img src={staff.image} alt={staff.name} />
              {staff.name}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
