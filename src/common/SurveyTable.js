import React,{useEffect, useState} from 'react'
import DropdownMenu from './DropdownMenu'
import { Table } from 'antd';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

/*const MLink = nativeStyled.Link`
  color:black;
  &:hover {
    color: #418AFF;
  }
`*/
var RowIndex=0;

function SurveyTable(props) {
const [Surveys, setSurveys] = useState(props.data)
    useEffect(() => {
     setSurveys(props.data)
     console.log(Surveys)
    },[props.data])

  const columns = [
    {
      title: '제목',
      dataIndex: 'name',
      key: 'name',
      render: (text,record) => {return <Link to={`/result/${record.id}`}>{text}</Link>; }
    },
    {
      title: '포인트',
      dataIndex: 'point',
      key: 'point',
    },
    {
      title:  '응답자 수',
      dataIndex: 'responseCount',
      key: 'responseCount',
    },
    {
      title:  '기간',
      key: 'startDate',
      dataIndex: 'startDate',
    },
  ];

  
    return (
        <div style={{width:'1920px', fontFamily:'Noto Sans CJK KR'}}>
             <div style={{float:'right', marginRight:'320px'}}>
             <DropdownMenu/>
      </div>   
      <Table columns={columns} dataSource={Surveys} style={{marginLeft:'320px', marginRight:'320px'}} />
    
        </div>
    )
}

export default SurveyTable
