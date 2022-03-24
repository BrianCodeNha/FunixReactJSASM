import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { STAFFS } from "../shared/staffs";
import Staff from "./Staff";

export default function SearchPage() {
  //url = /search?q=van
  const queryString = useLocation().search; //object contain property search: ?q=van
  const queryParams = new URLSearchParams(queryString); // chuyển thành object urlsearchparams
  const term = queryParams.get("term"); //get value đầu tiên từ property 'term'/nếu getAll thì sẽ thành 1 array => van
  const option = queryParams.get("option"); // get option value from searchbar
  console.log(term, option);

  const [staffId, setStaffId] = useState(null);

  const selectedEmployee = (selectedID) => {
    setStaffId(selectedID);
  };

  return (
    <Staff
      staffs={STAFFS.filter(
        (staff) =>
          (option === "tên"
            ? staff.name + ""
            : option === "id"
            ? staff.id + ""
            : staff.doB
          ).toLowerCase().indexOf(term) !== -1
      )}
      onClick={(selectedID) => selectedEmployee(selectedID)}
    />
  );
}