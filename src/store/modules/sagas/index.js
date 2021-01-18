import { takeEvery, put, call } from 'redux-saga/effects';
import {getS,postLogin,postRegister} from '../../../util/api';
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

function* rootSaga(){
    yield takeEvery("LOAD_SURVEY", listSurveys);
    yield takeEvery("SIGN_IN_REQUEST", login);
    yield takeEvery("SIGN_UP_REQUEST", register);
}

export default rootSaga;


/**
 function* authenticationWorkflow() {
  while (true) {
    let { authentication } = yield select();
    let waitLogin = !authentication;
    // 로그인이 되어 있다면 해당 값은 false
    // 로그아웃 상태라면 해당 값은 true

    while (waitLogin) {
      // 로그아웃 상태에서 로그인을 기다리는 로직
      // 위에서는 단순히 true 값으로 고정해서 루프를 태웠지만, 해당 코드는 주입한 초기값을 기반하여 진행
      try {
        const { payload: { username, password } } = yield take(getType(Actions.requestLogin));
        const { result } = yield call(Api.requestLogin, username, password);
        
        waitLogin = !waitLogin;
        // 로그인에 필요한 토큰을 사가의 call을 이용해 받아왔으니,
        // 로그인 루프를 벗어나기 위해 해당 값을 교체

        sessionStorage.setItem(
          "authentication",
          JSON.stringify({
            ...result
          })
        );
        // 세션에 로그인 토큰을 넣어준다

        yield put(Actions.successLogin({ ...result })); // 리듀서에게 디스패치
      } catch (e) {
        if (e instanceof Api.ApiError) {
          yield put(Actions.addNotification("error", e.errorMessage));
        } else {
          console.error(e);
        }
      }
    }
		
    // 로그아웃 로직
    yield take(getType(Actions.requestLogout));
    sessionStorage.removeItem("authentication");
    yield put(Actions.successLogout());
  }
}

export default function*() {
  yield fork(authenticationWorkflow);
}
 */