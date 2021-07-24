import { useEffect, useState } from "react";
import Table from "./components/Table";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Link } from "react-router-dom";
import "./App.css";
import { allUser } from "./utils/api";

function Page1() {
  const [state, setState] = useState({ data: null, status: "pending" });
  const { data, status } = state;
  useEffect(() => {
    allUser().then((data) => setState({ data, status: "resolved" }));
  }, []);

  const removeUser = (id) => {
    const newData = data.filter((user) => user._id !== id);
    setState({ data: newData });
  };

  if (status === "pending") {
    return <h1>Loading...</h1>;
  }
  if (status === "resolved") {
    return (
      <div className="center">
        {/* Add user Button  */}
        <Link to="/Page2">
          <Button
            className="btn"
            variant="contained"
            color="primary"
            startIcon={<AddCircleIcon />}
          >
            Add User
          </Button>
        </Link>
        {/* User Table component  */}
        <Table removeUser={removeUser} data={data} />;
      </div>
    );
  }
}

export default Page1;
