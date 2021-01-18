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
  width: 100%;
  padding-left : 321px;
  padding-top : 25px;
  padding-bottom : 37px;
  height : 120px;
  bottom: 0px;
  background-color: ${props => props.theme.footer_bg_color};
  color : ${props => props.theme.footer_text_color};
  font-size : 16px;
`;

const Description = styled.div`
  span {
    margin-right : 50px;
  }
`;

const Copyright = styled.div`
  margin-top : 12px; 
`;


export default Footer;
