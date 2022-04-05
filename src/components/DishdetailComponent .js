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
import CommentForm from "./CommentForm";
import { Loading} from './LoadingComponent'
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform, Fade, Stagger } from 'react-animation-components';


function RenderDish(props) {
  return (
    <div>
    <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
      <Card>
import { baseUrl } from "../shared/baseUrl";
        <CardImg top src={baseUrl + props.dish.image} alt={props.dish.name} />
        <CardBody>
          <CardTitle style={{ textAlign: "left", fontWeight: "bold" }}>
            {props.dish.name}
          </CardTitle>
          <CardText style={{ textAlign: "left" }}>
            {props.dish.description}
          </CardText>
        </CardBody>
      </Card>
      </FadeTransform>
    </div>
  );
}

function RenderCommnent(props) {
  return (
    <div>
      <h4>Comments</h4>
      <Stagger in>
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
      </Stagger>
      <CommentForm 
      dishID={props.dishId}
      postComment={props.postComment}/>
    </div>
  );
}



export default function DishdetailComponent(props) {
  const DishDetail = () => {
    if (props.isLoading){
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      )
    } else if ( props.errMess){
      return (
        <div className="container">
        <div className="row">
        <h4>{props.errMess}</h4>
        </div>
        </div>
      )
    }else if (props.dish != null)
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
              <RenderCommnent 
              comments={props.comments}
              postComment={props.postComment}
              dishId={props.dish.id}
              />
            </div>
          </div>
        </div>
      );
    else return <div></div>;
  };

  return <DishDetail />;
}
