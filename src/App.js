
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {DISHES } from './shared/dishes';
import { Navbar, NavbarBrand } from 'reactstrap';
import React from 'react';
import Menu from './components/MenuComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
