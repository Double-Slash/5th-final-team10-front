import React, { useEffect, useState } from 'react'
import QuestionForm from '../common/QuestionForm'
import SurveyIntro from '../common/SurveyIntro'
function SurveyPreview(props) {
   
    const [questionDatas, setquestionDatas] = useState([])

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
   
        /* // 이전 화면에서 데이터 props로 가져오기
    useEffect(() => {
        setquestionDatas(props.datas);
    })*/

    return (
        <div>
            <div style={{ width: '1280px', marginLeft: '320px', marginRight:'320px' }}>
                {/*  미리보기 배너  */}
                <div className='align_center' style={{ fontFamily: 'Noto Sans CJK KR', backgroundColor: '#D7E6FF', width: '100%', height: '38px' }}>
                    <span style={{ fontWeight: '700', fontSize: '18px', color: '#418AFF' }}>[미리보기]</span>
                </div>
                {/*  미리보기 배너  */}

                <SurveyIntro preview={1}/>

                <hr style={{backgroundColor:'#C4C4C4', marginTop:'64px',height:'1px', border:'0'}}/>
        
                {/*  질문 항목들  */}
               <div style={{marginTop:'64px', marginBottom:'57px'}}>
                    {mapToComponent(questionData)}
               </div>
                {/*  질문 항목들  */}


                
            </div>
        </div>
    )
}

export default SurveyPreview
