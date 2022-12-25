import React from 'react';
import './UserPanel.css'
import backgr from './img/bckgr.png'
import mockFotoImg from './img/mockFoto.png'
import separatorImg from './img/separator.svg'
import basket from './img/basket.svg'
import heart from './img/clarity_heart.svg'
import eye from './img/clarity_eye.svg'
import pers from './img/pers_data.svg'
import logoutIcon from './img/clarity_logout.svg'
import checklistIcon from './img/checklist.svg'
import admin_panel_btn from './img/admin_panel_btn.svg'
import {useDispatch, useSelector} from "react-redux";
import {selectUser, userLoggedOut} from "../../../store/reducers/userSlice";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, MAIN_ROUTE} from "../../../utils/consts";
import {useShoppingCart} from "../../../context/ShoppingCartContext";

const UserPanel = () => {
    const user = useSelector(selectUser)
    const history = useHistory()
    const dispatch = useDispatch()
    const {
        cartQuantity
    } = useShoppingCart()

    return (
        <>
            <div className='panelContainer'>
                <img className='panelBackgrImg' src={backgr} alt='...'/>
                <div className='panelLeftSide'>
                    <img className='panelLeftSideUserFoto' src={mockFotoImg} alt='Фото пользователя'/>
                    <p className='panelLeftSideUserName'>{user.data.email}</p>
                    <ul className='panelLeftSideListContainer'>
                        <li style={{position: "relative"}} onClick={() => history.push(BASKET_ROUTE)}
                            className='panelLeftSideListItem'>
                            <img src={basket} alt='Корзина' className='panelLeftSideListIcon'/>
                            <p className='panelLeftSideListText'>Корзина</p>
                            {cartQuantity > 0 &&
                                <div
                                    className='d-flex rounded-circle justify-content-center align-items-center'
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        right: '-85px',
                                        height: "20px",
                                        width: "20px",
                                        fontSize: ".65rem",
                                        backgroundColor: "#E29542"
                                    }}
                                >
                                    {cartQuantity}
                                </div>
                            }
                        </li>
                        <li>
                            <img src={separatorImg} alt='...'/>
                        </li>
                        <li className='panelLeftSideListItem'>
                            <img src={heart} alt='Избранное' className='panelLeftSideListIcon'/>
                            <p className='panelLeftSideListText'>Избранное</p>
                        </li>
                        <li className='panelLeftSideListItem'>
                            <img src={eye} alt='Просмотренное' className='panelLeftSideListIcon'/>
                            <p className='panelLeftSideListText'>Просмотренное</p>
                        </li>
                        <li className='panelLeftSideListItem'>
                            <img src={checklistIcon} alt='Сделанные заказы' className='panelLeftSideListIcon'/>
                            <p className='panelLeftSideListText'>История покупок</p>
                        </li>
                        <li className='panelLeftSideListItem'>
                            <img src={pers} alt='Личные данные' className='panelLeftSideListIcon'/>
                            <p className='panelLeftSideListText'>Личные данные</p>
                        </li>
                        <li>
                            <img src={separatorImg} alt='...'/>
                        </li>
                        <li onClick={() => history.push(ADMIN_ROUTE)} className='panelLeftSideListItem'>
                            <img src={admin_panel_btn} alt='Панель Администратора' className='panelLeftSideListIcon'/>
                            <p className='panelLeftSideListText'>Панель Администратора</p>
                        </li>
                        <li
                            onClick={() => {
                                dispatch(userLoggedOut())
                                history.push(MAIN_ROUTE)
                            }}
                            className='panelLeftSideListItem'>
                            <img src={logoutIcon} alt='Выйти' className='panelLeftSideListIcon'/>
                            <p className='panelLeftSideListText'>Выйти</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default UserPanel;