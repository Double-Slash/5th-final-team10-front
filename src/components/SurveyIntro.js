import React from 'react'

/**
 * 
 * 미리보기 인트로 
 * by : 우혜경
 * 
 **/ 

function SurveyIntro(props) {

    function isPreview(){
        if(props.preview==1){
            return   <div style={{ position: 'absolute', zIndex: '2', left: '50%', transform: 'translateX(-50%)', height: '502px', width: '100%', backgroundColor: 'rgb(239,239,239,0.5)' }} />

        }
    }

    return (
        <div>
            <div style={{ position: 'relative', height: '438px' }}>
                <div style={{ position: 'absolute', zIndex: '0', left: '50%', transform: 'translateX(-50%)', width: '100%', marginTop: '86px' }}>

            {/*  대표 사진  */}
                    <div style={{ width: '510px' }}>
                        <img src='http://via.placeholder.com/510x352' style={{ position: 'absolute', zIndex: '0', borderRadius: '10px', float: 'left' }} />
                        <div className='pointBox'>
                            <div style={{ fontSize: '18px', fontWeight: '700', color: '#418AFF', marginTop: '5px' }}>10P</div>
                        </div>
                    </div>
            {/*  대표 사진  */}


            {/*  설문조사 소개 문구  */}
                    <div style={{ position: 'relative', float: 'right', width: '750px', height: '352px' }}>
                        <div style={{ marginLeft: '29.6px' }}>
                            <div style={{ fontWeight: '700', fontSize: '36px' }}>
                                <span style={{ color: '#418AFF' }}>
                                    [음식]
                                </span>
                                &nbsp;맥딜리버리 어플 사용성에 관한 평가
                            </div>
                            <div style={{ fontWeight: '400', marginTop: '10px', fontSize: '18px' }}>
                                2020.12.09 ~ 2021.01.09 (진행중)
                            </div>
                            <div style={{ fontWeight: '400', marginTop: '39px', fontSize: '18px' }}>
                                안녕하세요. 저희는 XX대학교 XXX학과 재학생입니다.안녕하세요. 저희는 XX대학교 XXX학과 재학생입니다.
                                본 설문은 XX과목을 수강하며 맥딜리버리 어플을 효율적으로 보낼 수 있도록 하기위한 프로젝트를 진행중입니다. 많은 참여 부탁드립니다.
                            </div>
                             
                            <div style={{ fontWeight: '400', fontSize: '14px', color: '#6C6C6C', position: 'absolute', bottom: '0', right: '0' }}>
                                seungh00 님의 설문조사
                            </div>

                        </div>
                    </div>
            {/*  설문조사 소개 문구 */}
                </div>
                {isPreview()}
            </div>
        </div>
    )
}

export default SurveyIntro
