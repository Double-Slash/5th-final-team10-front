import React, { useState, useEffect } from 'react'

function PointFilter() {

    const [point, setpoint] = useState(0)

    useEffect(() => {
       const slideValue = document.querySelector("span");
       const inputSlider = document.querySelector("input");
       inputSlider.oninput = (()=>{
           let value = inputSlider.value;
           setpoint(value);
           slideValue.textContent = value;
           slideValue.style.left = (value/1.6)+"%";
           slideValue.classList.add("show");
           /*fetch() // 포인트에 따른 설문조사 정보 받기
           .then(response => response.json())
           .then(response => {
               
           })*/

           inputSlider.style.background = 'linear-gradient(to right, #418AFF 0%, #418AFF '+ value/1.6 +'%, #C4C4C4 ' + value/1.55555555 + '%, #C4C4C4 150%)'
       });
       inputSlider.onblur=(()=>{
        slideValue.classList.remove("show");
       })
    })
   
    return (
        <div class="align_center" style={{fontFamily:'Noto Sans CJK KR', marginTop:'100px'}}>
            <div class="range">
                <div class="sliderValue">
                    <span>0</span>
                </div>

                <div class="field">
                        <div class="value left">0P</div>
                        <input type="range" min="0" max="150" steps="1" style={{background:'linear-gradient(to right, #418AFF 0%, #418AFF 30%, #C4C4C4 35%, #C4C4C4 0%'}}/>
                        <div class="value right">150P</div>
                </div>
            </div>
       </div>
    )
}

export default PointFilter
