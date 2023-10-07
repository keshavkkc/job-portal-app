import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobsStart, fetchJobsSuccess, fetchJobsFailure } from '../../actions/jobActions';
import axios from 'axios';

function JobDetail(props) {
    const dispatch = useDispatch();
    const { data, isLoading, isError } = useSelector(state => state.jobs);
    const jobId = props.match.params.id;

    useEffect(() => {
        dispatch(fetchJobsStart());
        // This is just a placeholder URL, adjust as necessary
        axios.get(`http://localhost:3055/jobs/${jobId}`)
            .then(response => {
                const data = response.data;
                dispatch(fetchJobsSuccess([data]));  // Wrapping data in array for consistency
            })
            .catch(error => dispatch(fetchJobsFailure(error.message)));
    }, [dispatch, jobId]);

    const jobDetail = data[0] || {};

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {isError}</div>;

    return (
        <div className="container mt-5">
            <h2>{jobDetail.title}</h2>
            <p>{jobDetail.description}</p>
            <button className="btn btn-primary" onClick={() => props.history.push(`/apply/${jobId}`)}>Apply</button>
        </div>
    );
}

export default JobDetail