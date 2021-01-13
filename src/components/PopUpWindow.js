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
                <div className="modal_content">

                    <span className="close" onClick={props.toggle}>
                        &times;
                    </span>

                    <div className="popUp_text" >
                        해당 설문조사 결과를 보기 위해선
                        <span style={{ color: '#418AFF' }}>
                                &nbsp;{Point}P&nbsp;
                        </span>
                        가 필요합니다. <p /> 포인트를 사용하시겠습니까? <p/>
                        <span style={{color:'#898989', fontSize:'0.18rem'}}>
                            ( 잔여 포인트 : {BalancePoint}P )
                        </span>
                    </div>

                    <div className="align_center">
                        <button className="ok_btn" onClick={okClick}>
                            <span style={{fontFamily:'Noto Sans CJK KR', fontWeight:'bold',color:'white'}}>확인</span>
                        </button>
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
