import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

function RenderDish(props) {
  return (
    <div>
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
  );
}

function RenderCommnent(props) {
  return (
    <div>
      <h4>Comments</h4>
      {props.comments.map((comment, index) => {
        return (
          <div key={index}>
            <p >{comment.comment}</p>
            <p >
              -- {comment.author}, {dateFormat(comment.date, "dd-mmm, yyyy")}
            </p>
          </div>
        );
      })}
    </div>
  );
}
export default function DishdetailComponent(props) {
  const DishDetail = () => {
    if (props.dish != null)
      return (
        <div className="showinfo" style={{margin: "50px"}}>
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                {props.dish.name}
              </BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="container">
              <RenderDish dish={props.dish} />
            </div>
            <div className="container">
              <RenderCommnent comments={props.comments} />
            </div>
          </div>
        </div>
      );
    else return <div></div>;
  };

  return <DishDetail />;
}
