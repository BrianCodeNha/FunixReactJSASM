import React from "react";

export default function DishComment(props) {
  const DishDetail = () => {    
    if (props.dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <h4 style={{ textAlign: "left" }}>Comments</h4>
          {props.dish.comments.map((comment, index) => {
            return (
              <div key={index}>
                <p style={{ textAlign: "left" }}>{comment.comment}</p>
                <p style={{ textAlign: "left" }}>-- {comment.author}</p>
              </div>
            );
          })}
        </div>
      );
    } else {return <div></div>;}
      
    
  };


  return <DishDetail />;
}
