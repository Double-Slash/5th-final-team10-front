export const initialState = {
    isLogin:false,
    userData : {
        birth : "",
    },
    error : null,
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case "SIGN_UP_REQUEST" :
            return {...state, error:null};
        case "SIGN_UP_SUCCESS":
            return {
                ...state,
            };
        case "SIGN_UP_FAILURE":
            return {
                ...state,
                error: action.error,
            };
        case "SIGN_IN_REQUEST":
            return {
                ...state,
                isLogin: false,
                error: null,
            };
        case "SIGN_IN_SUCCESS":
            return {
                ...state,
                isLogin: true,
                error : null
            };
        case "SIGN_IN_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        case "LOGOUT_REQUEST":
            return {
                ...state,
            };
        case "LOGOUT_SUCCESS":
            return {
                ...state,
                isLogin: false,
            };
        case "LOGOUT_FAILURE":
            return {
                ...state,
                error: action.error,
            };

        default:
            return state;
    }
};