import React, { useState, useEffect } from 'react'

function PopUpWindow(props) {

    const [Point, setPoint] = useState(0)
    const [BalancePoint, setBalancePoint] = useState(0)

    const okClick = ()=>{
        props.toggle()

       /* fetch()
        .then(response=>{
            // 포인트 차감해서 서버로 보내기
        })*/
    }

   /* useEffect(() => { //DOM이 로드되면 할 일(포인트 불러올 때 사용)

      
        fetch()
            .then(response => {
                setPoint() //서버에서 포인트 정보 가져오기
            })

    }, [])*/

    return (
        <div className="modal">
            <div className="align_center">
                <div className="modal_content" style={{fontFamily:'Noto Sans CJK KR'}}>

                    <span className="close" onClick={props.toggle}>
                        &times;
                    </span>
                    <div style={{marginTop:'112px', marginLeft: '91px', marginRight: '91px'}}>
                        <div className="popUp_text" >
                            해당 설문조사 결과를 보기 위해선
                            <span style={{ color: '#418AFF' }}>
                                    &nbsp;{Point}P
                            </span>
                            가 필요합니다.포인트를 사용하시겠습니까?
                        </div>
                         
                        <div style={{color:'#898989', fontWeight:'400',fontSize:'14px', textAlign:'center', marginTop:'18px'}}>( 현재 포인트 : {BalancePoint}P )</div>
                        <div style={{color:'#898989', fontWeight:'400',fontSize:'14px', textAlign:'center', marginTop:'10px'}}>( 잔여 포인트 : {BalancePoint}P )</div>
                    </div>
                    <div className="align_center">
                        <button className="ok_btn" onClick={okClick}>
                            <span style={{fontWeight:'400',fontSize:'18px',color:'white'}}>확인</span>
                        </button>
                    </div>
                    <div style={{textAlign:'center', fontWeight:'14px', color:'#418AFF', marginTop:'20px'}}>
                        <a>포인트가 모자르다면? 설문조사 참여하고 포인트 받기</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUpWindow





/*class PopUpWindow extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {

        }
    }
    handleClick() {
        this.props.toggle();
    }
    render() {
        return (

        );
    }
}*/
