import React,{useState} from 'react';
import RegisterFormPresenter from './RegisterFormPresenter';
import { useDispatch } from 'react-redux';
import useFormInput from '../../hooks/useFormInput';
import allAction from '../../store/modules/actions/index';

const RegisterFormContainer = () =>{
    const dispatch = useDispatch();
    const {form, onChange} = useFormInput({'name':'',});
    const [age, setAge] = useState(20);
    const onClick = (e)=>{
      const data = {...form, age};
      e.preventDefault();
      dispatch(allAction.signUpRequest(data));
    }

    function handleChange(value) {
        setAge(2021-value+1);
    }

    return(
        <RegisterFormPresenter onChange={onChange} onClick={onClick} handleChange={handleChange}/>
    );
}

export default RegisterFormContainer;