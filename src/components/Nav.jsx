import React from 'react';
import styled from "styled-components";
import nav1 from '../images/nav1.svg';
import nav2 from '../images/nav2.svg';
import nav3 from '../images/nav3.svg';

const Nav = () => {
    return (
      <Container>
          <ul>
            <li>설문조사 생성 <ul><img src ={nav1}/></ul></li>
            <li>종료된 설문조사 <ul><img src ={nav2}/></ul></li>
            <li>설문조사 참여 <ul><img src ={nav3}/></ul></li>
          </ul>
      </Container>
    );
  };
  
export default Nav;

const Container = styled.nav`
  background-color : ${props => props.theme.main_color}; 
  ul {
    display:flex;
    align-items: center;  
    height : 80px;
    justify-content: center;
    color: ${props => props.theme.white}; 
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
  }

  ul li{
    width: 400px;
    display:flex;
    align-items: center;  
    height : 80px;
    justify-content: center;
  }
  
  li:hover {
    background-color : ${props => props.theme.white}; 
    color :${props => props.theme.hover_color}; 
    border-radius: 16px 16px 0px 0px;
    border-bottom : solid 3px ${props => props.theme.hover_color}; 
  }

  li ul{
    display:none;
    position:absolute;
    margin-top:100px;
    z-index:200;
  }
  
  li:hover ul{
    display:block;
  }
`;