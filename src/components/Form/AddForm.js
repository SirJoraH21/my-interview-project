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

export default function AddForm(props) {
  const { addItem } = useContext(Context);
  const [imgUrl, setImageSrc] = React.useState("");
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const [size, setSize] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event) => {
    setImageSrc(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleDesc = (event) => {
    setDesc(event.target.value);
  };
  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
  const handleSize = (event) => {
    setSize(event.target.value);
  };

  const clearForm = () => {
    document.querySelector("form").reset();
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <img src={imgUrl} alt="preview" />
      <FormControl>
        <InputLabel htmlFor="component-simple" value={imgUrl}>
          Image Url
        </InputLabel>
        <Input id="component-simple" onChange={handleChange} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input id="component-simple" onBlur={handleName} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-simple">Description</InputLabel>
        <Input id="component-simple" onBlur={handleDesc} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-simple">Amount</InputLabel>
        <Input id="component-simple" onBlur={handleAmount} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-simple">Size</InputLabel>
        <Input id="component-simple" onBlur={handleSize} />
      </FormControl>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          if(imgUrl && name && desc && amount && size){
          addItem.call(null, [imgUrl, name, desc, amount, size]);
          clearForm();}
        }}
      >
        Add
      </Button>
      <Button variant="outlined" color="secondary" onClick={props.close}>
        Cancel
      </Button>
    </form>
  );
}
