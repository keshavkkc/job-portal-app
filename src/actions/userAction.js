export const startLoginUsers = (data, resetForm, redirect) => {
    return (dispatch) => {
        if (data) {
            localStorage.setItem('user', JSON.stringify(data));
            redirect()
            resetForm()
        } else {
            alert("Enter Correct Details")
        }

    }

}