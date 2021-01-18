import {loadSurvey, loadSurveyFail, loadSurveySuccess,selectCategory,searchSurvey} from './surveyAction'
import {signUpRequest, signInRequest, logOut,signInSuccess} from './userAction'

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
};

export default allAction;