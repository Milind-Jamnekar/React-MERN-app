import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { deleteUser } from "../utils/api";

const useStyles = makeStyles((theme) => ({
  table: {
    maxWidth: 800,
    margin: "0 auto",
  },
  root: {
    "& > *": {
      margin: "0 10px ",
    },
  },
}));

export default function BasicTable({ data = [], removeUser }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <h2>ID</h2>
            </TableCell>
            <TableCell align="right">
              <h2>Name</h2>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Dynamic Data Being Mounted by interation through  */}
          {data &&
            data.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <b>{row._id}</b>
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">
                  {/* Action Buttons on Table (View, update, delete) */}
                  <div className={classes.root}>
                    <Link
                      to={{
                        pathname: `/Page3`,
                        user: { ...row },
                      }}
                    >
                      <Button variant="contained" size="small" color="default">
                        Veiw
                      </Button>
                    </Link>
                    <Link
                      to={{
                        pathname: `/Page2`,
                        user: { ...row },
                      }}
                    >
                      <Button variant="contained" size="small" color="primary">
                        Update
                      </Button>
                    </Link>
                    <Button
                      // onClick={() => removeUser(row._id)}
                      onClick={() => deleteUser(row._id)}
                      variant="contained"
                      size="small"
                      color="secondary"
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
