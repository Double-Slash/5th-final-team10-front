import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {Checkbox} from 'antd'
import logo from '../../images/logo-blue.svg';
import Button from '../../common/Button';

const LoginFormPresenter = ({onChange, onClick}) =>{
    return(
        <Container>
                <Logo src={logo}/>
                    <InputContainer onChange={onChange}>
                        <Input 
                            name = 'memberId'
                            placeholder = '아이디'
                            className='input'/>

                        <Input 
                            type = 'password'
                            name = 'password'
                            placeholder = '비밀번호'
                            className="input"/>
                    </InputContainer>    
                <Content>
                    <Checkbox>아이디저장</Checkbox>
                   <Link to ="/signup"><span style={{color : '#418AFF'}}>회원가입</span></Link>
                </Content>
                <ButtonContainer onClick={onClick}>
                    <Button text='로그인'/>
                </ButtonContainer>
                <FindAccount>
                    <span>아이디 찾기</span>
                    <span> | </span>
                    <span>비밀번호 찾기</span>
                </FindAccount>
        </Container>
    );
}
export default LoginFormPresenter;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width : 620px;
    height : 698px;
    margin: auto;
    margin-top: 191px;
    background : #FFFFFF;
    border-radius: 24px;
`;
const Logo = styled.img`
    display: block;
    margin-top : 56px;
`;
const InputContainer = styled.form`
    margin-top : 95.94px;
`;
const Input = styled.input`
    background: #EFEFEF;
    border-radius: 10px;
    margin-bottom:8px;
    width : 400px;
    height : 56px;
    display: block;
    
    ::placeholder {
        padding-left : 10px;
    }
`;
const Content = styled.div`
    display: block;
    width : 395px;
    height : 22px;
    margin-top : 52px;
    display : flex;

    justify-content : space-between;
    span{
        font-size: 18px;
        line-height: 26px;
        color: #000000;
    }
`;
const FindAccount = styled.div`
    margin-top : 12px;
    font-size: 18px;
    line-height: 26px;
`;
const ButtonContainer = styled.div`
    margin-top : 35px;
`;