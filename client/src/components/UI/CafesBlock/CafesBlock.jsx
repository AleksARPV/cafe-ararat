import React, {useState} from 'react';
import './CafesBlock.css'
import bckgrImg from './img/bckgr.png'
import telImg from './img/tel.svg'
import markerImg from './img/marker.svg'
import envelopImg from './img/envelop.svg'
import CustomInput from "../CustomInput/CustomInput";
import checkboxUncheckedImg from './img/checkbox_unchecked.png'
import checkboxCheckedImg from './img/checkbox_checked.png'
import MainButton from "../MainButton/MainButton";
import {Form} from "react-bootstrap";

const CafesBlock = () => {
    const [checkbox, setCheckbox] = useState('false')


    const checkboxHandler = () => {
        setCheckbox(prevState => !prevState)
    }

    return (
        <div className='cafesBlockContainer'>
            <img className='cafesBlockBckgrImg' src={bckgrImg} alt='...'/>
            <div className='cafesBlockInfoContainer'>
                <h2 id='cafes' className='cafesBlockInfoHead'>Наши кофейни</h2>
                <ul className='cafesBlockInfoList'>
                    <li className='cafesBlockInfoListItem'>
                        <img src={telImg} alt='Телефон' className='cafesBlockInfoListItemImg'/>
                        <p className='cafesBlockInfoListItemText'>
                            + 374 99 99 99 99
                        </p>
                    </li>
                    <li className='cafesBlockInfoListItem'>
                        <img src={envelopImg} alt='Почтовый адрес' className='cafesBlockInfoListItemImg'/>
                        <p className='cafesBlockInfoListItemText'>
                            support@araratch.am
                        </p>
                    </li>
                    <li className='cafesBlockInfoListItem'>
                        <img src={markerImg} alt='Адрес' className='cafesBlockInfoListItemImg'/>
                        <p className='cafesBlockInfoListItemText'>
                            г. Ереван, ул. Давида Анахта, д.4
                        </p>
                    </li>
                    <li className='cafesBlockInfoListItem'>
                        <img src={markerImg} alt='Адрес' className='cafesBlockInfoListItemImg'/>
                        <p className='cafesBlockInfoListItemText'>
                            г. Ереван, ул. Ерванда Кочара, д.19
                        </p>
                    </li>
                </ul>
                <p className='cafesBlockInfoFooter'>Ждем Вас у нас в гостях!</p>
            </div>
            <div className='cafesBlockFAQContainer'>
                <h3 className='cafesBlockFAQHead'>Есть вопросы?</h3>
                <p className='cafesBlockFAQText'>Мы позвоним Вам для уточнения заказа <br/> и ваших пожеланий.</p>
                <Form>
                    <CustomInput
                        placeholder='Имя'
                    />
                    <CustomInput
                        placeholder='Номер телефона'
                    />
                </Form>
                <div className='cafesBlockFAQDisclaimerContainer'>
                    <img onClick={checkboxHandler} className='cafesBlockFAQDisclaimerImg'
                         src={checkbox ? checkboxCheckedImg : checkboxUncheckedImg} alt='...'/>
                    <p className='cafesBlockFAQDisclaimerText'>
                        Нажимая на кнопку, Вы соглашаетесь с &nbsp;
                        <a className='cafesBlockFAQDisclaimerLink'>Политикой обработки <br/> персональных данных</a>
                    </p>
                </div>
                <MainButton>Отправить</MainButton>
            </div>
        </div>
    );
};

export default CafesBlock;