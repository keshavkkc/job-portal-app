import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="container mt-5">
            <div className="jumbotron text-center">
                <h1 className="display-4">Welcome to Job Portal</h1>
                <p className="lead">Find the best job listings and opportunities tailored just for you.</p>
                <hr className="my-4" />
                <p>Explore a wide variety of listings, from junior to senior roles, across multiple industries.</p>
                <Link to="/login" className="btn btn-primary btn-lg" role="button">Login</Link>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body text-center">
                            <i className="bi bi-search large-icon"></i>
                            <h5 className="card-title">Find Jobs</h5>
                            <p className="card-text">Discover jobs that match your skills and expertise.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body text-center">
                            <i className="bi bi-person-badge large-icon"></i>
                            <h5 className="card-title">Profile Management</h5>
                            <p className="card-text">Maintain your professional profile and increase your visibility to potential employers.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body text-center">
                            <i className="bi bi-briefcase large-icon"></i>
                            <h5 className="card-title">For Employers</h5>
                            <p className="card-text">Post job listings and find the best candidates from our vast database.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
