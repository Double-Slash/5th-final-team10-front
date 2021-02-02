import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import SearchResultList from '../components/SearchResultList'
import SurveyTable from '../common/SurveyTable'
import { getClosedSurveys } from '../_actions/survey_action'

function ClosedSurvey() {
  const dispatch = useDispatch();
  let closedSurvey;
  const [ClosedSurvey, setClosedSurvey] = useState()
  
useEffect(() => {
    axios
      .get("http://52.79.182.214/surveys/end")
      .then(response => {
        
        console.log(response.data)
        setClosedSurvey(response.data)
      });
  }, []);

  return (
    <div style={{ width: '1920px', fontFamily: 'Noto Sans CJK KR' }}>
      <div style={{ float: 'left', marginLeft: '320px', marginBottom: '20px', fontWeight: '700', fontSize: '18px' }}>
        종료된 설문조사
      </div>

      <SurveyTable data={ClosedSurvey} ></SurveyTable>
    </div>
  )
}

export default ClosedSurvey
