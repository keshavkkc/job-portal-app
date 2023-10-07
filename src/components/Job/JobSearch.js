import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const JobSearch = (props) => {
    const [language, setLanguage] = useState('');
    const history = useHistory();

    const handleSearch = () => {
        history.push(`/job-list/${language}`);
    };

    return (
        <div className="container mt-5">
            <input
                className="form-control"
                value={language}
                onChange={e => setLanguage(e.target.value)}
                placeholder="Enter programming language..."
            />
            <button className="btn btn-primary mt-3" onClick={handleSearch}>Search</button>
        </div>
    );
}

export default JobSearch