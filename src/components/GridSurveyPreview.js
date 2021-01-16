import React,{useState, useEffect} from 'react'
import { Row, Col } from 'antd';
import pic1 from '../images/pic1.jpg'
import pic2 from '../images/pic2.jpg'
import pic3 from '../images/pic3.jpg'
import pic4 from '../images/pic4.jpg'
import pic5 from '../images/pic5.jpg'
import pic6 from '../images/pic6.jpg'
import pic7 from '../images/pic7.jpg'
import pic8 from '../images/pic8.jpg'
import pointBox from '../images/point-box.png'

/**
 * 
 * 그리드 형태 퀵 서베이 -> 쪼개기 
 * by : 우혜경
 * 
 **/ 

function GridSurveyPreview() {

    const [items, setitems] = useState([])

    const _items=([ 
        // 테스트 위한 임시 데이터
        {
            img:pic1,
            title:'구글 드라이브 공유 기능 사용성에...',
            period:'2020.10.22 - 2020.10.31',
            time:1,
            writer:'seungh00',
            point:10
            
        },
        {
            img:pic2,
            title:'소설가 50인이 선정한 2020년 올 ...',
            period:'2020.10.22 - 2020.11.10',
            time:1,
            writer:'seungh00',
            point:10
            
        },
        {
            img:pic3,
            title:'맥딜리버리 어플 사용성에 관한 평 ...',
            period:'2020.10.22 - 2020.11.10',
            time:1,
            writer:'seungh00',
            point:10
            
        },
        {
            img:pic4,
            title:'식물 키우기 어플에 관한 설문조사',
            period:'2020.10.22 - 2020.11.10',
            time:1,
            writer:'seungh00',
            point:10
            
        },
        {
            img:pic5,
            title:'2021년부터 바뀌는 7가지 필수정 ...',
            period:'2020.10.22 - 2020.10.31',
            time:1,
            writer:'seungh00',
            point:10
            
        },
        {
            img:pic6,
            title:'소셜다이닝 어플리케이션 기획조 ...',
            period:'2020.10.30 - 2021.1.1',
            time:1,
            writer:'Seoyoo00',
            point:10
            
        },
        {
            img:pic7,
            title:'보유하고 계신 이동수단을 선택해  ...',
            period:'2020.10.22 - 2021.1.3',
            time:3,
            writer:'Seoyoo00',
            point:10
            
        },
        {
            img:pic8,
            title:'의학 관련 설문조사 ( 해외조사 ) ...',
            period:'2020.10.22 - 2020.1.5',
            time:5,
            writer:'Seoyoo00',
            point:10
            
        }
    ])

    /*useEffect(() => {
        fetch()
        .then(response => {
            setitems(response.json()) //서버에서 검색 결과 가져오기
        })
    })*/

    return (
        <div style={{display:'flex',width:'1280px', marginLeft:'320px', marginRight:'320px', fontFamily:'Noto Sans CJK KR'}}>
             <Row gutter={[30, 30]}> {/*그리드 사이에 여백줌*/}
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            <Col lg={6} md={8} xs={24}> 

                                {/* 대표 이미지 */}
                                <div style={{position:'relative', width: '290px', height: '200px',overflow: 'hidden'}}>
                                     <img src={item.img} style={{position:'absolute',zIndex:'1',borderRadius:'10px 10px 0px 0px', width:'100%', height:'100%',objectFit:'cover'}}/>
                              
                                     <img src={pointBox} style={{position:'absolute',zIndex:'2', width:'71px', height:'auto',objectFit:'contain',marginTop:'10px',marginLeft:'12px'}}/>
                                     <span style={{position:'absolute',zIndex:'3',fontSize:'18px', fontWeight:'700', color:'#418AFF',  width:'71px', height:'42px',marginTop:'16px',marginLeft:'12px',textAlign:'center'}}>{item.point}p</span>
                                </div>
                                {/* 대표 이미지 */}


                                {/* 텍스트 박스 */}
                                <div style={{width: '290px', height: '100px',backgroundColor: '#EFEFEF',borderRadius:'0px 0px 10px 10px'}}>
                                    <div style={{marginLeft:'12px', marginRight:'12px'}}>
                                        <div style={{width: '290px', textOverflow: 'ellipsis',fontWeight:'700', fontSize:'18px', textAlign:'left'}}>{item.title}</div>
                                        <div style={{fontWeight:'400', fontSize:'16px', textAlign:'left', marginTop:'20px'}}>{item.period}</div>
                                    </div>
                                    <div style={{fontWeight:'400', fontSize:'14px', textAlign:'right',marginRight:'8px', marginBottom:'8px'}}>{item.time}min</div>
                                </div>
                                {/* 텍스트 박스 */}

                                <div style={{width: '290px',color:'#898989',fontWeight:'400', fontSize:'14px', textAlign:'right'}}>{item.writer}님 제공</div>
                            </Col>
                        </React.Fragment>
                    ))}
                </Row>

        </div>
    )
}

export default GridSurveyPreview
