const INITIAL_STATE = {
    data: [],       // to store fetched jobs
    application: {}, // to store submitted application data
    isLoading: false,
    isError: ''
};

const jobReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "FETCH_JOBS_START":
            return {
                ...state,
                isLoading: true
            };
        case "FETCH_JOBS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                data: action.payload
            };
        case "FETCH_JOBS_FAILURE":
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            };
        case "SUBMIT_APPLICATION":
            return {
                ...state,
                application: action.payload
            };
        default:
            return state;
    }
};

export default jobReducer;
