import React from 'react';
import navbar_bckgr from "./img/navbar_bckgr.png";
import {Link} from "react-router-dom";
import {BASKET_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, USER_ROUTE} from "../../../utils/consts";
import logo from "./img/logo_ararat.svg";
import tel from "./img/tel_icon.png";
import login from "./img/login.png";
import basket from "./img/basket.png";
import {useSelector} from "react-redux";
import {selectUser} from "../../../store/reducers/userSlice";
import './AltNavbar.css'

const AltNavbar = () => {
    const user = useSelector(selectUser)
    return (
        <>
            <img className='navBckgrImg' src={navbar_bckgr} alt='...'/>
            <div className='navContainer'>
                <Link to={MAIN_ROUTE}>
                    <img className='navLogo' src={logo} alt='Кофейня Арарат'/>
                </Link>
                <div className='d-flex justify-content-evenly'>

                    <div className='navTelContainer'>
                        <img className='navTelIcon' src={tel} alt='Иконка телефона'/>
                        <p className='navTelText'>+ 374 99 99-99-99</p>
                    </div>
                    <Link className='navLinkLogIcon' to={user.isAuth ? USER_ROUTE : LOGIN_ROUTE}>
                        <img className='navLoginIcon' src={login} alt='Логин'/>
                    </Link>
                    <Link className='navLinkBasketIcon' to={user.isAuth ? BASKET_ROUTE : LOGIN_ROUTE}>
                        <img className='navBasketIcon' src={basket} alt='Корзина'/>
                    </Link>
                </div>
            </div>

        </>
    );
};

export default AltNavbar;