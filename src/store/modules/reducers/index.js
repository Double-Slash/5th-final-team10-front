import surveys from './surveyReducer'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    surveys
});

export default rootReducer;