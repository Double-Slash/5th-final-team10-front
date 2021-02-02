import axios from 'axios';
import {
    GET_SURVEY_RESULT, GET_CLOSED_SURVEY,POST_SURVEY_RESPONSE,COMBINE_SURVEY_RESPONSE
} from './types'
//view에서 정의되어 있는 액션을 호출하면 action creators는 어플리케이션의 state를 변경하여 준다.

//액션 생성 함수
export const closedSurveyData = (data)=>{
    return {
        type:GET_CLOSED_SURVEY,
        payload: data
    }
}
export const getClosedSurveys = ()=>{
    return(dispatch)=>{
        return axios.get(`http://52.79.182.214/surveys/end`).then(response=>{
            dispatch(closedSurveyData(response.data))
        }).catch(error=>{
            throw(error);
        })
    }
}

export const surveyResultData = (data)=>{
    return{
        type:GET_SURVEY_RESULT,
        payload:data
    }
}

export const getSurveyResult=(id)=>{
    return(dispatch)=>{
        return axios.get('http://52.79.182.214/survey/12/answer',{headers:{'X-AUTH-TOKEN':'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3aGsiLCJyb2xlcyI6W10sImlhdCI6MTYxMTM0ODA5MCwiZXhwIjoxNjExMzU1MjkwfQ.jrZIMk9ZzZbavLD5khdQurJrfBu13st6E6cbb8ToFI8','Access-Control-Allow-Origin': '*',}}).then(response=>{
            dispatch(surveyResultData(response))
        }).catch(error=>{
            throw(error);
        })
    }
}

/*
이렇게 하는 방법도 찾아보기
export const getSurveyResult=(id)=>{
    let responses;
    axios.get('http://52.79.182.214/survey/12/answer',{headers:{'X-AUTH-TOKEN':'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3aGsiLCJyb2xlcyI6W10sImlhdCI6MTYxMTM0ODA5MCwiZXhwIjoxNjExMzU1MjkwfQ.jrZIMk9ZzZbavLD5khdQurJrfBu13st6E6cbb8ToFI8','Access-Control-Allow-Origin': '*',}}).then(response=>{
           responses = response;
        }).catch(error=>{
            throw(error);
        })
    return{
        type:GET_SURVEY_RESULT,
        payload:responses;
    }
} */

let responses=[]
export const CollectSurveyResponse=(id,value)=>{
    let answer={};
    answer["questionId"]=id;
    answer["answerText"]=value;
    responses.push(answer)
    //let response={'answer':{answer}};
    return{
        type:COMBINE_SURVEY_RESPONSE,
        payload:responses
    }

}