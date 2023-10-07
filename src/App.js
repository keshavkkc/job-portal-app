import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './components/Auth/Signup'
import JobSearch from './components/Job/JobSearch';
import JobList from './components/Job/JobList';
import JobDetail from './components/Job/JobDetail';
import ApplyJob from './components/Job/Apply';
import Success from './components/Job/Success';
import Login from './components/Auth/Login';
import Home from './components/Auth/Home';
import PrivateRoute from './components/Auth/PrivateRoute';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App(props) {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleAuth = () => {
    setUserLoggedIn(!userLoggedIn);
  };

  useEffect(() => {
    if (localStorage.getItem('user')) {
      handleAuth();
    }
  }, []);

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand">Job Portal</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                {userLoggedIn === false ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/signup">
                        <i className="bi bi-person-plus-fill"></i> Signup
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" onClick={() => {
                        localStorage.removeItem('user');
                        alert('Successfully Logged Out');
                        handleAuth();
                        props.history.push('/login');
                      }}>Logout</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" render={(props) => {
              return <Login
                {...props}
                handleAuth={handleAuth}
              />
            }} />
            <PrivateRoute exact path="/jobsearch" component={JobSearch} />
            <PrivateRoute exact path="/job-list/:language" component={JobList} />
            <PrivateRoute exact path="/job-detail/:id" component={JobDetail} />
            <PrivateRoute exact path="/apply/:jobId" component={ApplyJob} />
            <PrivateRoute exact path="/success" component={Success} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default withRouter(App);
