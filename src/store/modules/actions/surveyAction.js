export const loadSurvey = () => {
    return{
        type : "LOAD_SURVEY"
    };
};

export const loadSurveySuccess = surveys => {
    return{
        type : "LOAD_SURVEY_SUCCESS",
        surveys : surveys
    };
};

export const loadSurveyFail = error => {
    return{
        type : "LOAD_SURVEY_ERROR",
        error
    };
};

export const selectCategory = category =>{
    return{
        type : "SELECT_CATEGORY",
        category :category
    };
}

export const searchSurvey = keyword =>{
    return{
        type : "SEARCH_SURVEY",
        keyword : keyword
    }
}