import React, { useState } from 'react'
import { Descriptions, Badge } from 'antd';
import { Table, Tag, Space } from 'antd';
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';


/*ReactDOM.render(
  <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Click me <DownOutlined />
    </a>
  </Dropdown>,
  mountNode,
);*/

function SearchResultList() {

  const [SearchKeyword, setSearchKeyword] = useState('수면시간')
  const [NumOfSearch, setNumOfSearch] = useState(0)

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
      <div style={{ float:'left', marginLeft:'320px',marginBottom:'20px',fontWeight: '700', fontSize:'18px' }}>
        <span style={{fontWeight: '700', color: '#418AFF'}}>
          ' {SearchKeyword} '
            </span>
            &nbsp;에 대한 검색 결과 입니다.

            <div style={{ fontSize: '14px', fontWeight: '500', color: '#898989' }}>
          ( {NumOfSearch}개 결과 검색 )
            </div>
      </div>
      <div style={{float:'right', marginRight:'320px'}}>
       <Dropdown overlay={menu}>
          <a id='text' className="ant-dropdown-link" icon={DownOutlined} onClick={e => e.preventDefault()}>
          종료임박 순 <DownOutlined />
          </a>
      </Dropdown>
      </div>   
      <Table columns={columns} dataSource={data} style={{marginLeft:'320px', marginRight:'320px'}} />
      
    </div>
  )
}

export default SearchResultList
