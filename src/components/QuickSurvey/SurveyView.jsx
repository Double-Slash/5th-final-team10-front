import { Row, Col } from 'antd';
import pointBox from '../../images/point-box.png'
import pic2 from '../../images/pic2.jpg'

export default function SurveyView(props) {
    const {survey} = props;
    return(
        <>
            <Col lg={6} md={8} xs={24}> 

                {/* 대표 이미지 */}
                <div style={{position:'relative', width: '290px', height: '200px',overflow: 'hidden'}}>
                    <img src={pic2} style={{position:'absolute',zIndex:'1',borderRadius:'10px 10px 0px 0px', width:'100%', height:'100%',objectFit:'cover'}}/>
                    <img src={pointBox} style={{position:'absolute',zIndex:'2', width:'71px', height:'auto',objectFit:'contain',marginTop:'10px',marginLeft:'12px'}}/>
                    <span style={{position:'absolute',zIndex:'3',fontSize:'18px', fontWeight:'700', color:'#418AFF',  width:'71px', height:'42px',marginTop:'16px',marginLeft:'12px',textAlign:'center'}}>{survey.point}p</span>
                </div>
                {/* 대표 이미지 */}

                {/* 텍스트 박스 */}
                <div style={{width: '290px', height: '100px',backgroundColor: '#EFEFEF',borderRadius:'0px 0px 10px 10px'}}>
                    <div style={{marginLeft:'12px', marginRight:'12px'}}>
                        <div style={{width: '290px', textOverflow: 'ellipsis',fontWeight:'700', fontSize:'18px', textAlign:'left'}}>{survey.name}</div>
                        <div style={{fontWeight:'400', fontSize:'16px', textAlign:'left', marginTop:'20px'}}>{survey.startDate} - {survey.endDate}</div>
                    </div>
                    <div style={{fontWeight:'400', fontSize:'14px', textAlign:'right',marginRight:'8px', marginBottom:'8px'}}>{survey.point}min</div>
                </div>
                {/* 텍스트 박스 */}

                <div style={{width: '290px',color:'#898989',fontWeight:'400', fontSize:'14px', textAlign:'right'}}>{survey.writerId}님 제공</div>
            </Col>
        </>
    );
}