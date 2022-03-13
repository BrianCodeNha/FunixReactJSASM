import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,  CardTitle } from 'reactstrap';
import DishComment from './DishComment';
import DishdetailComponent from './DishdetailComponent ';

class Menu extends Component {

  constructor(props) {
      super(props);

      this.state = {
          selectedDish: null
      }
  }

  onDishSelect(dish) {
      this.setState({ selectedDish: dish});
     
  }
 

  render() {
      const menu = this.props.dishes.map((dish,index) => {
          return (
            <div  className="col-12 col-md-5 m-1">
              <Card key={index}
                onClick={() => this.onDishSelect(dish)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
              </Card>
            </div> 
          );
      });

      return (
          <div className="container">
              <div className="row">
                  {menu}
              </div>
              <div className="row">                
                  <DishdetailComponent dish = {this.state.selectedDish}/>                 
                  <DishComment dish = {this.state.selectedDish}/>   
              </div>
          </div>
      );
  }
}


export default Menu;