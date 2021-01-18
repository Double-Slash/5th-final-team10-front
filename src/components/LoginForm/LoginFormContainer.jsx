import React,{useEffect,useCallback} from 'react';
import LoginFormPresenter from './LoginFormPresenter';
import { useDispatch, useSelector } from 'react-redux';
import useFormInput from '../../hooks/useFormInput';
import allAction from '../../store/modules/actions/index';
import { withRouter } from 'react-router-dom';


const LoginFormContainer = ({history }) =>{
    const dispatch = useDispatch();

    const {form, onChange} = useFormInput({});
    
    const onClick = (e)=>{
      e.preventDefault();
      dispatch(allAction.signInRequest(form));
    }

    const isLogin = useSelector(state=>state.user.isLogin);

    useEffect(() => {
      if (isLogin) {
        history.push('/');
      }
    }, [isLogin, dispatch]);

    return(
        <LoginFormPresenter onChange={onChange} onClick={onClick}/>
    );
}

export default withRouter(LoginFormContainer);