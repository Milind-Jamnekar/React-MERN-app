import { useEffect, useState } from "react";
import Table from "./components/Table";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Link } from "react-router-dom";
function Page1() {
  const [state, setState] = useState({ data: null, status: "pending" });

  const { data, status } = state;
  useEffect(() => {
    fetch("http://localhost:4000/user")
      .then((data) => data.json())
      .then((data) =>
        setState({
          data,
          status: "resolved",
        })
      );
  }, []);

  if (status === "pending") {
    return <h1>Loading...</h1>;
  }
  if (status === "resolved") {
    return (
      <div className="center">
        <Link to="/Page2">
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddCircleIcon />}
          >
            Add User
          </Button>
        </Link>
        <Table data={data} />;
      </div>
    );
  }
}

export default Page1;
