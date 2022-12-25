import React from 'react';
import cl from './CustomModal.module.css'
import close_btn from './img/close_btn.svg'

const CustomModal = (({children, visible, setVisible}) => {

    const rootClasses = [cl.customModal]

    if (visible) {
        rootClasses.push(cl.active)
    }
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.customModalContent} onClick={event => event.stopPropagation()}>
                <img
                    onClick={() => setVisible(false)}
                    className={cl.customModalCloseButton}
                    src={close_btn}
                    alt='Закрыть'
                />
                {children}
            </div>
        </div>
    );
});

export default CustomModal;