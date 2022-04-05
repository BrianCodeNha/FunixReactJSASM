import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SearchBar.css";
import AddEmployee from "./Modal";
import { connect } from "react-redux";
import { postStaff} from '../Redux/ActionCreator'

const mapDispatchToProp = (dispatch) => ({
    postStaff: (
      id,
      EmployeeName,
      doB,
      startDate,
      departmentId,
      salaryScale,
      annualLeave,
      overTime,
      image) => {
      dispatch(postStaff(
        id,
        EmployeeName,
        doB,
        startDate,
        departmentId,
        salaryScale,
        annualLeave,
        overTime,
        image));
    },
})

const mapStateToProps = (state) => ({
    staffList: state.staffList
})


export function SearchBar(props) {
  const [term, setTerm] = useState("");
  const [option, setOption] = useState("tên");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search?term=${term}&option=${option}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Tìm kiếm nhân viên</label>
        <div className="select">
          <select onChange={(e) => setOption(e.target.value)}>
            <option value="tên">Tên</option>
            <option value="id">Id</option>
            <option value="doB">Ngày sinh</option>
          </select>
        </div>
        <input
          onChange={(e) => setTerm(e.target.value.toLowerCase())}
          type="text"
          id="search"
        />
        <div className="sort">
          <label>Sort by </label>
          <select onChange={(e) => props.getSortEntry(e.target.value)}>
            <option value="name">Tên asc</option>
            <option value="id">Id desc</option>
            <option value="doB">Ngày sinh asc</option>
          </select>
        </div>
      </form>
      <div className="col-3">
        <AddEmployee 
        postStaff = {props.postStaff}
        staffList = {props.staffList}
        getEmployee={(employee) => props.getEmployee(employee)} />
      </div>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProp)(SearchBar);
