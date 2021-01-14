import React from 'react'
import DropdownMenu from './DropdownMenu'
import { Table, Tag, Space } from 'antd';

function SurveyTable(props) {

 

  const columns = [
    {
      title: '제목',
      dataIndex: 'title',
      key: 'title',
      render: text => <a className='table_title'>{text}</a>,
    },
    {
      title: '포인트',
      dataIndex: 'point',
      key: 'point',
    },
    {
      title:  '응답자 수',
      dataIndex: 'num_of_response',
      key: 'num_of_response',
    },
    {
      title:  '기간',
      key: 'period',
      dataIndex: 'period',
    },
  ];
  
    return (
        <div style={{width:'1920px', fontFamily:'Noto Sans CJK KR'}}>
             <div style={{float:'right', marginRight:'320px'}}>
             <DropdownMenu/>
      </div>   
      <Table columns={columns} dataSource={props.data} style={{marginLeft:'320px', marginRight:'320px'}} />
        </div>
    )
}

export default SurveyTable
