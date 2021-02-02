import React,{useState, useEffect} from 'react';
import { Radio } from 'antd';
import { Checkbox } from 'antd';
import { Menu, Dropdown, Button, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { DatePicker, Space } from 'antd';
import { TimePicker } from 'antd';

function ClosedQuestionForm(props) {

    const [Value, setValue] = useState(props.ones) // 사용자 응답 값
    const [isBtnDisable, setisBtnDisable] = useState(0) // 이 값을 ResponseSurvey 에 어떻게 전달해줄것인지?(버튼 활성화)
    
    const question = props.question
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
        setValue(e.target.value);
      };

      function onDateChange(date, dateString) { // 날짜 선택 감지
        console.log(date, dateString);
      }

      function onTimeChange(time, timeString) { // 시간 선택 감지
        console.log(time, timeString);
      }

    function createCheckBtn() { // 체크 박스 생성
        var plainOptions = [];
        for (let index = 0; index < question.choices.length; index++) {
            plainOptions.push(question.choices[index])
        }
        return (<div><Checkbox.Group options={plainOptions} defaultValue={question.example[0]} onChange={onCheckChange} />
            <br />
            <br /></div>);
    } 
    function isRadioDisabled(d){

        let RadioDisabled = true;

        if(d===Value){
            RadioDisabled = false
        }
        return RadioDisabled;
    }
    function createRadioBtn() { // 라디오 버튼 생성
        var radioRows = [];
        for (let index = 0; index < question.choices.length; index++) {
            radioRows.push(<Radio style={radioStyle} value={`${index+1}`} disabled={isRadioDisabled(`${index+1}`)}>{question.choices[index]}</Radio>)
        }
        return (<div><Radio.Group onChange={onRaioChange} value={Value}>{radioRows}</Radio.Group></div>);
    }

    function createDropdown() { // 드롭다운 아이템 생성
        var items = [];
        var menu;
        for (let index = 0; index < question.choices.length; index++) {
            items.push( <Menu.Item key={index+1} > {question.choices[index]}</Menu.Item>)
        }
        menu=<Menu onClick={handleMenuClick}>{items}</Menu>
        return (<div><Dropdown overlay={menu}><Button > {question.choices[0]} <DownOutlined /></Button></Dropdown></div>);
    }

    function createDatePicker(){ 
        return (<div><Space id='startDate' direction="vertical"><DatePicker placeholder='yyyy.mm.dd' onChange={onDateChange}/></Space>
         <span style={{marginLeft:'10px', marginRight:'10px', fontWeight:'400', fontSize:'18px'}}>~</span> 
         <Space id='endDate' direction="vertical"><DatePicker placeholder='yyyy.mm.dd' onChange={onDateChange}/></Space></div>)
    }

    function switchQuestionType(){ // question id에 따른 태그 반환
        switch (question.questionCategoryId) {
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
                return <Input placeholder="답변을 입력해주세요." value={Value} disabled/>
                }
            case 5:
                {
                   /* if(1/*text 채워졌으면){
                        setisBtnDisable(1)
                    }*/
                return <TextArea rows={3} value={Value} disabled/>
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
        if(question.required==1){return (<span style={{color:'#418AFF'}}> &nbsp;*</span>)}
      }

    return ( 
        <div style={{marginBottom:'116px',fontFamily:'Noto Sans CJK KR'}}>

            <div style={{width:'1000px'}}>
                <div style={{position:'absolute',fontWeight:'400',fontSize:'18px',marginRight:'30px'}}>질문 {props.index+1}
                </div>
                <div style={{marginLeft:'100px'}}>
                    <span style={{fontWeight:'700', fontSize:'18px'}}>{question.questionText}{isEssential()}</span>
                    <div style={{marginTop:'20px'}}>
                    {switchQuestionType()}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ClosedQuestionForm
