import React from 'react';
import './Footer.css'
import bckgrImg from './img/bckgr.png'
import logoImg from './img/footerlogo.svg'
import toStartBtn from './img/tostartbtn.svg'
import telImg from './img/tel.svg'
import fbImg from './img/fb.svg'
import instaImg from './img/inst.svg'
import viberImg from './img/viber.svg'
import waImg from './img/whatsapp.svg'
import copyrightImg from './img/copyright.svg'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <img className='footerBckgrImg' src={bckgrImg} alt='...'/>
            <div className='footerInfoContainer'>
                <img className='footerLogo' src={logoImg} alt='Логотип'/>
                <ul className='footerMenu'>
                    <li><a href='#about_us' className='footerLinks'>О нас</a>
                    </li>
                    <li><a href='#menu' className='footerLinks'>Наше меню</a>
                    </li>
                    <li><a href='#online' className='footerLinks'>Заказ
                        онлайн</a></li>
                    <li><a href='#cafes' className='footerLinks'>Наши
                        кофейни</a></li>
                </ul>
                <div className='footerInfoContactsContainer'>
                    <a className='footerInfoContactsToStartBtnLink'
                       href='#start'>
                        <img className='footerInfoContactsToStartBtn' src={toStartBtn} alt='В начало'/>
                    </a>
                    <div className='footerInfoContactsTelContainer'>
                        <img className='footerInfoContactsTelImg' src={telImg} alt='Телефон'/>
                        <p className='footerInfoContactsTelText'>+374 99 99 99 99</p>
                    </div>
                    <div className='footerInfoContactsSocialMediaContainer'>
                        <img src={fbImg} alt='Facebook' className='footerInfoContactsSocialMediaImg'/>
                        <img src={instaImg} alt='Instagram' className='footerInfoContactsSocialMediaImg'/>
                        <img src={viberImg} alt='Viber' className='footerInfoContactsSocialMediaImg'/>
                        <img src={waImg} alt='WhatsApp' className='footerInfoContactsSocialMediaImg'/>
                    </div>
                </div>
            </div>
            <img className='copyright' src={copyrightImg} alt='© Copyright 2022 DESIGNED BY ELENA PISKAREVA'/>
        </div>
    );
};

export default Footer;