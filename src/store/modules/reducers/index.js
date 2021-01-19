import surveys from './surveyReducer'
import user from './userReducer'
import myInfo from './myInfoReducer'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    surveys,
    user,
    myInfo,
});

export default rootReducer;