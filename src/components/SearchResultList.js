import React, { useState } from 'react'
import SurveyTable from '../common/SurveyTable'


function SearchResultList() {

  const [SearchKeyword, setSearchKeyword] = useState('수면시간')
  const [NumOfSearch, setNumOfSearch] = useState(0)
  const [SearchResults, setSearchResults] = useState([])
// 서버 통신해서 SearchResults를 SurveyTable의 data로 보내기.

  const data = [ // 임시 데이터
    {
      key: '1',
      title: 'John Brown',
      point: 32,
      num_of_response: 'New York No. 1 Lake Park',
      period: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      title: 'Jim Green',
      point: 42,
      num_of_response: 'London No. 1 Lake Park',
      period: 'New York No. 1 Lake Park',
    },
    {
      key: '3',
      title: 'Joe Black',
      point: 32,
      num_of_response: 'Sidney No. 1 Lake Park',
      period: 'New York No. 1 Lake Park',
    },
  ];
  
  /*
  useEffect(() => {
    fetch()
            .then(response => {
                setSearchResults(response.json()) //서버에서 검색 결과 가져오기
            })
  })*/

 
  return (
    <div style={{width:'1920px', fontFamily:'Noto Sans CJK KR'}}>
      <div style={{ float:'left', marginLeft:'320px',marginBottom:'20px',fontWeight: '700', fontSize:'18px' }}>
        <span style={{fontWeight: '700', color: '#418AFF'}}>
          ' {SearchKeyword} '
            </span>
            &nbsp;에 대한 검색 결과 입니다.

            <div style={{ fontSize: '14px', fontWeight: '500', color: '#898989' }}>
          ( {NumOfSearch}개 결과 검색 )
            </div>
      </div>
      
      <SurveyTable data={data}></SurveyTable>
    </div>
  )
}

export default SearchResultList
