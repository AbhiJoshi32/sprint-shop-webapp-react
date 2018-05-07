import Firebase from "firebase";
const auth = Firebase.auth();
export function loginUser(email,password) {
    return (dispatch) => {
        dispatch({type:LOGGING_USER,payload:{}});
        auth.signInWithEmailAndPassword(email, password)
            .catch(function (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                dispatch({type:LOGIN_USER_FAILED,payload:{errorCode,errorMessage}});
            });
    }
}

export function getUserLoginStatus() {
    return(dispatch) => {
        auth.onAuthStateChanged(function(user) {
            if (user) {
                dispatch({type:USER_LOGGED_IN,payload:user})
            } else {
                dispatch({type:USER_LOGGED_OUT,payload:{}})
            }
        });
    }
}

export function logoutUser() {
    auth.logoutUser();
}