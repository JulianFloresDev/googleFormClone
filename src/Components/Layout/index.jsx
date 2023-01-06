import styles from "./layout.module.css";
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
      <div className={styles.fullpage}>
        <Switch>
          <Route exact path="/register" component={Form} />
          <Route exact path="/user-awnser" component={Awnser} />
          <Redirect to="/register" />
        </Switch>
      </div>
    </Router>
  );
};

export default Layout;
