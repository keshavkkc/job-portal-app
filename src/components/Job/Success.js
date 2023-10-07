import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const Success = () => {
    const application = useSelector(state => state.jobs.application);
    useEffect(() => {

    }, [])
    return (
        <div className="container mt-5">
            <h2>Your Application</h2>
            <p><strong>Name:</strong> {application.name}</p>
            <p><strong>Email:</strong> {application.email}</p>
            <p><strong>Cover Letter:</strong> {application.coverLetter}</p>
            <p><strong>Resume:</strong> {application.resume ? application.resume.name : 'Not uploaded'}</p>
        </div>
    );
}

export default Success