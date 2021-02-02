import React, { useState, useEffect } from 'react'
import axios from 'axios'
import QuestionForm from '../common/QuestionForm'
import DropdownMenu from '../common/DropdownMenu'
import PointFilter from '../components/PointFilter'
import SurveyIntro from '../common/SurveyIntro'
import { useDispatch, useSelector } from 'react-redux'

function ResponseSurvey() {
  //const [QuestionData, setQuestionData] = useState({})
 // const responses = useSelector(state => state.survey.responsejson, []) || []
  //console.log('ddd'+responses[0].questionId)
 // console.log({responses})
  useEffect(() => {
  /*  axios.get(`http://52.79.182.214/survey/12`, { headers: { 'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW9uZyIsInJvbGVzIjpbXSwiaWF0IjoxNjExMzU5MDU1LCJleHAiOjE2MTEzNjYyNTV9.4e34-3pVcim5esSApEI6DrvsW-fT9RwN2GRvP3BBYX0', 'Access-Control-Allow-Origin': '*', } })
      .then(response => {
        console.log(response.data)
        if (!response.data) setQuestionData(response.data)
      });*/
      
  }, []);
  //const dispatch = useDispatch();
 
const QuestionData =  
{
  "answer": false,
  "survey": {
      "createdAt": "2021-01-03T19:46:32.344097",
      "id": 12,
      "writer": {
          "memberId": "maum"
      },
      "name": "프로그래밍 언어 선호도 조사",
      "category": "교육",
      "description": "세대별 프로그래밍 언어 선호도를 알고 싶음",
      "startDate": "2020-12-20",
      "endDate": "2021-01-25",
      "state": true,
      "point": 10,
      "filename": "thumbnail12.jpg",
      "responseCount": 4,
      "existFile": true,
      "questions": [
          {
              "id": 9,
              "questionCategoryId": 1,
              "questionText": "현재 무슨 직업?",
              "required": true,
              "existFile": false,
              "filename": "",
              "choices": [
                  "고등학생",
                  "대학생",
                  "직장인"
              ]
          },
          {
              "id": 10,
              "questionCategoryId": 2,
              "questionText": "주요 언어가 무엇?",
              "required": true,
              "existFile": false,
              "filename": "",
              "choices": [
                  "JAVA",
                  "C++",
                  "C",
                  "PYTHON",
                  "JAVASCRIPT",
                  "기타"
              ]
          },
          {
              "id": 11,
              "questionCategoryId": 5,
              "questionText": "주요 언어를 선호하는 이유는?",
              "required": false,
              "existFile": false,
              "filename": "",
              "choices": []
          },
          {
              "id": 12,
              "questionCategoryId": 1,
              "questionText": "외에 다룰 줄 아는 언어가 있으신가요?",
              "required": false,
              "existFile": false,
              "filename": "",
              "choices": [
                  "JAVA",
                  "C++",
                  "C",
                  "PYTHON",
                  "JAVASCRIPT",
                  "기타"
              ]
          }
      ]
  }
}
  const response = {
    "answer": [
      {
        "questionId": 9,
        "answerText": 1
      },
      {
        "questionId": 10,
        "answerText": ["C++","C","PYTHON"]
      },
      {
        "questionId": 11,
        "answerText": "많이 배우는 언어이기때문"
      },
      {
        "questionId": 12,
        "answerText": ["C++","C","PYTHON"]
      },
    ]
  }
  /*const tempMap = responses.reduce((ret, { questionId, answerText }) => {
    if (ret[questionId]) {
      ret[questionId].push(answerText);
    } else {
      ret[questionId] = [answerText];
    }
    return ret;
  }, {});
  console.log(tempMap)
let responseArr=[]
let responseJson={}
if(responses&&tempMap){
for(let i=0;QuestionData.survey.questions.length;i++){
  responseJson.questionId = QuestionData.survey.questions[i].id;
  responseJson.answerText = tempMap[QuestionData.survey.questions[i].id][QuestionData.survey.questions[i].id.length-1];
}}*/
  const mapToComponent = data => {
    return data.map((question, index) => (<QuestionForm question={question} index={index + 1} />) //QuestionForm 태그 배열 만들어짐
    );
  }

  const onPost= ()=>{
    axios.post(`http://52.79.182.214/survey/12`, { headers: { 'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW9uZyIsInJvbGVzIjpbXSwiaWF0IjoxNjExMzU5MDU1LCJleHAiOjE2MTEzNjYyNTV9.4e34-3pVcim5esSApEI6DrvsW-fT9RwN2GRvP3BBYX0', 'Access-Control-Allow-Origin': '*', },data:{response} })
      .then(response => {
        console.log(response.data)
      })
  }


  return (
    <div>
      <div style={{ width: '1280px', marginLeft: '320px', marginRight: '320px' }}>

        <SurveyIntro data={QuestionData.survey} preview={0} />

        <hr style={{ backgroundColor: '#C4C4C4', marginTop: '64px', height: '1px', border: '0' }} />

        {/*  질문 항목들  */}
        <div style={{ marginTop: '64px', marginBottom: '57px' }}>
          {mapToComponent(QuestionData.survey.questions)}
        </div>
        {/*  질문 항목들  */}

        <button onClick={onPost} style={{ float: 'right', backgroundColor: '#418AFF', border: '0px', borderRadius: '10px', height: '59px', width: '180px', color: '#fff', fontSize: '18px', fontWeight: '400' } }>완료</button>
      </div>
    </div>
  )
}

export default ResponseSurvey
