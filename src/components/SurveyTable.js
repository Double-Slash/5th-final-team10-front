import React from 'react'
import { Descriptions, Badge } from 'antd';
import { Table, Tag, Space } from 'antd';
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function SurveyTable(props) {

    
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">종료임박 순</Menu.Item>
      <Menu.Item key="2">최신순</Menu.Item>
      <Menu.Item key="3">포인트 높은 순</Menu.Item>
      <Menu.Item key="4">포인트 낮은 순</Menu.Item>
    </Menu>
  );

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
  
  function onClick({ key }){
    let text;
    switch (key) {
      case "1":
        text='종료임박 순'
        break;
    case "2":
        text='최신순'
        break;
    case "3":
        text='포인트 높은 순'
        break;
    case "4":
        text='포인트 낮은 순'
        break;
      default:
        break;
    }
   document.getElementById('text').innerText=`${text}`
  };

    return (
        <div style={{width:'1920px', fontFamily:'Noto Sans CJK KR'}}>
             <div style={{float:'right', marginRight:'320px'}}>
       <Dropdown overlay={menu}>
          <a id='text' className="ant-dropdown-link" icon={DownOutlined} onClick={e => e.preventDefault()}>
          종료임박 순 <DownOutlined />
          </a>
      </Dropdown>
      </div>   
      <Table columns={columns} dataSource={props.data} style={{marginLeft:'320px', marginRight:'320px'}} />
        </div>
    )
}

export default SurveyTable
