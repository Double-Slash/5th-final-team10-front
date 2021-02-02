import React, { useState } from 'react'
import { Pie } from 'ant-design-pro/lib/Charts';
import ApexCharts from 'apexcharts'
import ReactApexChart from "react-apexcharts";
import { Input } from 'antd';






function ClosedGraphForm(props) {

    const answerChoice = props.summary.answerChoice; //{"직장인":1, "대학생":3} 들어있음.
    let JsonKeyArr;
    let JsonValueArr;
    let NumOfKey;
    const { TextArea } = Input;
    if (typeof answerChoice !== 'undefined') { JsonKeyArr = Object.keys(answerChoice); } //{"직장인", "대학생"} 들어있음.
    if (typeof JsonKeyArr !== 'undefined') { NumOfKey = JsonKeyArr.length; }
  //  let PieData; // [ { x: '직장인', y: 1, },{ x: '대학생', y: 3, }] 이렇게 데이터 들어감.


    /*const makePieData = ()=>{ //보기 두개 일때(체크 버튼, 라디오 버튼의 경우)
       
        PieData = [];
        for(let index = 0; index <NumOfKey; index++){
            let answerJson = {};
            answerJson.x=JsonKeyArr[index]
            answerJson.y= answerChoice[JsonKeyArr[index]]
            PieData.push(answerJson)
        }
        console.log(PieData)
}*/

    const makeGraphData = () => { //보기 두개 일때(체크 버튼, 라디오 버튼의 경우)

        JsonValueArr = [];
        for (let index = 0; index < NumOfKey; index++) {
            JsonValueArr.push(answerChoice[JsonKeyArr[index]])
        }
        console.log(`arr:${typeof JsonValueArr}`)
    }

    const returnInput = ()=>{
        props.summary.map((data,index)=>{console.log(`heehee:${data}`)})
       // return <Input placeholder="답변을 입력해주세요." value={Value} disabled />
    }
    const returnTextArea = ()=>{
        return props.summary.map((data,index)=>(<div style={{ width: '1000px', marginBottom:'20px', marginLeft:'150px',marginTop:'30px' }}><TextArea rows={3} value={data} disabled /></div>))

    }
    const returnBarGraph = () => {
        makeGraphData();
        //var chart = new ApexCharts(document.querySelector("#chart"), barOptions);
        return <div style={{ width: '900px', marginLeft:'150px', marginTop:'100px' }}><ReactApexChart
            options={{
                chart: {
                    type: 'bar',
                    height: 350,
                    width: 50
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: '50%'
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: JsonKeyArr
                }
            }}
            series={[{
                name: '응답 수',
                data: JsonValueArr
            }]}
            type="bar"
            height={350} /></div>



    }
    const returnPieGraph = () => {
        makeGraphData();
        return <div style={{ width: '500px', marginLeft:'350px', marginTop:'100px' }}><ReactApexChart
            options={{
                chart: {
                    type: 'donut',
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 500
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                labels: JsonKeyArr
            }}
            series={JsonValueArr
            } type="donut" /></div>


        /*return (<Pie
         colors={['#2D59B8', '#418AFF']}
         lineWidth={0}
         innerRadius={10}
         hasLegend
         total={() => (
           <span
            
           />
         )}
         data={PieData}
         valueFormat={val => <span dangerouslySetInnerHTML={{ __html: (val+'명') }} />}
         height={294}
       />)*/
    }


    /*       
   var barOptions = {
       series: [{
       data: JsonValueArr
     }],
       chart: {
       type: 'bar',
       height: 350
     },
     plotOptions: {
       bar: {
         horizontal: true,
       }
     },
     dataLabels: {
       enabled: false
     },
     xaxis: {
       categories: JsonKeyArr
     }
     };*/


    function switchQuestionType() { // question id에 따른 태그 반환
        switch (props.categoryId) {
            case 1:
                if (NumOfKey <= 2) { return returnPieGraph(); }
                else { return returnBarGraph(); }
            case 2:
                if (NumOfKey <= 2) { return returnPieGraph(); }
                else { return returnBarGraph(); }
            case 3:
                if (NumOfKey <= 2) { return returnPieGraph(); }
                else { return returnBarGraph(); }
            case 4:
                return returnInput();
            case 5:
                return returnTextArea();


            default:
                break;
        }
    }



    return (
        <div >
            {switchQuestionType()}
        </div>
    )
}

export default ClosedGraphForm
