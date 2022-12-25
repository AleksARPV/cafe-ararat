import React from 'react';
import './AdminCard.css'
import cardBckgr from './img/card_bckgr.png'
import delete_btn from './img/delete_btn.svg'

const AdminCard = ({img, name, price, desc, weight, id, removeGood}) => {
    return (
        <>
            <div className='cardAdminContainer'>
                <img className='cardAdminContainerBckgrImg' src={cardBckgr} alt='...'/>
                <img className='cardAdminGoodImg' src={process.env.REACT_APP_API_URL + img} alt='...'/>
                <div className='cardAdminGoodContainer'>
                    <h3 className='cardAdminGoodHeader'>{name}</h3>
                    <p
                        className='cardAdminGoodDisclaimerText'>
                        {desc}
                    </p>
                    <div className='cardAdminGoodFooter'>
                        <p className='cardAdminGoodFooterText'>{price} AMD / {weight}</p>
                        <img
                            className='cardAdminGoodFooterBasket'
                            src={delete_btn}
                            alt='Корзина'
                            onClick={() => removeGood(id)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminCard;