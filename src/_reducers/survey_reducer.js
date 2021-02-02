import {
    GET_SURVEY_RESULT, GET_CLOSED_SURVEY,POST_SURVEY_RESPONSE,COMBINE_SURVEY_RESPONSE
} from '../_actions/types'

export default function(state=[], action){
    switch (action.type) {
        case GET_CLOSED_SURVEY:
            return {...state, surveys: action.payload}
        case GET_SURVEY_RESULT:
            return {...state, results: action.payload}
        case COMBINE_SURVEY_RESPONSE:
            return {...state, responsejson: action.payload}
        default:
            return {state}
            break;
    }
}