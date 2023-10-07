
export const fetchJobsStart = () => ({
    type: "FETCH_JOBS_START"
});

export const fetchJobsSuccess = (jobs) => ({
    type: "FETCH_JOBS_SUCCESS",
    payload: jobs
});

export const fetchJobsFailure = (errorMessage) => ({
    type: "FETCH_JOBS_FAILURE",
    payload: errorMessage
});

// New action for job application
export const submitApplication = (applicationData) => ({
    type: "SUBMIT_APPLICATION",
    payload: applicationData
});
