const initialState = {
    test : 'd',
    surveyList :{
    },
    error: null,
  }

  export default function myInfo(state = initialState, action){
    switch(action.type) {
        case "GET_MY_INFO_SUCCESS" :
            return {...state, surveyList :action.myInfo.surveyList};
            
        case "GET_MY_INFO_ERROR" :
            return [...state, action.error];
        default : 
            return state;
    }
};