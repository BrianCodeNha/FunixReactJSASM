import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";

import SearchBar from "./SearchBar";
//styles
import "./staff.css";

export default function Staff(props) {
  if (props.isLoading) {
    return <Loading />;
  } else if (props.errMess) {
    <h4>{props.errMess}</h4>;
    console.log(props.errMess)
  } else {
    return (
      <div className="row cod-flex p-2">
        <SearchBar
          getSortEntry={(entry) => props.getSortEntry(entry)}
          getEmployee={(employee) => props.getEmployee(employee)}
        />
        {props.staffs.map((staff) => (
          <div
            onClick={() => props.onClick(staff.id)}
            key={staff.id}
            className="outer col-12 col-md-4 col-lg-2 justify-content-center"
          >
            <Link exact to={`/employee/${staff.id}`}>
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
}
