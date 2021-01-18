import React from 'react';
import styled from "styled-components";
import SearchBarContainer from '../SearchBar/SearchBarContainer';
import logo from '../../images/logo-white.svg';
import pointIcon from '../../images/icon/point.svg';

const HeaderPresenter = ({main, login, point}) => {
    const beforeLogin = ['로그인','회원가입'];
    const AfterLogin = ['마이페이지','로그아웃'];
    const [value1, value2] = login ? AfterLogin : beforeLogin;

    return (
      <WrapperHeader color={main}>   
            <Container> 
              <Logo src={logo}/>
              <Search>{!main && <SearchBarContainer/>}</Search>
              <Sign>
                  {login && <> <img src={pointIcon}/> <span>{point}</span> </>}
                  <span>{value1}</span>
                  <span>{value2}</span>  
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