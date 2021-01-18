import React from 'react';
import styled from "styled-components";
import search from '../../images/icon/search.svg';

const SearchBarPresenter = ({main, onChange,onSubmit, onEnter}) => {
    const width = main ? '840px' : '480px';
    return (
      
      <Container width={width} >
        <Input
          type="search"
          placeholder="종료된 설문조사 검색하기"
          onChange={onChange}
          onKeyPress={onEnter}
        />
        <Button onClick = {onSubmit} >
          <img src = {search} />
        </Button>
    </Container>
    );
  };
  
export default SearchBarPresenter;

const Container = styled.div`
  width: ${props => props.width};
  height: 56px;
  border-radius: 30px;
  background : ${props => props.theme.white};
  display : flex;
`;
const Input = styled.input`
    width : 90%;
    margin-left : 20px;
    color : #898989;
    font-size : 18px;
`;
const Button = styled.button`
  position:relative;  
  right : 0px;
`;