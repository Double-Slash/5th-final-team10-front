import React from 'react'
import SearchResultList from '../components/SearchResultList'
import SurveyTable from '../components/SurveyTable'

function ClosedSurvey() {
    const data=[
        {
            key: '1',
            title:'ddd',
            point:20,
            num_of_response: 'New York No. 1 Lake Park',
            period: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            title:'aaa',
            point:10,
            num_of_response: 'New York No. 1 Lake Park',
            period: 'New York No. 1 Lake Park',
        },
        {
            key: '3',
            title:'ddgggd',
            point:30,
            num_of_response: 'ggg',
            period: 'gggg',
        },
        {
            key: '4',
            title:'ddqqqqd',
            point:20,
            num_of_response: 'sgsgsd',
            period: 'sdgsdgs',
        }
    ]
    return (
        <div style={{width:'1920px', fontFamily:'Noto Sans CJK KR'}}>
      <div style={{ float:'left', marginLeft:'320px',marginBottom:'20px',fontWeight: '700', fontSize:'18px' }}>
        종료된 설문조사
      </div>
      
      <SurveyTable data={data}></SurveyTable>
    </div>
    )
}

export default ClosedSurvey
