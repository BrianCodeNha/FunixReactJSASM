import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";

export default function DishdetailComponent(props) {
  const DishDetail = () => {
    if (props.dish != null)
      return (
        <div className="row"> 
        <div className="col-12 col-md-5 m-1">
          <Card>
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
        <div className="col-12 col-md-5 m-1">
          <h4 style={{ textAlign: "left" }}>Comments</h4>
          {props.dish.comments.map((comment, index) => {
            return (
              <div key={index}>
                <p style={{ textAlign: "left" }}>{comment.comment}</p>
                <p style={{ textAlign: "left" }}>-- {comment.author}, {dateFormat(comment.date,"dd-mmm, yyyy")}</p>
              </div>
            );
          })}
        </div>
        </div>
      );
    else return <div></div>;
  };                 

  return <DishDetail />;
}
