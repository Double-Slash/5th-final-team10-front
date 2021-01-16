import React from 'react';
import HeaderPresenter from './HeaderPresenter';

export default(props) => {
    //api 구현 덜 됨 -> 수정 필요 
    const point = 0;
    const userId = localStorage.getItem('userId');
    return (
        <HeaderPresenter 
            main = {props.main}
            login = {userId}
            point = {point}
        /> 
    );
};
