import React from 'react'
import styled from 'styled-components';
import HeaderContainer from '../components/Header/HeaderContainer';
import Nav from '../components/Nav';
import QuickSurveyContainer from '../components/QuickSurvey/QuickSurveyContainer';
import SearchBarContainer from '../components/SearchBar/SearchBarContainer';
import Category from '../components/Category';
import bg from '../images/main-background.png';


function MainPage() {
    return(
        <>
            <MainHeader>
                <HeaderContainer main={true}/>
                <Info>설문조사 등록부터 참여까지 <br/> 원하는 정보를 한눈에 확인하고 싶다면</Info>
                <Search><SearchBarContainer main={true}/></Search>
            </MainHeader>
            <Nav/>
            <MainArticle>
                <Text>분야별 한눈에 보기</Text>
                <Category/>
                <Text>퀵 서베이</Text>
                <QuickSurvey><QuickSurveyContainer/></QuickSurvey>
            </MainArticle>
            
            
        </>
    );
}

export default MainPage;

const MainHeader = styled.div`
    height : 508px;
    background-image : linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${bg});
    background-size : cover;
`;

const Search = styled.div`
    margin-top : 84px;
    margin-left : 540px;
    width: 840px;
    height: 56px;
`;
const Info = styled.div`
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    color: #FFFFFF;
    line-height: 58px;
`;

const MainArticle = styled.div`
    margin-top :58px;
    margin-left: 16.67%;
    margin-bottom: 127px;
`;

const Text = styled.p`
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    color: #000000;
    margin-bottom : 20px;
`;

const QuickSurvey = styled.div`
        width: 1279px;
        height: 688px;
`;