import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/Page3">
            <Page3 />
          </Route>
          <Route exact path="/Page2">
            <Page2 />
          </Route>
          <Route path="/">
            <Page1 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
