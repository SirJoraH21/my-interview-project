import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import { Input, Button } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Comments from "../Comments/Comments";
import SuperModal from "../Modal/SuperModal";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function DetailsForm(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <img
        src={props.item.imageUrl}
        alt="preview"
        style={{ width: "200px", height: "200px" }}
      />
      <FormControl>
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input id="component-simple" value={props.item.name} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-simple">Description</InputLabel>
        <Input id="component-simple" value={props.item.description} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-simple">Amount</InputLabel>
        <Input id="component-simple" value={props.item.amount} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-simple">Size</InputLabel>
        <Input id="component-simple" value={props.item.size} />
      </FormControl>
      <Comments item={props.item} comments={props.item.comments} />
      <SuperModal item={props.item} modalType="edit" btn="edit" />
      <Button variant="outlined" color="secondary" onClick={props.close}>
        Cancel
      </Button>
    </form>
  );
}
