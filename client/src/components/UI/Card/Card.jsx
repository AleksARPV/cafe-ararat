import React, {useState} from 'react';
import './Card.css'
import cardBckgr from './img/card_bckgr.png'
import basket from "./img/basket.svg";
import CustomModal from "../CustomModal/CustomModal";
import {useShoppingCart} from "../../../context/ShoppingCartContext";

const Card = ({props}) => {
    const [modalShow, setModalShow] = useState(false);
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity
    } = useShoppingCart()
    const quantity = getItemQuantity(props.id)

    return (
        <>
            <div className='cardContainer'>
                <img className='cardContainerBckgrImg' src={cardBckgr} alt='...'/>
                <img className='cardGoodImg' src={process.env.REACT_APP_API_URL + props.img} alt='...'/>
                <div className='cardGoodContainer'>
                    <h3 className='cardGoodHeader'>{props.name}</h3>
                    <p
                        onClick={() => setModalShow(true)}
                        className='cardGoodDisclaimerOpener'>
                        Подробнее...
                    </p>
                    <div className='cardGoodFooter'>
                        <p className='cardGoodFooterText'>{props.price} AMD / {props.weight}</p>
                        <img
                            className='cardGoodFooterBasket'
                            src={basket}
                            alt='Корзина'
                            onClick={() => increaseCartQuantity(props.id)}
                        />
                    </div>
                </div>
            </div>
            <CustomModal visible={modalShow} setVisible={() => setModalShow(false)}>
                <div className='cardContainer'>
                    <img className='cardContainerBckgrImg' src={cardBckgr} alt='...'/>
                    <img className='cardGoodImg' src={process.env.REACT_APP_API_URL + props.img} alt='...'/>
                    <div className='cardGoodContainer'>
                        <h3 className='cardGoodHeader'>{props.name}</h3>
                        <p
                            className='cardGoodDetails'>
                            {props.desc}
                        </p>
                        <div className='cardGoodFooter'>
                            <p className='cardGoodFooterText'>{props.price} AMD / {props.weight}</p>
                            <img className='cardGoodFooterBasket' src={basket} alt='Корзина'/>
                        </div>
                    </div>
                </div>
            </CustomModal>
        </>
    );
};

export default Card;