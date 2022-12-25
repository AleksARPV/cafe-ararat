import React from 'react';
import './BasketCard.css'
import {useShoppingCart} from "../../../context/ShoppingCartContext";

const BasketCard = ({id, quantity, goods}) => {
    const {
        increaseCartQuantity,
        decreaseCartQuantity,
    } = useShoppingCart()
    const item = goods.find(i => i.id === id)
    if (item == null) return null


    return (
        <div className='basketCardContainer'>
            <div className='d-flex flex-row'>
                <img className='basketCardContainerImg' src={process.env.REACT_APP_API_URL + item.img}/>
                <div style={{width: '151px', fontSize: '1.125rem', marginLeft: '41px', alignSelf: "center"}}>
                    {item.name}
                </div>
            </div>
            <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className='basketCardCounterContainer'>
                    <button onClick={() => decreaseCartQuantity(id)} className='basketCardCounterButton'>
                        -
                    </button>
                    <div className='basketCardCounterNumber'>
                        {quantity}
                    </div>
                    <button onClick={() => increaseCartQuantity(id)} className='basketCardCounterButton'>
                        +
                    </button>
                </div>
                <div style={{marginLeft: '67px', fontSize: '1.25rem', fontWeight: 'bold'}}>
                    {item.price * quantity} AMD
                </div>
            </div>
        </div>
    );
};

export default BasketCard;