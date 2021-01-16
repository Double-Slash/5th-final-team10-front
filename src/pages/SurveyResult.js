import React,{useState} from 'react'
import { Tabs } from 'antd';
import SurveyIntro from '../components/SurveyIntro'
import QuestionForm from '../common/QuestionForm'
import downloadIcon from '../images/download.png'
import { Pagination } from 'antd';

/**
 * 
 * 종료된 설문조사 결과보기 페이지
 * by : 우혜경
 * 
 **/ 

function SurveyResult() {
    const { TabPane } = Tabs;
    const [tabkey, settabkey] = useState('1')

    const questionData = ([
        // 이전 페이지에서 props로 받기
        { //임의로 넣은 데이터입니당
            questionId: 5,
            questionNo: '1-1',
            question: '맥딜리버리 어플을 사용한 경험이 있습니까?',
            example: ['네', '아니오'],
            essential: 1
        },
        {
            questionId: 6,
            questionNo: '1-2',
            question: '평소 맥딜리버리 어플 사용빈도는 몇 회 입니까?',
            example: ['한달 2회 이하', '일주일 1회 이하', '일주일 2회~4회', '일주일 5회 이상'],
            essential: 0
        },
        {
            questionId: 7,
            questionNo: '2',
            question: '해당 어플 사용에 있어 불편함을 겪었던 경험이 있나요?',
            example: ['네', '아니오'],
            essential: 0
        },
        {
            questionId: 1,
            questionNo: '2-2',
            question: '‘네’를 선택했다면, 해당 어플을 사용 중 불편함을 겪었던 메뉴를 선택해주세요.',
            example: ['메뉴 담기', '결제 하기', '주문 조회', '기타'],
            essential: 1
        }
    ])

    function tabStyle(title) { 
        return (
            <div style={{ width: '600px', textAlign: 'center', fontSize: '18px', fontWeight: '700', color: '#2D59B8', marginTop: '20px', marginBottom: '20px' }}>
                {title}
            </div>) 
    }


    const mapToBoxComponent = data => {
        return data.map((question, index) => (
            <div>
                 {/*  박스 상단바  */}
                <div style={{ height: '45px', backgroundColor: '#EFEFEF', border: 'solid #C4C4C4', borderWidth: '1px 1px 0 1px', borderRadius: '10px 10px 0 0' }}>
                    <div style={{ position: 'absolute', width: '100px', fontSize: '18px', fontWeight: '400', marginLeft: '27px', marginTop: '9px' }}>
                        질문 {question.questionNo}
                    </div>
                    <div style={{ width: '1150px', float: 'right', fontWeight: '700', fontSize: '18px', marginTop: '9px' }}>
                        {question.question}
                    </div>
                </div>
                 {/*  박스 상단바  */}

                 {/*  설문 결과 출력  */}
                <div style={{ height: '500px', border: 'solid #C4C4C4', borderWidth: '0 1px 1px 1px', borderRadius: '0 0 10 10', marginBottom: '58px' }}>
                    그래프 출력하기~~
                </div>
                 {/*  설문 결과 출력  */}
            </div>
        )
        );
    }

    const mapToQFComponent = (data, questionId) => {
        return data.map((question, index) => {
            for (let i = 0; i < data.length; i++) {
                if (questionId == question.questionNo) {
                    return <QuestionForm question={question} key={index} />
                }
            }
        } 
        );
    }

    const mapToComponent = data => {
        return data.map((question, index) => (<QuestionForm question={question} key={index} />) 
        );
    }

    function callback(_key) {
        console.log(`${_key}`)
        settabkey(_key);
        
    }

    function tagreturn(){
        if(tabkey==='1'){
            return ( <div style={{ height:'153px',fontSize: '36px', fontWeight: '700', color: '#418AFF',paddingTop:'40px' }}>
                        총 응답자 81명
                        <a style={{ float: 'right', fontSize: '18px', fontWeight: '400', color: '#000', color: '#000' }}>
                            <img src={downloadIcon} style={{ height: '13px', width: '14px' }} />
                                .csv로 다운로드
                        </a>
                    </div>)
        } else{
            return (
                <div style={{height:'153px',fontSize: '18px', fontWeight: '700', color: '#000',paddingTop:'40px' }}>
                    개별 응답
                    <div style={{ float: 'right', width: '1141px' }}>
                        <Pagination simple defaultCurrent={1} total={50} />
                    </div>
                </div>

            )
        }
    }


    const Demo = () => ( 
        <Tabs size='large' defaultActiveKey={tabkey} onChange={callback}>

            <TabPane tab={tabStyle('요약 보기')} key="1">

                <div style={{ marginTop: '86px' }}>
                    {mapToBoxComponent(questionData)}
                </div>

                <button style={{ float: 'right', backgroundColor: '#418AFF', border: '0px', borderRadius: '10px', height: '59px', width: '180px', color: '#fff', fontSize: '18px', fontWeight: '400', marginTop: '28px' }}>확인</button>
            </TabPane>

            <TabPane tab={tabStyle('개별 보기')} key="2">
                
                {/*  질문 항목들  */}
                <div style={{ marginTop: '84px', marginBottom: '57px' }}>
                    {mapToComponent(questionData)}
                </div>
                {/*  질문 항목들  */}
                
                <button style={{ float: 'right', backgroundColor: '#418AFF', border: '0px', borderRadius: '10px', height: '59px', width: '180px', color: '#fff', fontSize: '18px', fontWeight: '400' }}>확인</button>
            </TabPane>

        </Tabs>
    );

    return (
        <div>
            <div style={{ fontFamily: 'Noto Sans CJK KR', width: '1280px', marginLeft: '320px', marginRight: '320px' }}>

                <SurveyIntro preview={0} />
                <hr style={{ backgroundColor: '#C4C4C4', marginTop: '64px', height: '1px', border: '0' }} />

                <div id='here' >
                {tagreturn() }
                </div>
                <Demo />

            </div>
            </div>
    )
}

export default SurveyResult
