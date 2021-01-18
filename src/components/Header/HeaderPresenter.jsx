import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import SearchBarContainer from '../SearchBar/SearchBarContainer';
import logo from '../../images/logo-white.svg';
import pointIcon from '../../images/icon/point.svg';

const HeaderPresenter = ({main, login, point}) => {
    const beforeLogin = [{'value':'로그인', 'url' : '/signin'},{'value':'회원가입', 'url':'signup'},];
    const AfterLogin = [{'value':'마이페이지', 'url' : '/mypage'},{'value':'로그아웃', 'url':'/logout'},];
    const [value1, value2] = login ? AfterLogin : beforeLogin;
    
    return (
      <WrapperHeader color={main}>   
            <Container> 
              <Logo src={logo}/>
              <Search>{!main && <SearchBarContainer/>}</Search>
              <Sign>
                  {login && <> <img src={pointIcon}/> <span>{point}</span> </>}
                  <Link to = {value1.url} ><span>{value1.value}</span></Link>
                  <Link to = {value2.url}><span>{value2.value}</span></Link>
                </Sign>
            </Container>
        </WrapperHeader>
    );
  };
  export default HeaderPresenter;

  const WrapperHeader = styled.header`
    background-color : ${props => props.color ? '' :props.theme.main_color}; 
    width: 100%;
    height: auto;
  `;

  const Container = styled.div`
    display: flex;
    height : 135px;
  `;

  const Logo = styled.img`
  position: absolute;
  width: 254px;
  height: 42.06px;
  left: 320px;
  top: 37px;
  `;

  const Search = styled.div`
  position: absolute;
  left: 720px;
  top: 30px;
  `;

  const Sign = styled.div`
  position : absolute;
  top: 46px;
  right : 320px;

  span{
    margin-left : 40px;
    color : ${props => props.theme.white}; 
  }
  `;