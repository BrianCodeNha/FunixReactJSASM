import React  from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default function Header() {
  return (
    <>
      <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <jumbotron>
        <div className="row row-header">
            <div className="col-12 col-sm-6">
                <h1>Ristorante Con Fusion</h1>
                <p>We take responsibility sadf sdaf sdfd dfok jsoin dfla dsfio sdfj adflj ad asdf dsf afa dfaf a</p>
            </div>
        </div>
      </jumbotron>
    </>
  );
}
