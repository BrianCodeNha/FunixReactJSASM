import React from "react";
import { Link } from "react-router-dom";
//styles
import "./staff.module.css";

export default function Staff(props) {
  return (
    <div className="row cod-flex p-2">
      {props.staffs.map((staff) => (
        <div
          onClick={() => props.onClick(staff.id)}
          key={staff.id}
          className="outer col-12 col-md-4 col-lg-2 justify-content-center"
        >
          <Link to={`/${staff.id}`}>
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
