import styles from "./layout.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Awnser, Modal, Spinner, Register } from "Components";

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
            <Route exact path="/register" component={Register} />
            <Route exact path="/user-awnser" component={Awnser} />
            <Redirect to="/register" />
          </Switch>
        )}
        <footer>
          <a
            href="mailto:julianfloresdev@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Julian Flores
          </a>
          <div className={styles.socialMedia}>
            <a
              href="https://www.linkedin.com/in/julian-flores-dev/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/icons/add-in-linkedIn.svg`}
                alt="Contact in LinkedIn"
              />
            </a>
            <a href="https://wa.me/+5493412824516" target="_blank" rel="noreferrer">
              <img
                src={`${process.env.PUBLIC_URL}/assets/icons/messageMe.svg`}
                alt="Contact in WhatsApp"
              />
            </a>
            <a
              href="https://github.com/JulianFloresDev/registerForm"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/icons/github-repo.svg`}
                alt="Proyect Github repo"
              />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default Layout;
