import React, {useEffect} from 'react';
import './BasketBlock.css'
import backgr from "./img/bckgr.png";
import delete_btn from './img/delete_btn.svg'
import mockFotoImg from "./img/mockFoto.png";
import separatorImg from "./img/separator.svg";
import back_btn from "./img/back_btn.svg";
import {MAIN_ROUTE, USER_ROUTE} from "../../../utils/consts";
import logoutIcon from "./img/clarity_logout.svg";
import {useHistory, useLocation} from "react-router-dom";
import {useShoppingCart} from "../../../context/ShoppingCartContext";
import BasketCard from "../BasketCard/BasketCard";
import {useDispatch, useSelector} from "react-redux";
import {
    dataRequested,
    dataRequestFailed,
    goodsFetched,
    selectGoods,
    selectIsLoading
} from "../../../store/reducers/goodsSlice";
import {fetchGoods} from "../../../http/goodsApi";
import MainButton from "../MainButton/MainButton";


const BasketBlock = () => {
    const history = useHistory()
    const location = useLocation()
    const {
        cartQuantity,
        cartItems,
        removeAllFromCart
    } = useShoppingCart()
    const goods = useSelector(selectGoods)
    const isLoading = useSelector(selectIsLoading)
    const dispatch = useDispatch()

    const clearCartHandler = () => {
        removeAllFromCart()
        location.reload()
    }

    const goodsUpload = async () => {
        try {
            dispatch(dataRequested())
            const data = await fetchGoods()
            await dispatch(goodsFetched(data.rows))
        } catch (e) {
            const {message} = e.response.data.message
            dispatch(dataRequestFailed(message))
            alert(e.response.data.message)
        }
    }
    useEffect(() => {
        goodsUpload()
    }, [])

    if (isLoading) {
        return <h2 className='mt-5'>Loading ...</h2>
    }

    return (
        <>
            <div className='basketPanelContainer'>
                <img className='basketPanelBackgrImg' src={backgr} alt='...'/>
                <div className='basketPanelLeftSide'>
                    <img className='basketPanelLeftSideUserFoto' src={mockFotoImg} alt='???????? ????????????????????????'/>
                    <p className='basketPanelLeftSideUserName'>??????????????</p>
                    <ul className='basketPanelLeftSideListContainer'>
                        <li onClick={clearCartHandler} className='basketPanelLeftSideListItem'>
                            <img src={delete_btn} alt='??????????????????' className='basketPanelLeftSideListIcon'/>
                            <p className='basketPanelLeftSideListText'>???????????????? ??????????????</p>
                        </li>
                        <li>
                            <img src={separatorImg} alt='...'/>
                        </li>
                        <li onClick={() => history.push(MAIN_ROUTE)} className='basketPanelLeftSideListItem'>
                            <img src={logoutIcon} alt='??????????' className='basketPanelLeftSideListIcon'/>
                            <p className='basketPanelLeftSideListText'>???? ????????</p>
                        </li>
                    </ul>
                </div>
                <div className='basketPanelRightSideContainer'>
                    <img
                        onClick={() => history.push(USER_ROUTE)}
                        className='basketPanelBackButton'
                        src={back_btn}
                        alt='??????????'
                    />
                    {cartQuantity > 0 ?
                        <h2
                            style={{fontSize: '1.875rem', position: "absolute", left: 0, top: "100px"}}
                        >
                            ???????? ??????????????
                        </h2>
                        :
                        <h2
                            className='d-flex'
                            style={{fontSize: '1.875rem', alignSelf: "center", justifySelf: "center"}}
                        >
                            ???????? ?????????????? ??????????
                        </h2>
                    }
                    <div
                        style={{display: "flex", flexDirection: "column", marginTop: "200px"}}
                    >
                        {cartItems.map(item => (
                            <BasketCard key={item.id} goods={goods} {...item} />
                        ))}
                    </div>
                    {cartQuantity > 0 &&
                        <>
                            <div className='totalPriceContainer'>
                                <p style={{fontSize: '1.25rem', margin: 0}}>??????????</p>
                                <div style={{fontSize: '1.25rem', margin: 0, fontWeight: 'bold'}}>
                                    {cartItems.reduce((total, cartItem) => {
                                        const item = goods.find(i => i.id === cartItem.id)
                                        return total + (item?.price || 0) * cartItem.quantity
                                    }, 0)} AMD
                                </div>
                            </div>
                            <div style={{alignSelf: "flex-end", marginRight: '75px'}}>
                                <MainButton>????????????????</MainButton>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default BasketBlock;