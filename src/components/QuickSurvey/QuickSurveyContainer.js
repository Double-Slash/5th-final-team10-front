import React,{useState, useEffect} from 'react'
import QuickSurveyPresenter from './QuickSurveyPresenter';
import { useDispatch, useSelector } from 'react-redux';
import allAction from '../../store/modules/actions/index';


export default function QuickSurveyContainer() {
 const {surveys,category} = useSelector(({surveys}) => ({
 surveys : surveys.surveys, category : surveys.category}),);
 const dispatch = useDispatch();

 useEffect(()=>{
   dispatch(allAction.loadSurvey());
 },[]);
 
 return(
        <QuickSurveyPresenter
            surveys = {surveys}
            category = {category}
       />
);
}
