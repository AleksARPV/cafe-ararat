import React from 'react';
import classes from './Navbar.module.css'
import {Link} from "react-router-dom";
import logo from './img/logo_ararat.svg'
import tel from './img/tel_icon.png'
import login from './img/login.png'
import basket from './img/basket.png'
import {BASKET_ROUTE, LOGIN_ROUTE, USER_ROUTE} from "../../../utils/consts";
import {useSelector} from "react-redux";
import {selectUser} from "../../../store/reducers/userSlice";

const Navbar = () => {
    const user = useSelector(selectUser)
    return (
        <div id='start' className={classes.navContainer}>
            <img className={classes.navLogo} src={logo} alt='Кофейня Арарат'/>
            <ul className={classes.navMenu}>
                <li><a href='#about_us' className={classes.navLinks}>О нас</a>
                </li>
                <li><a href='#menu' className={classes.navLinks}>Наше меню</a>
                </li>
                <li><a href='#online' className={classes.navLinks}>Заказ
                    онлайн</a></li>
                <li><a href='#cafes' className={classes.navLinks}>Наши кофейни</a>
                </li>
            </ul>
            <div className={classes.navTelContainer}>
                <img className={classes.navTelIcon} src={tel} alt='Иконка телефона'/>
                <p className={classes.navTelText}>+ 374 99 99-99-99</p>
            </div>
            <Link className={classes.navLinkLogIcon} to={user.isAuth ? USER_ROUTE : LOGIN_ROUTE}>
                <img className={classes.navLoginIcon} src={login} alt='Логин'/>
            </Link>
            <Link className={classes.navLinkBasketIcon} to={user.isAuth ? BASKET_ROUTE : LOGIN_ROUTE}>
                <img className={classes.navBasketIcon} src={basket} alt='Корзина'/>
            </Link>
        </div>
    );
};

export default Navbar;