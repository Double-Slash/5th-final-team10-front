import React, { useEffect, useState } from 'react'
import QuestionForm from './QuestionForm'

function SurveyPreview() {
   
    const questionData = ([
        // 이전 페이지에서 props로 받기
        { //임의로 넣은 데이터입니당
          questionId : 1,
          questionNo:'1-1',
          question: '맥딜리버리 어플을 사용한 경험이 있습니까?',
          example : ['네','아니오'],
        },
        {
          questionId : 7,
          questionNo:'1-2',
          question: '평소 맥딜리버리 어플 사용빈도는 몇 회 입니까?',
          example : ['한달 2회 이하','일주일 1회 이하','일주일 2회~4회','일주일 5회 이상'],
        },
        {
          questionId : 4,
          questionNo:'2-1',
          question: '해당 어플 사용에 있어 불편함을 겪었던 경험이 있나요?',
          example : ['네','아니오'],
        },
        {
          questionId :5,
          questionNo:'2-2',
          question: '‘네’를 선택했다면, 해당 어플을 사용 중 불편함을 겪었던 메뉴를 선택해주세요.',
          example : ['메뉴 담기','결제 하기','주문 조회','기타'],
        }
      ])

    const mapToComponent = data => {
        return data.map((question, index) => (<QuestionForm question={question} key={index}/>) //QuestionForm 태그 배열 만들어짐
        ); }
        

    return (
        <div>
            <div style={{ width: '960px', margin: '0 auto' }}>

                {/*  미리보기 배너  */}
                <div className='align_center' style={{ fontFamily: 'Noto Sans CJK KR', backgroundColor: '#D7E6FF', width: '100%', height: '28px' }}>
                    <span style={{ fontWeight: '700', fontSize: '13px', color: '#418AFF' }}>[미리보기]</span>
                </div>
                {/*  미리보기 배너  */}


                <div style={{ position: 'relative', height: '300px' }}>
                    <div style={{ position: 'absolute', zIndex: '0', left: '50%', transform: 'translateX(-50%)', width: '100%', marginTop: '66px' }}>

                {/*  대표 사진  */}
                        <div style={{ width: '340px', marginLeft: '30px' }}>
                            <img src='http://via.placeholder.com/340x234' style={{ position: 'absolute', zIndex: '0', borderRadius: '10px', float: 'left' }} />
                            <div className='pointBox'>
                                <div style={{ fontSize: '13px', fontWeight: '700', color: '#418AFF', marginTop: '5px' }}>10P</div>
                            </div>
                        </div>
                {/*  대표 사진  */}


                {/*  설문조사 소개 문구  */}
                        <div style={{ position: 'relative', float: 'right', marginRight: '30px', width: '560px', height: '234px' }}>
                            <div style={{ marginLeft: '29.6px' }}>
                                <div style={{ fontWeight: '700', fontSize: '26px' }}>
                                    <span style={{ color: '#418AFF' }}>
                                        [음식]
                                    </span>
                                    &nbsp;맥딜리버리 어플 사용성에 관한 평가
                                </div>
                                <div style={{ fontWeight: '400', marginTop: '10px', fontSize: '15px' }}>
                                    2020.12.09 ~ 2021.01.09 (진행중)
                                </div>
                                <div style={{ fontWeight: '400', marginTop: '39px', fontSize: '15px' }}>
                                    안녕하세요. 저희는 XX대학교 XXX학과 재학생입니다.안녕하세요. 저희는 XX대학교 XXX학과 재학생입니다.
                                    본 설문은 XX과목을 수강하며 맥딜리버리 어플을 효율적으로 보낼 수 있도록 하기위한 프로젝트를 진행중입니다. 많은 참여 부탁드립니다.
                                </div>
                                 
                                <div style={{ fontWeight: '400', fontSize: '10px', color: '#6C6C6C', position: 'absolute', bottom: '0', right: '0' }}>
                                    seungh00 님의 설문조사
                                </div>

                            </div>
                        </div>
                {/*  설문조사 소개 문구 */}


                    </div>
                
                {/*  커버  */}
                    <div style={{ position: 'absolute', zIndex: '2', left: '50%', transform: 'translateX(-50%)', height: '347px', width: '100%', backgroundColor: 'rgb(239,239,239,0.5)' }} />

                {/*  커버  */}

                </div>

                <hr style={{backgroundColor:'#C4C4C4', marginTop:'47px',height:'1px', border:'0'}}/>
        
                {/*  질문 항목들  */}
               <div style={{marginTop:'47px', marginBottom:'57px'}}>
                    {mapToComponent(questionData)}
               </div>
                {/*  질문 항목들  */}


                
            </div>
        </div>
    )
}

export default SurveyPreview
