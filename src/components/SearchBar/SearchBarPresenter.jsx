import React from 'react';
import styled from "styled-components";
import search from '../../images/icon/search.svg';

const SearchBarPresenter = ({onChange,onSubmit}) => {
    return (
      <Container>
        <Input
          type="search"
          placeholder="종료된 설문조사 검색하기"
          onChange={onChange}
        />
        <Button onClick = {onSubmit}>
          <img src = {search} />
        </Button>
    </Container>
    );
  };
  
  export default SearchBarPresenter;

const Container = styled.div`
  width: 480px;
  height: 56px;
  border-radius: 30px;
  background : ${props => props.theme.white};
  display : flex;
`;
const Input = styled.input`
    width : 400px;
    margin-left : 20px;
    color : #898989;
    font-size : 18px;
`;
const Button = styled.button`
  position:relative;  
  right : 0px;
`;