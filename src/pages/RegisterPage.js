import React from 'react';
import styled from 'styled-components';
import RegisterFormContainer from '../components/RegisterForm/RegisterFormContainer';

function RegisterPage() {
    return (
        <Container>
            <RegisterFormContainer/>
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

export default RegisterPage;

