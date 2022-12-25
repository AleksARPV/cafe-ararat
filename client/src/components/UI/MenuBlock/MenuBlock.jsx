import React, {useEffect} from 'react';
import bckgrImg from './img/menu_bckgrimg.png'
import separatorImg from './img/line.svg'
import basket from './img/basket.svg'
import './MenuBlock.css'
import Card from "../Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {
    dataRequested,
    dataRequestFailed,
    goodsFetched,
    selectGoods,
    selectIsLoading
} from "../../../store/reducers/goodsSlice";
import {BASKET_ROUTE, LOGIN_ROUTE} from "../../../utils/consts";
import {Link} from "react-router-dom";
import {selectUser} from "../../../store/reducers/userSlice";
import {fetchGoods} from "../../../http/goodsApi";
import {useShoppingCart} from "../../../context/ShoppingCartContext";


const MenuBlock = () => {
    const goods = useSelector(selectGoods)
    const user = useSelector(selectUser)
    const isLoading = useSelector(selectIsLoading)
    const dispatch = useDispatch()
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity
    } = useShoppingCart()


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
        <div className='menuBlockContainer'>
            <img className='menuBlockContainerBckgrImg' src={bckgrImg} alt='Фон'/>
            <div className='menuBlockHeader'>
                <h2 id='menu' className='menuBlockHeaderH2'>Наше меню</h2>
                <div id="menu" className="list-group menuBlockHeaderSelectorContainer">
                    <button
                        type="button"
                        data-bs-target="#menuCarousel"
                        data-bs-slide-to="0"
                        className="active menuBlockHeaderSelectors bg-transparent border-0"
                        aria-current="true" aria-label="Slide 1"
                    >
                        Классика
                    </button>
                    <img className='menuBlockHeaderSelectorSeparatorImg' src={separatorImg} alt='Сепаратор'/>
                    <button
                        type="button"
                        data-bs-target="#menuCarousel"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                        className="menuBlockHeaderSelectors bg-transparent border-0"
                    >
                        Авторские
                    </button>
                    <img className='menuBlockHeaderSelectorSeparatorImg' src={separatorImg} alt='Сепаратор'/>
                    <button
                        type="button"
                        data-bs-target="#menuCarousel"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                        className="menuBlockHeaderSelectors bg-transparent border-0"
                    >
                        Выпечка
                    </button>
                    <div style={{position: "relative"}}>
                        <Link to={user.isAuth ? BASKET_ROUTE : LOGIN_ROUTE}>
                            <img className='menuBlockHeaderBasketImg' src={basket} alt='Корзина'/>
                            {cartQuantity > 0 &&
                                <div
                                    className='d-flex rounded-circle justify-content-center align-items-center bg-white'
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        right: '90px',
                                        color: "black",
                                        height: "20px",
                                        width: "20px",
                                        fontSize: ".75rem"
                                    }}
                                >
                                    {cartQuantity}
                                </div>
                            }
                        </Link>
                    </div>
                </div>
            </div>
            <div
                id="menuCarousel"
                className="carousel slide menuBlockSliderContainer"
                data-bs-ride="carousel"
                data-bs-interval="900000"
                data-bs-pause="hover"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='menuBlockSliderGrid'>
                            {!isLoading && goods
                                .filter(good => good.typeId === 3)
                                .map(good => <Card key={good.id} props={good}/>)
                            }
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='menuBlockSliderGrid'>
                            {!isLoading && goods
                                .filter(good => good.typeId === 2)
                                .map(good => <Card key={good.id} props={good}/>)
                            }
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='menuBlockSliderGrid'>
                            {!isLoading && goods
                                .filter(good => good.typeId === 1)
                                .map(good => <Card key={good.id} props={good}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBlock;

