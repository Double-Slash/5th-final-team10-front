export const getMyInfo = () => {
    return{
        type : "GET_MY_INFO"
    };
};

export const getMyInfoSuccess = myInfo => {
    return{
        type : "GET_MY_INFO_SUCCESS",
        myInfo : myInfo
    };
};

export const getMyInfoFail = error => {
    return{
        type : "GET_MY_INFO_ERROR",
        error
    };
}; 