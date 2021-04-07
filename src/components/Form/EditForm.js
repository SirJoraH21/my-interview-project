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

export default function EditForm(props) {
  const classes = useStyles();
  const { editItem } = useContext(Context);
  const [imgUrl, setImageSrc] = React.useState(props.item.imageUrl);
  const [name, setName] = React.useState(props.item.name);
  const [desc, setDesc] = React.useState(props.item.description);
  const [amount, setAmount] = React.useState(props.item.amount);
  const [size, setSize] = React.useState(props.item.size);

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

  const confirmEdit = () => {
    editItem({
      id: props.item.id,
      imageUrl: imgUrl,
      name: name,
      description: desc,
      amount: amount,
      size: size
    });
    props.close()
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <img
        src={props.item.imageUrl}
        alt="preview"
        style={{ width: "200px", height: "200px" }}
      />
      {true ? (
        <FormControl>
          <InputLabel htmlFor="component-simple">Image Url</InputLabel>
          <Input id="component-simple" value={imgUrl} onChange={handleChange} />
        </FormControl>
      ) : null}
      <FormControl>
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input id="component-simple" value={name} onChange={handleName} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-simple">Description</InputLabel>
        <Input id="component-simple" value={desc} onChange={handleDesc} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-simple">Amount</InputLabel>
        <Input id="component-simple" value={amount} onChange={handleAmount} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-simple">Size</InputLabel>
        <Input
          id="component-simple"
          value={size}
          onChange={handleSize}
        />
      </FormControl>
      {/* <Comments item={props.item} comments={props.item.comments} /> */}
      <Button variant="contained" color="primary" onClick={confirmEdit}>
        Save
      </Button>
      <Button variant="outlined" color="secondary" onClick={props.close}>
        Cancel
      </Button>
    </form>
  );
}
