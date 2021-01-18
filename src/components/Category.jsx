import React from 'react';
import styled from "styled-components";
import { ReactComponent as All } from '../images/categoryIcon/all.svg';
import { ReactComponent as Food } from '../images/categoryIcon/food.svg';
import { ReactComponent as Fashion } from '../images/categoryIcon/fashion.svg';
import { ReactComponent as Sport } from '../images/categoryIcon/sport.svg';
import { ReactComponent as Edu } from '../images/categoryIcon/edu.svg';
import { ReactComponent as Art } from '../images/categoryIcon/art.svg';
import { ReactComponent as Culture } from '../images/categoryIcon/culture.svg'; 
import { ReactComponent as Etc } from '../images/categoryIcon/etc.svg';

import {useDispatch, useSelector} from 'react-redux';
import allAction from '../store/modules/actions/index';

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2.3rem;
`;
const Item = styled.button`
  display: flex;
  align-items: center;
  justify-content :center;
  width: 160px;
  height: 120px;
  background: #FFFFFF;
  border: 1px solid #EFEFEF;
  flex-basis : 160px;
  
  p{
    margin: 0;
    font-size: 16px;
    text-align: center;
    color: #898989;
    font-family : Noto Sans KR;
    font-weight: 600;
  }
`;


const Category = () => {

  const category = useSelector(state => state.surveys.category);
  const dispatch = useDispatch();

  console.log(category);


  const onClick = (e,v) =>{
    e.preventDefault();
    console.log(v);
    dispatch(allAction.selectCategory(v));
  }
  
  return (
    //to constants map (Refactoring 필요!! )
    <Container>
      <Item onClick={(e)=>onClick(e,"")}><div><All fill="#898989"/><p>전체</p></div></Item>
      <Item onClick={(e)=>onClick(e,"음식")}><div>{category=="음식" ? <Food fill="#2D59B8"/> : <Food fill="#898989"/> }<p>음식</p></div></Item>
      <Item onClick={(e)=>onClick(e,"패션")}><div>{category=="패션" ? <Fashion fill="#2D59B8"/> : <Fashion fill="#898989"/> }<p>패션</p></div></Item>
      <Item onClick={(e)=>onClick(e,"스포츠")}><div>{category=="스포츠" ? <Sport fill="#2D59B8"/> : <Sport fill="#898989"/> }<p>스포츠</p></div></Item>
      <Item onClick={(e)=>onClick(e,"교육")}><div>{category=="교육" ? <Edu fill="#2D59B8"/> : <Edu fill="#898989"/> }<p>교육</p></div></Item>
      <Item onClick={(e)=>onClick(e,"예술")}><div>{category=="예술" ? <Art fill="#2D59B8"/> : <Art fill="#898989"/> }<p>예술</p></div></Item>
      <Item onClick={(e)=>onClick(e,"문화")}><div>{category=="문화" ? <Culture fill="#2D59B8"/> : <Culture fill="#898989"/> }<p>문화</p></div></Item>
      <Item onClick={(e)=>onClick(e,"기타")}><div>{category=="기타" ? <Etc fill="#2D59B8"/> : <Etc fill="#898989"/> }<p>기타</p></div></Item>
    </Container>
    );
  };
  
  
export default Category;