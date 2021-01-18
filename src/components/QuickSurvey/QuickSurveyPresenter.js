import React,{useState, useEffect} from 'react'
import { Row, Col } from 'antd';
import SurveyView from './SurveyView';

function QuickSurveyPresenter({surveys, category}) {
    if(category!=""){
        surveys = surveys.filter(
         survey => survey.category.indexOf(category) >= 0 
       );
    }
    return (
        <div style={{display:'flex',fontFamily:'Noto Sans CJK KR'}}>
            {surveys.map((s) => (
             <Row gutter={[30, 30]}>    
                <SurveyView key={s.id} survey={s}/>
            </Row>
            ))}
        </div>
    )
}
// <Link to ={"/SurveyDetail" + `${items.id}`} 

export default QuickSurveyPresenter;

   