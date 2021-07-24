import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useHistory, useLocation } from "react-router-dom";
import Slider from "../UI/Slider";
import { addUser, updateUser } from "../utils/api";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "30ch",
    },
    width: "50%",
    margin: "20px auto",
  },
}));

export default function Form() {
  const [open, setOpen] = useState(false);
  const { user } = useLocation();
  let history = useHistory();
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (e, method) => {
    // For Adding User In DB
    if (method === "add") {
      addUser(e).then(() => setOpen(true));
      e.target.reset();
      return;
    }

    // For Updataing User in DB
    if (method === "update") {
      updateUser(e, user._id).then(() => setOpen(true));
    }
  };
  return (
    <div className="container">
      <Paper>
        <Button
          onClick={() => history.push("/")}
          variant="contained"
          color="primary"
        >
          Back
        </Button>
        {user ? (
          <h1 style={{ textAlign: "center", color: "blue" }}>Update User</h1>
        ) : (
          <h1 style={{ textAlign: "center", color: "blue" }}>Create User</h1>
        )}
        <form
          className={classes.root}
          autoComplete="off"
          onSubmit={(e) => {
            user ? handleSubmit(e, "update") : handleSubmit(e, "add");
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
          <Button
            style={{ margin: "30px" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            {user ? "Update" : "Add User"}
          </Button>
          <Slider open={open} handleClose={handleClose} />
        </form>
      </Paper>
    </div>
  );
}
