import React, {useEffect} from 'react';
import SurveyListPresenter from './SurveyListPresenter';
import { useDispatch, useSelector } from 'react-redux';
import allAction from '../../store/modules/actions/index';

const MySurveyListContainer = () =>{
    const {list} = useSelector(({myInfo}) => ({list : myInfo.surveyList}));
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(allAction.getMyInfo());
    },[dispatch]);

    return(
        <>
            <p>나의 현재 진행중인 설문조사</p>
            <SurveyListPresenter list={list.progress} type={true} />
            <br/>
            <p>나의 종료된 설문조사</p>
            <SurveyListPresenter list={list.end} type={false}/>
        </>
    );

}
export default MySurveyListContainer;
        