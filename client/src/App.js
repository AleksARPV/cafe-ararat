import React, {useEffect} from 'react';
import './styles/app.css'
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {authFinally, authRequestSuccess, selectUser} from "./store/reducers/userSlice";
import {check} from "./http/userApi";
import {ShoppingCartProvider} from "./context/ShoppingCartContext";

const App = () => {
    const {isLoading} = useSelector(selectUser)
    const dispatch = useDispatch()
    useEffect(() => {
        check().then(data => {
            dispatch(authRequestSuccess(data))
        }).finally(() => dispatch(authFinally()))
    }, [])
    if (isLoading) {
        return <h2 className='mt-5'>Loading ...</h2>
    }
    return (
        <>
            <ShoppingCartProvider>
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
            </ShoppingCartProvider>
        </>
    );
};

export default App;