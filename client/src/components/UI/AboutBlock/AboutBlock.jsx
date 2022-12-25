import React from 'react';
import bckgrImg from './img/AboutBlockBckgrImg.png'
import classes from './AboutBlock.module.css'
import heartImg from './img/heart.svg'
import circlesImg from './img/circles_bckgr.svg'

const AboutBlock = () => {
    return (
        <div className={classes.aboutBlockContainer}>
            <img className={classes.aboutBlockCirclesBckgrImg} src={circlesImg} alt='...'/>
            <img className={classes.aboutBlockContainerBckgrImg} src={bckgrImg} alt='Чашка кофе на черном фоне'/>
            <h2 id='about_us' className={classes.aboutBlockMainHeader}>О нас</h2>
            <p className={classes.aboutBlockMainHeaderDesc}>
                Кофейня «Арарат» — сеть кофеен премиального качества.
                Для нас важно безупречное качество и&nbsp;репутация наших кофеен.
            </p>
            <div className={classes.aboutBlockMissionContainer}>
                <h3 className={classes.aboutBlockMissionContainerHeader}>
                    Наша миссия
                </h3>
                <img className={classes.aboutBlockMissionContainerImg} src={heartImg} alt='Сердце'/>
            </div>
            <p className={classes.aboutBlockMissionText}>
                Создать уникальную сеть кофеен, которая всегда будет находиться на&nbsp;одном пути с
                Вашим идеальным путешествием. <br/> Наша&nbsp;цель&nbsp;—&nbsp;делиться кофейной
                культурой с&nbsp;каждым, кто жаждет новых впечатлений.
            </p>
            <p className={classes.aboutBlockMissionText}>
                Каждым глотком кофе зарядим Вас энергией на&nbsp;покорение Арарата.
            </p>
        </div>
    );
};

export default AboutBlock;