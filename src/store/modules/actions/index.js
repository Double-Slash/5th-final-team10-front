import {loadSurvey, loadSurveyFail, loadSurveySuccess,selectCategory,searchSurvey} from './surveyAction'
import {signUpRequest, signInRequest, logOut,signInSuccess} from './userAction'
import {getMyInfo, getMyInfoSuccess, getMyInfoFail} from './myinfoAction';

const allAction = {
    loadSurvey,
    loadSurveyFail,
    loadSurveySuccess,
    selectCategory,
    searchSurvey,
    signUpRequest,
    signInSuccess,
    signInRequest,
    logOut,
    getMyInfo,
    getMyInfoSuccess,
    getMyInfoFail,
};

export default allAction;