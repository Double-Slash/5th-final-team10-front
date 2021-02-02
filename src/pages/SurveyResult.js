import React,{useState,useEffect} from 'react'
import { Tabs } from 'antd';
import SurveyIntro from '../common/SurveyIntro'
import ClosedQuestionForm from '../common/ClosedQuestionForm'
import { useDispatch, useSelector } from 'react-redux'
import ClosedGraphForm from '../common/ClosedGraphForm'
import downloadIcon from '../images/download.png'
import { Pagination } from 'antd';
import axios from 'axios';

function SurveyResult(props) {
    const { params } = props.match;
    const id = params.id
    console.log(id)
    const dispatch = useDispatch();
    //= useSelector(state => console.log(`kkk:${state.survey.results['data']}`),[])||[]
  let surveyResult ;
    useEffect(() => {
        axios.get(`http://52.79.182.214/survey/${id}/answer`,{headers:{'X-AUTH-TOKEN':'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3aGsiLCJyb2xlcyI6W10sImlhdCI6MTYxMTM1NzY3NCwiZXhwIjoxNjExMzY0ODc0fQ.wqGccCfvLN6FDIYeT_teuT7Vwl9tNdzVnHAAwrZJ468','Access-Control-Allow-Origin': '*',}}).then(response=>{
           console.log(response)
        })
       
    }, [])
  
console.log(`qwertt:${surveyResult}`)

    const { TabPane } = Tabs;
    const [tabkey, settabkey] = useState('1')
    const [CurrentPage, setCurrentPage] = useState(1)
    const closedSurvey = useSelector(state => state.survey.surveys,[])||[]

   
    const questionData = {
        "success": true,
        "questions": [
            {
                "id": 9,
                "questionCategoryId": 1,
                "questionText": "현재 무슨 직업?",
                "required": true,
                "existFile": false,
                "filename": "",
                "choices": [
                    "고등학생",
                    "대학생",
                    "직장인"
                ]
            },
            {
                "id": 10,
                "questionCategoryId": 1,
                "questionText": "주요 언어가 무엇?",
                "required": true,
                "existFile": false,
                "filename": "",
                "choices": [
                    "JAVA",
                    "C++",
                    "C",
                    "PYTHON",
                    "JAVASCRIPT",
                    "기타"
                ]
            },
            {
                "id": 11,
                "questionCategoryId": 5,
                "questionText": "주요 언어를 선호하는 이유는?",
                "required": false,
                "existFile": false,
                "filename": "",
                "choices": []
            },
            {
                "id": 12,
                "questionCategoryId": 1,
                "questionText": "외에 다룰 줄 아는 언어가 있으신가요?",
                "required": false,
                "existFile": false,
                "filename": "",
                "choices": [
                    "JAVA",
                    "C++",
                    "C",
                    "PYTHON",
                    "JAVASCRIPT",
                    "기타"
                ]
            }
        ],
        "summary": [
            {
                "answerChoice": {
                    "직장인": 1,
                    "대학생": 3
                }
            },
            {
                "answerChoice": {
                    "JAVA": 1,
                    "C++": 1,
                    "C": 1,
                    "PYTHON": 1
                }
            },
            [
                "제일 익숙",
                "걍",
                "제일 쉽다",
                "코딩테스트 공부에 적합한 것 같다"
            ],
            {
                "answerChoice": {
                    "JAVA": 1,
                    "C++": 3
                }
            }
        ],
    
        "ones": {
            "1": [
                "3",
                "2",
                "걍",
                "2"
            ],
            "2": [
                "2",
                "3",
                "제일 쉽다",
                "2"
            ],
            "3": [
                "2",
                "1",
                "제일 익숙",
                "2"
            ],
            "4": [
                "2",
                "4",
                "코딩테스트 공부에 적합한 것 같다",
                "1"
            ]
        }
    }

    const ResponseNum = Object.keys(questionData.ones).length

    function tabStyle(title) { 
        return (
            <div style={{ width: '600px', textAlign: 'center', fontSize: '18px', fontWeight: '700', color: '#2D59B8', marginTop: '20px', marginBottom: '20px' }}>
                {title}
            </div>) 
    }


    const mapToBoxComponent = data => {
        return data.questions.map((question, index) => (
            <div>
                 {/*  박스 상단바  */}
                <div style={{ height: '45px', backgroundColor: '#EFEFEF', border: 'solid #C4C4C4', borderWidth: '1px 1px 0 1px', borderRadius: '10px 10px 0 0' }}>
                    <div style={{ position: 'absolute', width: '100px', fontSize: '18px', fontWeight: '400', marginLeft: '27px', marginTop: '9px' }}>
                        질문 {index+1}
                    </div>
                    <div style={{ width: '1150px', float: 'right', fontWeight: '700', fontSize: '18px', marginTop: '9px' }}>
                        {question.questionText}
                    </div>
                </div>
                 {/*  박스 상단바  */}
                
                 {/*  설문 결과 출력  */}
                <div style={{ height: '500px', border: 'solid #C4C4C4', borderWidth: '0 1px 1px 1px', borderRadius: '0 0 10 10', marginBottom: '58px'}}>
                <div ><ClosedGraphForm categoryId={question.questionCategoryId} summary={data.summary[index]} index={index}/></div>
                </div>
                 {/*  설문 결과 출력  */}
            </div>
        )
        );
    }
    const onPageChange =page=>{
        console.log(page)
        setCurrentPage(page)
    }
    const mapToComponent = (questions, person) => {
        return questions.map((question, index) => (<ClosedQuestionForm question={question} index={index} ones={(questionData.ones[CurrentPage])[index]}  />) //question으로 질문 한 세트 전달됨.
        );
    }

    function callback(_key) { // 탭 변경했을 때
        settabkey(_key);
    }

    function tagreturn(){
        if(tabkey==='1'){
            return ( <div style={{ height:'153px',fontSize: '36px', fontWeight: '700', color: '#418AFF',paddingTop:'40px' }}>
                        총 응답자 {ResponseNum}명
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
                        <Pagination simple defaultCurrent={1} total={ResponseNum*10} onChange={onPageChange}/>
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
                    {mapToComponent(questionData.questions, questionData.ones)}
                </div>
                {/*  질문 항목들  */}
                
                <button style={{ float: 'right', backgroundColor: '#418AFF', border: '0px', borderRadius: '10px', height: '59px', width: '180px', color: '#fff', fontSize: '18px', fontWeight: '400' }}>확인</button>
            </TabPane>

        </Tabs>
    );

    return (
        <div>
            <div style={{ fontFamily: 'Noto Sans CJK KR', width: '1280px', marginLeft: '320px', marginRight: '320px' }}>

               {/* <SurveyIntro preview={0}/>*/ }
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
