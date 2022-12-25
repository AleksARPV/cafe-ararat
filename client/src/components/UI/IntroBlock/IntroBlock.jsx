import React from 'react';
import './IntroBlock.css'
import Navbar from "../Navbar/Navbar";
import araratBckgr from "./img/ararat_bckgr.png";
import MainButton from "../MainButton/MainButton";
import cupOfCoffeeImg from "./img/cup_of_coffee_main.png";

const IntroBlock = () => {
    return (
        <div className='introBlockContainer'>
            <Navbar/>
            <img className='introBlockImgBckgr' src={araratBckgr} alt='Гора Арарат'/>
            <h1 className='introBlockH1'>Заряжен энергией. Вдохновлен Араратом </h1>
            <p className='introBlockDescription'>
                Посетите кофейни «Арарат», где можно попробовать насыщенный вкус кофе благодаря особой технологии
                обжарки кофейных зерен, вдохновленной самими горами.
            </p>
            <div className='introBlockButton'><a href='#menu'><MainButton>Заказать</MainButton></a></div>
            <img className='introBlockCupOfCoffee' src={cupOfCoffeeImg} alt='Кружка кофе'/>
        </div>
    );
};

export default IntroBlock;