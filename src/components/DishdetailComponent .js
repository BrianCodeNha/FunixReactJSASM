import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export default function DishdetailComponent(props) {
  const DishDetail = () => {
    if (props.dish != null)
      return (
        
          <div className="col-12 col-md-5 m-1">
            <Card >
              <CardImg top src={props.dish.image} alt={props.dish.name} />
              <CardBody>
                <CardTitle style={{ textAlign: "left", fontWeight: "bold" }}>
                  {props.dish.name}
                </CardTitle>
                <CardText style={{ textAlign: "left" }}>
                  {props.dish.description}
                </CardText>
              </CardBody>
            </Card>
        
          </div>
        
      );
    else return <div></div>;
  };
 

  return <DishDetail />;
}
