import React from 'react';
import classes from "./WhyUsBlock.module.css";
import whyUsCupOfCoffeeImg from "./img/cup_of_coffee.svg";
import whyUsBeandsImg from "./img/beans.svg";
import whyUsHandsImg from "./img/hands.svg";
import circlesImg from './img/bckgr_circles.svg'

const WhyUsBlock = () => {
    return (
        <div className={classes.whyUsBlockContainer}>
            <img className={classes.whyUsBlockCirclesBckgrImg} src={circlesImg} alt='...'/>
            <h3 className={classes.whyUsBlockH3}>Почему выбирают нас?</h3>
            <ul className={classes.whyUsBlockList}>
                <li className={classes.whyUsBlockListContainer}>
                    <div className={classes.whyUsBlockListContainerHead}>
                        <img className={classes.whyUsBlockListContainerHeadImg} src={whyUsCupOfCoffeeImg}
                             alt='Кружка кофе'/>
                        <h4 className={classes.whyUsBlockListContainerHeader}>
                            Авторский <br/> рецепт кофе
                        </h4>
                    </div>
                    <p className={classes.whyUsBlockListContainerText}>
                        Каждый бариста нашей кофейни <br/> постоянно проходит курсы <br/> по повышению квалификации,
                        что даёт нам возможность создавать новые сочетания кофейных зерен и&nbsp;вкусов.
                    </p>
                </li>
                <li className={classes.whyUsBlockListContainer}>
                    <div className={classes.whyUsBlockListContainerHead}>
                        <img className={classes.whyUsBlockListContainerHeadImg} src={whyUsBeandsImg}
                             alt='Зерна кофе'/>
                        <h4 className={classes.whyUsBlockListContainerHeader}>
                            Надежные <br/> закупки
                        </h4>
                    </div>
                    <p className={classes.whyUsBlockListContainerText}>
                        Мы работаем только <br/> с проверенными поставщиками, <br/> которые имеют за&nbsp;плечами
                        <br/>многолетний опыт и&nbsp;безупречную репутацию.
                    </p>
                </li>
                <li className={classes.whyUsBlockListContainer}>
                    <div className={classes.whyUsBlockListContainerHead}>
                        <img className={classes.whyUsBlockListContainerHeadImg} src={whyUsHandsImg}
                             alt='Рукопожатие'/>
                        <h4 className={classes.whyUsBlockListContainerHeader}>
                            Дни поддержки <br/> Арцаха
                        </h4>
                    </div>
                    <p className={classes.whyUsBlockListContainerText}>
                        «Дни Арцаха» — каждое 15-е число месяца мы отправляем <br/> 30% от стоимости
                        приобретенного Вами кофе в благотворительные фонды поддержки исторической
                        родины всех армян&nbsp;—&nbsp;Арцаха.
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default WhyUsBlock;