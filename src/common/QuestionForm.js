import React,{useState} from 'react';
import { Radio } from 'antd';
import { Checkbox } from 'antd';
import { Menu, Dropdown, Button, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { DatePicker, Space } from 'antd';
import { TimePicker } from 'antd';

/**
 * 
 * 질문 폼 -> 쪼개기  
 * by : 우혜경
 * 
 **/ 

function QuestionForm(props) {

    const [value, setvalue] = useState(1) // 라디오 버튼 선택 값
    const [isBtnDisable, setisBtnDisable] = useState(0) // 이 값을 ResponseSurvey 에 어떻게 전달해줄것인지?(버튼 활성화)

    const radioStyle = { //라디오 버튼 스타일
        display: 'block',
        height: '33px',
        lineHeight: '30px',
      };

    const { TextArea } = Input;
 

   function onCheckChange(checkedValues){ // 체크 박스 선택 감지
        console.log('checked = ', checkedValues);
      }
   

    function onRaioChange (e){ // 라디오 버튼 선택 감지
        console.log('radio checked', e.target.value);
        setvalue( e.target.value);
      };

      function onDateChange(date, dateString) { // 날짜 선택 감지
        console.log(date, dateString);
      }

      function onTimeChange(time, timeString) { // 시간 선택 감지
        console.log(time, timeString);
      }

    function createCheckBtn() { // 체크 박스 생성
        var plainOptions = [];
        for (let index = 0; index < props.question.example.length; index++) {
            plainOptions.push(props.question.example[index])
        }
        return (<div><Checkbox.Group options={plainOptions} defaultValue={props.question.example[0]} onChange={onCheckChange} />
            <br />
            <br /></div>);
    } 
    function createRadioBtn() { // 라디오 버튼 생성
        var radioRows = [];
        for (let index = 0; index < props.question.example.length; index++) {
            radioRows.push(<Radio style={radioStyle} value={index+1}>{props.question.example[index]}</Radio>)
        }
        return (<div><Radio.Group onChange={onRaioChange} value={value}>{radioRows}</Radio.Group></div>);
    }

    function createDropdown() { // 드롭다운 아이템 생성
        var items = [];
        var menu;
        for (let index = 0; index < props.question.example.length; index++) {
            items.push( <Menu.Item key={index+1} > {props.question.example[index]}</Menu.Item>)
        }
        menu=<Menu onClick={handleMenuClick}>{items}</Menu>
        return (<div><Dropdown overlay={menu}><Button > {props.question.example[0]} <DownOutlined /></Button></Dropdown></div>);
    }

    function createDatePicker(){ 
        return (<div><Space id='startDate' direction="vertical"><DatePicker placeholder='yyyy.mm.dd' onChange={onDateChange}/></Space>
         <span style={{marginLeft:'10px', marginRight:'10px', fontWeight:'400', fontSize:'18px'}}>~</span> 
         <Space id='endDate' direction="vertical"><DatePicker placeholder='yyyy.mm.dd' onChange={onDateChange}/></Space></div>)
    }

    function switchQuestionType(){ // question id에 따른 태그 반환
        switch (props.question.questionId) {
            case 1:
                return createRadioBtn();
            case 2:
                return createCheckBtn();
            case 3:
                return createDropdown();
            case 4:
                {
                   /* if(1/*text 채워졌으면){
                        setisBtnDisable(1)
                    }*/
                return <Input placeholder="답변을 입력해주세요." />
                }
            case 5:
                {
                   /* if(1/*text 채워졌으면){
                        setisBtnDisable(1)
                    }*/
                return <TextArea rows={4} />
                }
            case 6:
                {
                    /*if(1/*날짜 선택 했으면){
                        setisBtnDisable(1)
                    }*/
                return createDatePicker();
                }
            case 7:
                {
                   /* if(1/*시간 선택 했으면){
                        setisBtnDisable(1)
                    }*/
                return <TimePicker use12Hours format="h:mm a" onChange={onTimeChange} />
                }
            default:
                return <div>I Don't Know</div>
                break;
        }
    }

    function handleButtonClick(e) {
        message.info('Click on left button.');
        console.log('click left button', e);
      }
      
      function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
      }

      function isEssential(){
        if(props.question.essential==1){return (<span style={{color:'#418AFF'}}> &nbsp;*</span>)}
      }
      

    return ( 
        <div style={{marginBottom:'116px',fontFamily:'Noto Sans CJK KR'}}>

            <div style={{width:'1000px'}}>
                <div style={{position:'absolute',fontWeight:'400',fontSize:'18px',marginRight:'30px'}}>질문 {props.question.questionNo}
                </div>
                <div style={{marginLeft:'100px'}}>
                    <span style={{fontWeight:'700', fontSize:'18px'}}>{props.question.question}{isEssential()}</span>
                    <div style={{marginTop:'20px'}}>
                    {switchQuestionType()}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default QuestionForm
