import React from 'react';
import classes from './SortsOfCoffeeBlock.module.css'
import backgrImg from './img/bckgr.png'

const SortsOfCoffeeBlock = () => {
    return (
        <div className={classes.sortsOfCoffeeBlockContainer}>
            <img className={classes.sortsOfCoffeeBlockBckgrImg} src={backgrImg} alt='...'/>
            <h2 className={classes.sortsOfCoffeeBlockHeader}>Наши сорта кофе</h2>
            <ul className={classes.sortsOfCoffeeBlockDescContainer}>
                <li className={classes.sortsOfCoffeeBlockDescCard}>
                    <h3 className={classes.sortsOfCoffeeBlockDescCardHead}>
                        Арабика 100% <br/> Гватемала
                    </h3>
                    <p className={classes.sortsOfCoffeeBlockDescCardBody}>
                        Сочный, ароматный кофе <br/> с динамичным вкусом
                    </p>
                </li>
                <li className={classes.sortsOfCoffeeBlockDescCard}>
                    <h3 className={classes.sortsOfCoffeeBlockDescCardHead}>
                        Арабика 70% Робуста 30% <br/> Бразилия и Индия
                    </h3>
                    <p className={classes.sortsOfCoffeeBlockDescCardBody}>
                        Сочетание сладости арабики <br/> с терпким вкусом робусты
                    </p>
                </li>
                <li className={classes.sortsOfCoffeeBlockDescCard}>
                    <h3 className={classes.sortsOfCoffeeBlockDescCardHead}>
                        Арабика 100% <br/> Эфиопия
                    </h3>
                    <p className={classes.sortsOfCoffeeBlockDescCardBody}>
                        Сладкий аромат, <br/> особенное послевкусие
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default SortsOfCoffeeBlock;