import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Form, Awnser } from "Components";

const Layout = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={Form} />
        <Route exact path="/user-awnser" component={Awnser} />
        <Redirect to="/register" />
      </Switch>
    </Router>
  );
};

export default Layout;
