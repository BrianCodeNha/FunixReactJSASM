import CommentForm from "./CommentForm";
import dateFormat from "dateformat";

export default function RenderCommnent(props) {
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
        <CommentForm 
        dishID={props.dishId}
        postComment={props.postComment}/>
      </div>
    );
  }