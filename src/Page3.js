import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import User from "./components/User";

export default function Page3() {
  const [state, setState] = useState({ user: null, status: "loading" });
  const { id } = useParams();
  const { user, status } = state;
  useEffect(() => {
    if (!id) {
      setState({ status: "error" });
      return;
    }
    fetch(`http://localhost:4000/user/${id}`)
      .then((data) => data.json())
      .then((data) => setState({ user: data, status: "resolved" }));
  }, []);

  if (status === "loading") {
    return <img src="../assets/loading.gif" alt="loading gif"></img>;
  }

  if (status === "error") {
    return (
      <div>
        <h1>
          You've came here by wrong method. Please use home dashboard to access
          this page
        </h1>
        <Link to="/">
          <Button variant="contained" color="primary">
            Back
          </Button>
        </Link>
      </div>
    );
  }

  if (status === "resolved") {
    return (
      <div>
        <User user={user} />
      </div>
    );
  }
}
