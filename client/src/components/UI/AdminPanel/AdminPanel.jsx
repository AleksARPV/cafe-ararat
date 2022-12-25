import React, {useEffect, useState} from 'react';
import './AdminPanel.css'
import backgr from "./img/bckgr.png";
import mockFotoImg from "./img/mockFoto.png";
import separatorImg from "./img/separator.svg";
import logoutIcon from "./img/clarity_logout.svg";
import back_btn from './img/back_btn.svg'
import add_btn from './img/add_btn.svg'
import {MAIN_ROUTE, USER_ROUTE} from "../../../utils/consts";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {Button, Container, Dropdown, Form, FormControl, Row} from "react-bootstrap";
import {
    dataRequested,
    dataRequestFailed,
    goodRemoved,
    goodsFetched,
    selectGoods,
    selectIsLoading,
    selectTypes,
    typesFetched
} from "../../../store/reducers/goodsSlice";
import CustomModal from "../CustomModal/CustomModal";
import {createGood, deleteGood, fetchGoods, fetchTypes} from "../../../http/goodsApi";
import AdminCard from "../AdminCard/AdminCard";

const AdminPanel = () => {
    const goods = useSelector(selectGoods)
    const types = useSelector(selectTypes)
    const isLoading = useSelector(selectIsLoading)
    const history = useHistory()
    const dispatch = useDispatch()
    const [modalAdminShow, setAdminModalShow] = useState(false);
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [weight, setWeight] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile] = useState(null)
    const [typeOfGood, setTypeOfGood] = useState('')
    const removeGood = async (id) => {
        const data = await deleteGood(id)
        dispatch(goodRemoved(id))
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

    const typesUpload = async () => {
        try {
            dispatch(dataRequested())
            const data = await fetchTypes()
            await dispatch(typesFetched(data))
        } catch (e) {
            const {message} = e.response.data.message
            dispatch(dataRequestFailed(message))
            alert(e.response.data.message)
        }
    }

    useEffect(() => {
        typesUpload()
        goodsUpload()
    }, [])

    if (isLoading) {
        return <h2 className='mt-5'>Loading ...</h2>
    }

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const addGoodHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('weight', weight)
        formData.append('img', file)
        formData.append('desc', desc)
        formData.append('typeId', typeOfGood.id)
        try {
            dispatch(dataRequested())
            await createGood(formData)
            const data = await fetchGoods()
            await dispatch(goodsFetched(data.rows))
        } catch (e) {
            const {message} = e.response.data.message
            dispatch(dataRequestFailed(message))
            alert(e.response.data.message)
        }
        setName('')
        setPrice(0)
        setWeight('')
        setTypeOfGood('')
        setDesc('')
        setAdminModalShow(false)
    }

    return (
        <>
            <div className='adminPanelContainer'>
                <img className='adminPanelBackgrImg' src={backgr} alt='...'/>
                <div className='adminPanelLeftSide'>
                    <img className='adminPanelLeftSideUserFoto' src={mockFotoImg} alt='Фото пользователя'/>
                    <p className='adminPanelLeftSideUserName'>Панель Администратора</p>
                    <ul className='adminPanelLeftSideListContainer'>
                        <li onClick={() => setAdminModalShow(true)} className='adminPanelLeftSideListItem'>
                            <img src={add_btn} alt='Избранное' className='adminPanelLeftSideListIcon'/>
                            <p className='adminPanelLeftSideListText'>Добавить товар</p>
                        </li>
                        <li>
                            <img src={separatorImg} alt='...'/>
                        </li>
                        <li onClick={() => history.push(MAIN_ROUTE)} className='adminPanelLeftSideListItem'>
                            <img src={logoutIcon} alt='Выйти' className='adminPanelLeftSideListIcon'/>
                            <p className='adminPanelLeftSideListText'>На сайт</p>
                        </li>
                    </ul>
                </div>
                <div className='adminPanelRightSideContainer'>
                    <img
                        onClick={() => history.push(USER_ROUTE)}
                        className='adminPanelBackButton'
                        src={back_btn}
                        alt='Назад'
                    />
                    <Container>
                        {!isLoading && types.map(type => (
                            <div key={type.id}>
                                <h2 className='adminPanelRightSideContainerItemHeader'>{type.name}</h2>
                                <Row>
                                    {!isLoading && goods
                                        .filter(good => good.typeId === type.id)
                                        .map(good => <AdminCard key={good.id} removeGood={removeGood} {...good}/>)
                                    }
                                </Row>
                            </div>
                        ))}
                    </Container>
                </div>
            </div>
            <CustomModal

                visible={modalAdminShow}
                setVisible={() => setAdminModalShow(false)}
            >
                <h2 className='mb-4'>Добавить товар</h2>
                <Form className='d-flex flex-column justify-content-start'>
                    <Dropdown className='mt-3'>
                        <Dropdown.Toggle
                            style={{backgroundColor: "#E29542", border: "none"}}
                        >
                            {typeOfGood.name || 'Выбирете категорию'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu variant='dark'>
                            {types.map(type =>
                                <Dropdown.Item
                                    key={type.id}
                                    onClick={() => setTypeOfGood(type)}
                                >
                                    {type.name}
                                </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <FormControl
                        className='mt-5 formControlStyles'
                        placeholder='Введите наименование товара'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <FormControl
                        className='mt-3 formControlStyles'
                        placeholder='Введите стоимость товара'
                        type='number'
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                    <FormControl
                        className='mt-3 formControlStyles'
                        placeholder='Введите вес/объем товара (г/мл)'
                        value={weight}
                        onChange={e => setWeight(e.target.value)}
                    />
                    <FormControl
                        className='mt-3 formControlStyles'
                        placeholder='Введите краткое описание товара'
                        type='textarea'
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                    />
                    <FormControl
                        className='mt-4 border-0 text-white'
                        style={{backgroundColor: "#E29542", border: "none"}}
                        type='file'
                        onChange={selectFile}
                    />
                    <Button
                        className='mt-4'
                        style={{backgroundColor: "#E29542", border: "none"}}
                        type='submit'
                        onClick={addGoodHandler}
                    >
                        Добавить товар
                    </Button>
                </Form>
            </CustomModal>
        </>
    );
};

export default AdminPanel;