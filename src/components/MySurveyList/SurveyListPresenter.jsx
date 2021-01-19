import React from 'react';
import styled from 'styled-components';


const SurveyListPresenter = ({list,type}) =>{
    const thName = type ? '현재 응답자 수' : '최종 응답자 수';
    return(
        <TableContainer>
            <thead className="head">
                <tr> <th>No.</th> <th>설문조사명</th> <th>설문조사 기간</th> <th>{thName}</th> <th> </th></tr>
            </thead>
            <tbody>
                {list.map((l)=>( 
                        <tr><td>{l.id}</td><td>{l.name}</td><td>{l.startDate} - {l.endDate}</td><td>{l.responseCount}</td><td>진행보기</td></tr> 
                ))}
             </tbody>
            
        </TableContainer>
    );
}

export default SurveyListPresenter;

const TableContainer = styled.table`
    width: 1280px;
    height: 140px;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 10px 10px 10px 10px;
    border-collapse: separate;
    border-spacing: 0;

    th{
        line-height:40px;
        text-align:left;
        padding: 13px;
        padding-left : 30px;
        
    }
    td{
        line-height:40px;
        padding-left : 30px;
    }
    thead tr{
        color: rgba(0, 0, 0, 0.85);
        font-weight: bold;
        height: 47px;
        background: #EFEFEF;
    }
`;