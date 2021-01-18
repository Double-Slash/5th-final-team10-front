import surveys from './surveyReducer'
import user from './userReducer'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    surveys,
    user,
});

export default rootReducer;