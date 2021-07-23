import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { IconButton, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "25ch",
    },
    width: "25%",
    margin: "0 auto",
  },
}));

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function Form() {
  const [state, setState] = useState({
    // user: null,
    open: false,
    empty: false,
  });
  const { user } = useLocation();
  const { open } = state;
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setState({ open: false });
  };

  const handleSubmit = (e, method, id = "") => {
    e.preventDefault();
    const data = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      phone: e.target.elements.phone.value,
    };

    // if (method === "PUT") {
    //   user.name = e.target.elements.name.value;
    //   user.email = e.target.elements.email.value;
    //   user.phone = e.target.elements.phone.value;
    // }
    fetch(`http://localhost:4000/user/${id}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((data) => setState({ open: true }));
    e.target.reset();
  };
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={(e) => {
        user ? handleSubmit(e, "PUT", `${user._id}`) : handleSubmit(e, "POST");
      }}
    >
      <TextField
        key={user ? "resolved" : "loading"}
        defaultValue={user ? user.name : ""}
        id="name"
        label="Name"
      />
      <TextField
        defaultValue={user ? user.email : ""}
        id="email"
        label="Email"
      />
      <TextField
        defaultValue={user ? user.phone : ""}
        id="phone"
        label="Phone"
      />
      <Button type="submit" variant="contained" color="primary">
        {user ? "Update" : "Add User"}
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        color="primary"
        open={open}
        TransitionComponent={SlideTransition}
        autoHideDuration={6000}
        onClose={handleClose}
        message="User Added"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </form>
  );
}
