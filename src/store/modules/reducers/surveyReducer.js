const initialState = {
    keyword: "",
    category : "",
    surveys: [],
    error: null,
  }

export default function surveys(state = initialState, action){
    switch(action.type) {
        case "SELECT_CATEGORY" :
            return{...state, category : action.category};
        case "SEARCH_SURVEY" :
            return{...state, keyword : action.keyword};
        case "LOAD_SURVEY_SUCCESS" :
            return {...state, surveys :action.surveys};
        case "LOAD_SURVEY_FAIL" :
            return [...state, action.error];
        default : 
            return state;
    }
};