import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Employee from './Employee'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Staff from "./Staff";
import Department from "./Department";
import Salary from "./Salary";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";

export default function MainComponent() {
  const [staffId, setStaffId] = useState(null)

  const selectedEmployee = (selectedID) => {
    setStaffId(selectedID)    
  }
  
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Staff 
            staffs = {STAFFS} 
            onClick = {(selectedID) => selectedEmployee(selectedID) }/>
          </Route>
          <Route path="/department">
            <Department department = {DEPARTMENTS}/>
          </Route>
          <Route path="/salary">
            <Salary staffs = {STAFFS}/>
          </Route>
          <Route path="/:staffId">
            <Employee staffs = {STAFFS} />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
