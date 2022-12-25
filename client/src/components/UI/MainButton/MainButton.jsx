import React from 'react';
import classes from './MainButton.module.css'

const MainButton = ({children, ...props}) => {
    return (
        <button className={classes.MainButton} {...props}>
            {children}
        </button>
    );
};

export default MainButton;