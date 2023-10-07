import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobsStart, fetchJobsSuccess, fetchJobsFailure } from '../../actions/jobActions';
import axios from 'axios'

const JobList = (props) => {
    const dispatch = useDispatch();
    const { data, isLoading, isError } = useSelector(state => state.jobs);
    const language = props.match.params.language;

    useEffect(() => {
        dispatch(fetchJobsStart());
        axios.get(`http://localhost:3055/jobs/search/${language}`)
            .then(response => {
                dispatch(fetchJobsSuccess(response.data));
            })
            .catch(error => dispatch(fetchJobsFailure(error.message)));
    }, [dispatch, language]);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {isError}</div>;

    return (
        <div className="container mt-5">
            <h2>Jobs requiring {language}</h2>
            {console.log(data)}
            {data.map(job => (
                <div key={job._id} className="card mt-3">
                    <div className="card-body">
                        <h5 className="card-title">{job.title}</h5>
                        <button className="btn btn-info" onClick={() => props.history.push(`/job-detail/${job._id}`)}>View Details</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default JobList