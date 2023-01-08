import styles from "./layout.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Form, Awnser, Modal, Spinner } from "Components";

const Layout = () => {
  const { isFetching } = useSelector((store) => store.global);
  return (
    <Router>
      <div className={styles.fullpage}>
        <Modal />
        {isFetching ? (
          <Spinner />
        ) : (
          <Switch>
            <Route exact path="/register" component={Form} />
            <Route exact path="/user-awnser" component={Awnser} />
            <Redirect to="/register" />
          </Switch>
        )}
      </div>
    </Router>
  );
};

export default Layout;
