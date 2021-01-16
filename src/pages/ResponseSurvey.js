import React,{useState} from 'react'
import QuestionForm from '../common/QuestionForm'
import DropdownMenu from '../common/DropdownMenu'
import PointFilter from '../common/PointFilter'
import SurveyIntro from '../components/SurveyIntro'

/**
 * 
 * 설문조사 응답하기 페이지 
 * by : 우혜경
 * 
 **/ 

function ResponseSurvey() {

    
    const [questionDatas, setquestionDatas] = useState([])

    const questionData = ([
        // 이전 페이지에서 props로 받기
        { //임의로 넣은 데이터입니당
          questionId : 5,
          questionNo:'1-1',
          question: '맥딜리버리 어플을 사용한 경험이 있습니까?',
          example : ['네','아니오'],
          essential:1
        },
        {
          questionId : 6,
          questionNo:'1-2',
          question: '평소 맥딜리버리 어플 사용빈도는 몇 회 입니까?',
          example : ['한달 2회 이하','일주일 1회 이하','일주일 2회~4회','일주일 5회 이상'],
          essential:0
        },
        {
          questionId : 7,
          questionNo:'2-1',
          question: '해당 어플 사용에 있어 불편함을 겪었던 경험이 있나요?',
          example : ['네','아니오'],
          essential:0
        },
        {
          questionId :1,
          questionNo:'2-2',
          question: '‘네’를 선택했다면, 해당 어플을 사용 중 불편함을 겪었던 메뉴를 선택해주세요.',
          example : ['메뉴 담기','결제 하기','주문 조회','기타'],
          essential:1
        }
      ])

    const mapToComponent = data => {
        return data.map((question, index) => (<QuestionForm question={question} key={index}/>) //QuestionForm 태그 배열 만들어짐
        ); }
   

    return (
        <div>
        <div style={{ width: '1280px', marginLeft: '320px', marginRight:'320px' }}>

            <SurveyIntro preview={0}/>

            <hr style={{backgroundColor:'#C4C4C4', marginTop:'64px',height:'1px', border:'0'}}/>
    
            {/*  질문 항목들  */}
           <div style={{marginTop:'64px', marginBottom:'57px'}}>
                {mapToComponent(questionData)}
           </div>
            {/*  질문 항목들  */}

            <button style={{float:'right',backgroundColor:'#C4C4C4',border:'0px',borderRadius:'10px',height:'59px', width:'180px',color:'#fff', fontSize:'18px', fontWeight:'400'}}>완료</button>
        </div>
    </div>
    )
}

export default ResponseSurvey
