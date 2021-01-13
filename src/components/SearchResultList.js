import React, { useState } from 'react'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Descriptions, Badge } from 'antd';
import { Table, Tag, Space } from 'antd';



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
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.naver.com/">최신순</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.naver.com/">포인트 높은 순</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="http://www.naver.com/">포인트 낮은 순</a>
      </Menu.Item>
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
  
  const data = [
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
  
  
  return (
    <div>
      <div style={{ float:'left', fontFamily: 'Noto Sans CJK KR', fontWeight: '700' }}>
        <span style={{ fontFamily: 'Noto Sans CJK KR', fontWeight: '700', color: '#418AFF' }}>
          ' {SearchKeyword} '
            </span>
            &nbsp;에 대한 검색 결과 입니다.

            <div style={{ fontFamily: 'Noto Sans CJK KR', fontSize: '0.75rem', fontWeight: 'normal', color: '#898989' }}>
          ( {NumOfSearch}개 결과 검색 )
            </div>
      </div>
      <div style={{float:'right'}}>
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          최신순 <DownOutlined />
        </a>
      </Dropdown>
      </div>   
      <Table columns={columns} dataSource={data} />
      
    </div>
  )
}

export default SearchResultList
