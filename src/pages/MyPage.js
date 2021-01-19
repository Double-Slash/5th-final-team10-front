import React from 'react';
import styled from "styled-components";
import HeaderContainer from '../components/Header/HeaderContainer';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PointBox from '../components/PointBox';
import MySurveyListContainer from '../components/MySurveyList/MySurveyListContainer';

const MyPage = () => {
    return(
        <>
            <MyPageContainer>
                <HeaderContainer/>
                <Nav/>
                <MyPageArticle>
                    <PointBox/>
                    <Line/>
                    <Title>내가 만든 설문조사</Title>
                    <MySurveyListContainer/>
                    <Line/>
                    <Title>1:1 문의</Title>
                    <Line/>
                    <Title>개인정보</Title>
                </MyPageArticle>
            </MyPageContainer>
            <Footer/>
        </>
    )
}

export default MyPage;

const MyPageContainer = styled.div`
    width : 1920px;
    height : 1871px;
    p{
        margin-top : 20px;
        margin-bottom:20px;
    }
`;

const MyPageArticle = styled.article`
    margin-top :86px;
    margin-left: 16.67%;
    margin-right: 16.67%;
    color: #000000;
    font-size : 18px;
`;

const Line = styled.div`
    margin-top:58px;
    width: 1280px;
    border: 1px solid #C4C4C4;
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    color: #000000;
    margin-top : 38px;
    margin-bottom : 20px;
`;