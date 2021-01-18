import React from 'react';
import styled from 'styled-components';
import LoginFormContainer from '../components/LoginForm/LoginFormContainer';

function LoginPage() {
    return (
        <Container>
            <LoginFormContainer/>
        </Container>
    );
}

const Container = styled.div`
    position: absolute;
    width: 1920px;
    height : 100%;
    margin: 0;
    background : #EFEFEF;
`

export default LoginPage;

