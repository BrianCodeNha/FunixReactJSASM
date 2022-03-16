import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Employee from "./Employee";
import SearchPage from "./SearchPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Staff from "./Staff";
import Department from "./Department";
import Salary from "./Salary";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";

export default function MainComponent() {
  const [staffId, setStaffId] = useState(null);

  const selectedEmployee = (selectedID) => {
    setStaffId(selectedID);
  };

  const [option, setOption] = useState('')
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Staff
              staffs={STAFFS}
              onClick={(selectedID) => selectedEmployee(selectedID)}
              onChange = {(selectedOption) => setOption(selectedOption)}
            />
          </Route>
          <Route path="/department">
            <Department department={DEPARTMENTS} />
          </Route>
          <Route path="/salary">
            <Salary staffs={STAFFS} />
          </Route>
          <Route path="/employee/:staffId">
            <Employee staffs={STAFFS} />
          </Route>
          <Route  path="/search">
          <SearchPage option ={option}/>
          </Route>
         
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
