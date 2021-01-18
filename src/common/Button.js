import React from 'react';
import styled from 'styled-components';

export default ( {text} ) => (
    <ButtonContainer>
        {text}
    </ButtonContainer>
)
const ButtonContainer = styled.div`
    :hover {
        cursor: pointer;
        background: ${props => '#418AFF'|| props.theme.pointColor};
        color: 'white';
    }
    font-size: 1.3rem;
    color: ${props => '#FFFFFF'|| props.theme.pointColor};
    background : #418AFF;
    border: 1px solid ${props => '#418AFF'|| props.theme.pointColor};
    border-radius: 10px;
    width : 400px;
    height : 72px;
    text-align : center;
    padding-top : 23px;
`;
