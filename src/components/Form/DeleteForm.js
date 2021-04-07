import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import { Input, Button } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Context from "../../context";

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

export default function DeleteForm(props) {
  const { removeItem } = useContext(Context);
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <img src={props.item.imageUrl} alt="preview" />
      <FormControl>
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input id="component-simple" value={props.item.name} />
      </FormControl>

      <Button
        variant="outlined"
        color="secondary"
        onClick={removeItem.bind(null, props.item.id)}
      >
        Delete
      </Button>
      <Button variant="outlined" color="primary" onClick={props.close}>
        Cancel
      </Button>
    </form>
  );
}
