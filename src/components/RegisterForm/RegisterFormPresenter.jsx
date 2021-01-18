import React from 'react';
import styled from 'styled-components';
import {Radio,Select} from 'antd'
import logo from '../../images/logo-blue.svg';
import Button from '../../common/Button';

const { Option } = Select;
const LoginFormPresenter = ({onChange, onClick, handleChange}) =>{
    return(
        <Container>
                <Logo src={logo}/>
                    <Text>회원가입</Text>
                    <Line/>
                    <InputContainer onChange={onChange}>

                    <Content>
                        <Radio.Group  style={{marginLeft:10}} name="gender">
                            <Radio value={false}>남</Radio>
                            <Radio value={true}>여</Radio>
                        </Radio.Group>    
                        <Select defaultValue="출생년도" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="1999">1999</Option>
                            <Option value="1998">1998</Option>
                            <Option value="1997">1997</Option>
                        </Select>
                    </Content>

                        <Input 
                            name = 'memberId'
                            placeholder = '아이디'
                            className='input'/>

                        <Input 
                            type = 'password'
                            name = 'password'
                            placeholder = '비밀번호'
                            className="input"/>

                        <Input 
                            type = 'password'
                            name = 'password'
                            placeholder = '비밀번호확인'
                            className="input"/>
                    </InputContainer>    
                <ButtonContainer onClick={onClick}>
                    <Button text='확인'/>
                </ButtonContainer>
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
const Line = styled.div`
    position: absolute;
    left: 37.5%;
    right: 37.5%;
    top: 29.81%;
    bottom: 70.19%;

    border: 1px solid #C4C4C4;
`;
const Logo = styled.img`
    display: block;
    margin-top : 44px;
`;

const Text = styled.div`
    margin-top : 26px;
`;
const InputContainer = styled.form`
    margin-top : 70px;
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
    display: flex;
    width : 395px;
    height : 22px;
    margin-bottom : 26px;
    justify-content : space-between;
`;
const ButtonContainer = styled.div`
    margin-top : 80px;
`;