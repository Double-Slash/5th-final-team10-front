import SurveyTable from '../common/SurveyTable'
import {closedSurvey} from '../_actions/survey_action'
import {useSelector, useDispatch, connect} from 'react-redux'
import React from 'react'

/*const dispatch = useDispatch();
const payload = useSelector(state => state.payload)
let surveys;*/

/*const getClosedSurvey=()=>{dispatch(closedSurvey()).then(response=>{
    if(response.payload){
        surveys = response.payload;
        console.log(surveys)
      } else{
        console.log("Error")
      }
})}*/
/*
function ClosedSurveyContainer() {

   const surveys = useSelector(state => {console.log(`스테이트:${state}`)})

   const dispatch = useDispatch();

   const onClosedSurvey = () => dispatch(closedSurvey()).then(response=>{
    if(response.payload){
      surveys = response.payload;
      console.log(surveys)
    } else{
      console.log("Error")
    }
  })
    return (
        <SurveyTable surveys={surveys} onClosedSurvey={onClosedSurvey}/>
    )
}

export default ClosedSurveyContainer*/

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => {return {
    surveys:state.payload
}};


/* 
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/

/*const mapDispatchToProps = (dispatch) => {
    return {
        onClosedSurvey: () => dispatch(closedSurvey()).then(response=>{
        if(response.payload){
          surveys = response.payload;
          console.log(surveys)
        } else{
          console.log("Error")
        }
      })}
};*/

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 합니다.

const ClosedSurveyContainer = connect(
    mapStateToProps,
    {closedSurvey}
)(SurveyTable);

export default ClosedSurveyContainer;