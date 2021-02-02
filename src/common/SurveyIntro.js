import React from 'react'
import defaultimg from '../images/default.png'

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
                        <img src={props.data.filename?`http://52.79.182.214/file/${props.data.filename}`:defaultimg} style={{ position: 'absolute', zIndex: '0', borderRadius: '10px', float: 'left', width:'510px', height:'352px',objectFit:'cover'}} />
                        <div className='pointBox'>
                            <div style={{ fontSize: '18px', fontWeight: '700', color: '#418AFF', marginTop: '5px' }}>{props.data.point}P</div>
                        </div>
                    </div>
            {/*  대표 사진  */}


            {/*  설문조사 소개 문구  */}
                    <div style={{ position: 'relative', float: 'right', width: '750px', height: '352px' }}>
                        <div style={{ marginLeft: '29.6px' }}>
                            <div style={{ fontWeight: '700', fontSize: '36px' }}>
                                <span style={{ color: '#418AFF' }}>
                                    [{props.data.category}]
                                </span>
                                &nbsp;{props.data.name}
                            </div>
                            <div style={{ fontWeight: '400', marginTop: '10px', fontSize: '18px' }}>
                                {props.data.startDate} ~ {props.data.endDate} (진행중)
                            </div>
                            <div style={{ fontWeight: '400', marginTop: '39px', fontSize: '18px' }}>
                               {props.data.description}
                            </div>
                             
                            <div style={{ fontWeight: '400', fontSize: '14px', color: '#6C6C6C', position: 'absolute', bottom: '0', right: '0' }}>
                                {props.data.writer.memberId} 님의 설문조사
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
