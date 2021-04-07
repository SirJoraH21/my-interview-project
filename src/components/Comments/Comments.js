import React, { useContext } from "react";
import FormControl from "@material-ui/core/FormControl";
import { Input, Button } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Context from "../../context";
const Comments = (props) => {
  const { addComment } = useContext(Context);
  let [commentText, setCommentText] = React.useState("");

  const handleCommentText = (event) => {
    setCommentText((commentText = event.target.value));
  };
  const createComment = () => {
    addComment({
      id: props.item.comments.length + 1,
      productId: props.item.id,
      description: commentText,
      date: new Date().toLocaleString(),
    });
  };
  const styles = {
    span: {
      width: "60px",
      position: "absolute",
      right: "-30px",
      bottom: "-15px",
      fontSize: "10px",
      color: "grey",
    },
    p: { wordWrap: "break-word", position: "relative" },
    btn: {
      float: "right",
      margin: "13px 0 0 8px",
    },
    inputContainer: {
      width: "70%",
    },
  };

  return (
    <div>
      <FormControl style={styles.inputContainer}>
        <InputLabel htmlFor="component-simple">Comment</InputLabel>
        <Input
          id="component-simple"
          placeholder="Write your comments here"
          onBlur={handleCommentText}
        />
      </FormControl>
      <Button
        variant="outlined"
        color="primary"
        onClick={createComment}
        style={styles.btn}
      >
        Comit
      </Button>
      {props.item.comments &&
        props.item.comments.map((comment) => (
          <p key={comment.id} className="comment-text" style={styles.p}>
            {comment.description}
            <span style={styles.span} className="date">
              {comment.date}
            </span>
          </p>
        ))}
    </div>
  );
};

export default Comments;
