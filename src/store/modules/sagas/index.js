import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import {getS,postLogin,postRegister,getInfo} from '../../../util/api';
import allAction from '../actions/index';

function* listSurveys() {
    try{
        const {data} = yield call(getS);
        console.log(data);
        yield put(allAction.loadSurveySuccess(data));
        
    }catch(error){
        yield put(allAction.loadSurveyFail(error));
        console.log(error);
    }
}

function* login(action){
    try{
        const {data} = yield call(postLogin,action.user);
        console.log(data);
        sessionStorage.setItem("authentication",JSON.stringify({...data}));
        yield put(allAction.signInSuccess(data));
        //yield put(getMyInfo)
    }catch(error){
        console.log(error);
    }
}



function* register(action){
    try{
        const {data} = yield call(postRegister, action.user);
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

function* getMyInfo(){
  try{
        let token = localStorage.getItem("authentication");
        const {data} = yield call(getInfo(token));
        yield put(allAction.getMyInfoSuccess(data));
    }catch(error){
        yield put(allAction.getMyInfoFail(error));
        console.log(error);
    }
}

/*
  yield take(getType(Actions.requestLogout));
    sessionStorage.removeItem("authentication");
    yield put(Actions.successLogout());
*/

function* rootSaga(){
    yield takeEvery("GET_MY_INFO", getMyInfo);
    yield takeEvery("LOAD_SURVEY", listSurveys);
    yield takeEvery("SIGN_IN_REQUEST", login);
    yield takeEvery("SIGN_UP_REQUEST", register);
}

export default rootSaga;
