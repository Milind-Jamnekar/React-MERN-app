import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./User.css";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  table: {
    minWidth: 150,
    maxWidth: 300,
    margin: "50px auto",
  },
  root: {
    "& > *": {
      margin: "0 5px ",
    },
  },
});

export default function User({ user }) {
  const classes = useStyles();
  const history = useHistory();

  const { _id, name, email, phone } = user;
  return (
    <TableContainer className="center" component={Paper}>
      <Button
        onClick={() => history.push("/")}
        variant="contained"
        color="primary"
      >
        Back
      </Button>
      <h1 style={{ textAlign: "center", color: "blue" }}>User Details</h1>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              ID
            </TableCell>
            <TableCell align="right" component="th" scope="row">
              {_id}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Name
            </TableCell>
            <TableCell align="right" component="th" scope="row">
              {name}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              email
            </TableCell>
            <TableCell align="right" component="th" scope="row">
              {email}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              phone
            </TableCell>
            <TableCell align="right" component="th" scope="row">
              {phone}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
