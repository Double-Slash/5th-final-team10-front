import React from 'react'
import { Menu, Dropdown} from 'antd';
import { DownOutlined } from '@ant-design/icons';

/**
 * 
 * 서베이 리스트 필터
 * by : 우혜경
 * 
 **/ 

function DropdownMenu() {
    
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">종료임박 순</Menu.Item>
      <Menu.Item key="2">최신순</Menu.Item>
      <Menu.Item key="3">포인트 높은 순</Menu.Item>
      <Menu.Item key="4">포인트 낮은 순</Menu.Item>
    </Menu>
  );

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
        <div>
             <Dropdown overlay={menu}>
          <a id='text' className="ant-dropdown-link" icon={DownOutlined} onClick={e => e.preventDefault()}>
          종료임박 순 <DownOutlined />
          </a>
      </Dropdown>
        </div>
    )
}

export default DropdownMenu
