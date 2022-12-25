import React from 'react';
import classes from './OnlineBlock.module.css'
import bckgrImg from './img/bckgr.png'

const OnlineBlock = () => {
    return (
        <div className={classes.onlineBlockContainer}>
            <img className={classes.onlineBlockBckgrImg} src={bckgrImg} alt='...'/>
            <h2 id='online' className={classes.onlineBlockHead}>
                Заказ онлайн
            </h2>
            <p className={classes.onlineBlockText}>
                Вы можете заказать онлайн свой любимый напиток и&nbsp;освободить Ваше время, теперь Вам не нужно стоять
                в&nbsp;очереди. Закажите свой любый кофе и заберите в&nbsp;указанное Вами время.
            </p>
            <p className={classes.onlineBlockText}>
                В нашей сети действует бонусная система, никакой регистрации, только номер телефона. Копите бонусы,
                которые Вы сможете потратить на кофе или&nbsp;на&nbsp;благотворительность для поддержки Арцаха.
            </p>
            <p className={classes.onlineBlockTextMotto}>
                Всегда горячий кофе и свежая выпечка!
            </p>
        </div>
    );
};

export default OnlineBlock;