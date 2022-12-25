import React from 'react';
import './CustomInput.css'

const CustomInput = ({placeholder, value, onChange, type, name}) => {
    const handleChange = ({target}) => {
        onChange({name: target.name, value: target.value});
    }
    return (
        <input
            placeholder={placeholder}
            value={value || ''}
            onChange={handleChange}
            type={type}
            name={name}
            className='customInput'
        />
    );
}

export default CustomInput;