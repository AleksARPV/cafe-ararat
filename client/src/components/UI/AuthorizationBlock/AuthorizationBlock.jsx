import React, {useState} from 'react';
import backgroundImg from './img/bckgr.png'
import './AuthorizationBlock.css'
import {Form} from "react-bootstrap";
import CustomInput from "../CustomInput/CustomInput";
import checkboxCheckedImg from "./img/checkbox_checked.png";
import checkboxUncheckedImg from "./img/checkbox_unchecked.png";
import MainButton from "../MainButton/MainButton";
import {Link, useHistory, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, USER_ROUTE} from "../../../utils/consts";
import {login, registration} from "../../../http/userApi";
import {useDispatch, useSelector} from "react-redux";
import {authRequested, authRequestSuccess, selectUser, userRequestFailed} from "../../../store/reducers/userSlice";


const AuthorizationBlock = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const [checkbox, setCheckbox] = useState('false')
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const history = useHistory()

    const emailHandleChange = (target) => {
        setEmail(target.value)
    };

    const passwordHandleChange = (target) => {
        setPassword(target.value);
    };

    const authHandler = async (e) => {
        e.preventDefault()
        try {
            dispatch(authRequested())
            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            dispatch(authRequestSuccess(data))
            history.push(USER_ROUTE)
        } catch (e) {
            const {message} = e.response.data.message
            dispatch(userRequestFailed(message))
            alert(e.response.data.message)
        }
    }

    const checkboxHandler = () => {
        setCheckbox(prevState => !prevState)
    }

    return (
        <div className='authContainer'>
            <img className='authBackgrImg' src={backgroundImg} alt='...'/>
            <Form className='authFormContainer'>
                <h2 className='authFormHeader'>{isLogin ? 'Вход в личный кабинет' : 'Регистрация'}</h2>
                <CustomInput
                    placeholder='Электронная почта'
                    type='text'
                    value={email}
                    name='email'
                    onChange={emailHandleChange}
                />
                <CustomInput
                    placeholder='Пароль'
                    type='password'
                    name='password'
                    value={password}
                    onChange={passwordHandleChange}

                />
                <div className='d-flex flex-row mb-2'>
                    <p className='authToLoginText'>{isLogin ? 'Нет аккаунта?' : 'Есть аккаунт?'}</p>
                    <Link to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE}
                          className='authToLogin'>
                        {isLogin ? 'Зарегистрироваться' : 'Войти'}
                    </Link>
                </div>
                {!isLogin && <div className='authBlockFAQDisclaimerContainer'>
                    <img onClick={checkboxHandler} className='authBlockFAQDisclaimerImg'
                         src={checkbox ? checkboxCheckedImg : checkboxUncheckedImg} alt='...'/>
                    <p className='authBlockFAQDisclaimerText'>
                        Нажимая на кнопку, Вы соглашаетесь с &nbsp;
                        <a className='authBlockFAQDisclaimerLink'>Политикой обработки <br/> персональных данных</a>
                    </p>
                </div>}
                <MainButton
                    type='submit'
                    onClick={authHandler}
                >
                    {isLogin ? 'Войти' : 'Зарегистрироваться'}
                </MainButton>
            </Form>
        </div>
    );
};

export default AuthorizationBlock;