import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Staff from "./Staff";
import Department from "./Department";
import Salary from "./Salary";

export default function MainComponent() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Staff />
          </Route>
          <Route path="/department">
            <Department />
          </Route>
          <Route path="/salary">
            <Salary />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
