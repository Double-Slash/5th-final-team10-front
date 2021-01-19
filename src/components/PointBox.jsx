import React from 'react';
import styled from 'styled-components';
import donate from '../images/icon/donate.svg';
import won from '../images/icon/won.svg';
import product from '../images/icon/product.svg';
import pointSVG from '../images/icon/point.svg';

const PointBox = ({point}) =>{
    return(
        <>
        <Title>마이페이지</Title>
        <Container>
            <PointSave>
                <Point>
                    <div>나의 포인트</div>
                    <Inline>
                        <span style={{fontSize:'36px'}}>25</span>
                        <img src= {pointSVG}/>
                        <View>내역조회</View>
                    </Inline>
                </Point>
                <ButtonList>
                        <Button> 포인트로 설문 보기 </Button>
                        <Button> 포인트로 쌓으러 가기  </Button>
                </ButtonList>
            </PointSave>
            
            <PointChange>
                <span style={{fontWeight:'bold'}}>포인트 전환</span> 
                <span style={{color:'#898989'}}>다양한 방법으로 포인트를 사용할 수 있습니다.</span>
                <ChangeItem>
                    <Item><img src = {won}/><div>포인트를 <br/>계좌로 입금하기</div></Item>
                    <Item><img src = {donate}/><div>포인트를 기부하기</div></Item>
                    <Item><img src = {product}/><div>포인트로<br/>기프티콘 구매하기</div></Item>
                </ChangeItem>
            </PointChange>
        </Container>
        </>
    );
}

export default PointBox;


const Container = styled.div`
    width: 1293px;
    display : flex;
`;

const Title = styled.div`
    font-size: 36px;
    line-height: 52px;
`;

const PointSave = styled.div`
    margin-top : 30px;
    display: flex;
`;

const Point = styled.div`
    width: 320px;
    height: 126px;
    background: #418AFF;
    border-radius: 10px;
    color : #FFFFFF;
    padding-top :22px;
    padding-left:40px;
`;

const Inline = styled.div`
    margin-top : 20px;
    display : flex;
`;

const View = styled.div`
    width: 108px;
    height: 28px;
    margin-left : 64px;
    margin-top : 5px;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 16px;
    font-size : '14px';
    text-align : center;
    line-height : 28px;
`;

const ButtonList = styled.div`

`;
const Button = styled.div`
    width: 253px;
    height: 58px;
    background: #FFFFFF;
    border: 2px solid #418AFF;
    box-sizing: border-box;
    border-radius: 10px;
    margin-left : 20px;
    margin-bottom : 10px;
    text-align : center;
    line-height:58px;
    color : #418AFF;

`;
const PointChange = styled.div`
    margin-left : 66px;
    color : #418AFF;

`;
const ChangeItem = styled.div`
    margin-top : 10px;
    display: flex;
`;

const Item = styled.div`
    width: 200px;
    height: 126px;
    margin-right :10px;
    background: #FFFFFF;
    border: 2px solid #418AFF;
    box-sizing: border-box;
    border-radius: 10px;

    img{
        margin-top : 26px;
        margin-left : 22px;
    }                    
    div{
        margin-top : 20px;
        margin-left : 22px;
    }
                    
`;