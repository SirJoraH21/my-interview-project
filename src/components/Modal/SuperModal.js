import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import EditForm from "../Form/EditForm";
import AddForm from "../Form/AddForm";
import DeleteForm from "../Form/DeleteForm";
import DetailsForm from "../Form/DetailsForm";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    minWidth: 350,
    maxWidth: 800,
    minHeight: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function SuperModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const bodys = {
    add: (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Add new Item</h2>
        <AddForm close={handleClose} />
      </div>
    ),
    details: (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Details</h2>
        {/* <EditForm item={props.item} close={handleClose} /> */}
        <DetailsForm item={props.item} close={handleClose} />
      </div>
    ),
    edit: (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Edit</h2>
        <EditForm item={props.item} close={handleClose} />
        {/* <DetailsForm item={props.item} close={handleClose} /> */}
      </div>
    ),
    delete: (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Are you shure?</h2>
        <DeleteForm item={props.item} close={handleClose} />
      </div>
    ),
  };
  const buttons = {
    add: (
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        style={{ width: "100%" }}
      >
        Add
      </Button>
    ),
    details: (
      <Button
        variant="outlined"
        color="primary"
        onClick={handleOpen}
        style={classes.button}
      >
        Details
      </Button>
    ),
    edit: (
      <Button variant="outlined" color="primary" onClick={handleOpen} style={{width: '100%'}}>
        Edit
      </Button>
    ),
    delete: (
      <Button variant="outlined" color="secondary" onClick={handleOpen}>
        Delete
      </Button>
    ),
  };
  return (
    <div>
      {buttons[props.btn]}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{overflow: `auto`}}
      >
        {bodys[props.modalType]}
      </Modal>
    </div>
  );
}

export default SuperModal;
