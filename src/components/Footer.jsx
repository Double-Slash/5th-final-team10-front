import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <Description>
        <span>1:1 문의</span>
        <span>이용약관</span>
        <span>개인정보처리방침</span>
      </Description>
      <Copyright>Copyright ⓒ doubleslash team 10 </Copyright>
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
  width: 100%;
  height : 120px;
  bottom: 0px;
  background-color: ${props => props.theme.footer_bg_color};
  color : ${props => props.theme.footer_text_color};
  font-size : 16px;
`;

const Description = styled.div`
  margin-left : 321px;
  margin-top : 25px;
  
  span {
    margin-right : 50px;
  }
`;

const Copyright = styled.div`
  margin-left : 321px;
  margin-top : 12px; 
  margin-bottom : 37px;
`;


export default Footer;
