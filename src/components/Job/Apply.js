import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ApplyJob = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        coverLetter: '',
        resume: null
    });
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        dispatch({ type: 'SUBMIT_APPLICATION', payload: formData });
        history.push('/success');
    };

    return (
        <div className="container mt-5">
            <input
                className="form-control my-2"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder="Name"
            />
            <input
                className="form-control my-2"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email"
            />
            <textarea
                className="form-control my-2"
                value={formData.coverLetter}
                onChange={e => setFormData({ ...formData, coverLetter: e.target.value })}
                placeholder="Cover Letter"
            />
            <input
                className="form-control my-2"
                type="file"
                onChange={e => setFormData({ ...formData, resume: e.target.files[0] })}
            />
            <button className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default ApplyJob;
