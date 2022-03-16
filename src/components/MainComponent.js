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

  const [property, setProperty] = useState('name') //store sortEntry here

  const sortDataEntry = (entry) => {
    setProperty(entry)
    STAFFS.sort(function (a, b) {      
      if( entry == 'id') {return b.id - a.id} 
      else if( entry == 'name') {
        console.log(a.name.toLowerCase())
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
        else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
        
      }
      if( entry == 'doB') {
        if (a.doB.toLowerCase() > b.doB.toLowerCase()) return 1
        if (a.doB.toLowerCase() < b.doB.toLowerCase()) return -1
        
      }      
    })
  }
  console.log(property, STAFFS)
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Staff
              staffs={STAFFS}
              onClick={(selectedID) => selectedEmployee(selectedID)}
              getSortEntry = {(entry) => sortDataEntry(entry)}              
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
          <SearchPage />
          </Route>
         
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
