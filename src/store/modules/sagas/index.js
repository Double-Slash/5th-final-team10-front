import { takeEvery, put, call } from 'redux-saga/effects';
import {getS} from '../../../util/api';
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

function* rootSaga(){
    yield takeEvery("LOAD_SURVEY", listSurveys);
}

export default rootSaga;