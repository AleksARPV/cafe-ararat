import React from 'react';
import IntroBlock from "../components/UI/IntroBlock/IntroBlock";
import WhyUsBlock from "../components/UI/WhyUsBlock/WhyUsBlock";
import AboutBlock from "../components/UI/AboutBlock/AboutBlock";
import MenuBlock from "../components/UI/MenuBlock/MenuBlock";
import SortsOfCoffeeBlock from "../components/UI/SortsOfCoffeeBlock/SortsOfCoffeeBlock";
import OnlineBlock from "../components/UI/OnlineBlock/OnlineBlock";
import CafesBlock from "../components/UI/CafesBlock/CafesBlock";
import Footer from "../components/UI/FooterBlock/Footer";

const Main = () => {
    return (
        <>
            <IntroBlock/>
            <WhyUsBlock/>
            <AboutBlock/>
            <MenuBlock/>
            <SortsOfCoffeeBlock/>
            <OnlineBlock/>
            <CafesBlock/>
            <Footer/>
        </>
    );
};

export default Main;