import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Employee from "./Employee";
import SearchPage from "./SearchPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Staff from "./Staff";
import Department from "./Department";
import Salary from "./Salary";
import { connect, useSelector } from "react-redux";
import {
  fetchDepartments,
  fetchStaffs,
  fetchSalary,
} from "../Redux/ActionCreator";


// get state, and dispatch from store

const mapStateToProps = (state) => ({
  staffFromServer: state.staffList,
  isLoading: state.isLoading,
  errMess: state.errMess,
  departmentFromServer: state.departments,
  staffSalaryFromServer: state.staffSalary,
});

const mapDispatchToProp = (dispatch) => ({
  fetchStaffs: () => {
    dispatch(fetchStaffs());
  },
  fetchDepartments: () => {
    dispatch(fetchDepartments());
  },
  fetchSalary: () => {
    dispatch(fetchSalary());
  },
});

export function MainComponent({
  staffFromServer,
  isLoading,
  errMess,  
  departmentFromServer,   
  staffSalaryFromServer,
  fetchStaffs,
  fetchSalary,
  fetchDepartments, 
}) {
  //store stafflist here
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    // insert mapDispatchToProp
    fetchStaffs();
    fetchDepartments();
    fetchSalary();
  }, []); // component Did mount

  console.log("afterfetch", staffFromServer);

  const getEmployee = (newEmployee) => {
    setStaffList(staffFromServer.concat(newEmployee));
  };

  //staffId for idividiual view

  const [staffId, setStaffId] = useState(null);

  const selectedEmployee = (selectedID) => {
    setStaffId(selectedID);
  };

  // this is for sort entry

  const [property, setProperty] = useState("name"); //store sortEntry here

  const sortDataEntry = (entry) => {
    setProperty(entry);
    staffFromServer.sort(function (a, b) {
      if (entry === "id") {
        return b.id - a.id;
      } else if (entry === "name") {
        console.log(a.name.toLowerCase());
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      }
      if (entry === "doB") {
        if (a.doB.toLowerCase() > b.doB.toLowerCase()) return 1;
        if (a.doB.toLowerCase() < b.doB.toLowerCase()) return -1;
      }
    });
  };

  const staffWithId = ({ match }) => (
    <Employee
      staff={staffFromServer.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]}
      isLoading={isLoading}
      errMess={errMess}
    />
  );

  const departmentWithId = ({ match }) => (
    <Staff
      staffs={staffFromServer.filter(
        (staff) => staff.departmentId === match.params.departId
      )}
      onClick={(selectedID) => selectedEmployee(selectedID)}
      getSortEntry={(entry) => sortDataEntry(entry)}
      getEmployee={(employee) => getEmployee(employee)}
      isLoading={isLoading}
      errMess={errMess}
    />
  );
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Staff
              staffs={staffFromServer}
              onClick={(selectedID) => selectedEmployee(selectedID)}
              getSortEntry={(entry) => sortDataEntry(entry)}
              getEmployee={(employee) => getEmployee(employee)}
              isLoading={isLoading}
              errorMess={errMess}
            />
          </Route>
          <Route exact path="/department">
            <Department department={departmentFromServer} />
          </Route>
          <Route path="/department/:departId">{departmentWithId}</Route>
          <Route path="/salary">
            <Salary staffs={staffSalaryFromServer} />
          </Route>
          <Route path="/employee/:staffId">{staffWithId}</Route>
          <Route path="/search">
            <SearchPage staffs={staffSalaryFromServer} />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProp)(MainComponent);
