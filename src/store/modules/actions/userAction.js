export const signUpRequest = (signUpData) => ({
    type: "SIGN_UP_REQUEST",
    user: signUpData,
});

export const signInRequest = (signInData) => ({
    type: "SIGN_IN_REQUEST",
    user: signInData,
});

export const logOut = () => ({
    type: "LOGOUT_REQUEST",
});

export const signInSuccess = ()=>({
    type : "SIGN_IN_SUCCESS",
})


