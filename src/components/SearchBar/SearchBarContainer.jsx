import React,{useState} from 'react';
import SearchBarPresenter from './SearchBarPresenter';
import { useDispatch, useSelector } from "react-redux";
import allAction from '../../store/modules/actions/index';


const SearchBarContainer = (props) => {
  const keyword = useSelector(state => state.surveys.keyword);
  const [ value, setValue ] = useState(keyword);
  const dispatch = useDispatch();

  const onChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(allAction.searchSurvey(value));
  }
  const onEnter = (e) =>{
    if (e.key === 'Enter') {
      dispatch(allAction.searchSurvey(value));
      //Link to
    }
  }
  //console.log(keyword);
   
    return (
      <SearchBarPresenter
        main = {props.main}
        onChange={onChange} 
        onSubmit={onSubmit} 
        onEnter={onEnter}
      />
    );
  };

  export default SearchBarContainer;
