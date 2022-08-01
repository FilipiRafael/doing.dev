import { Fragment } from 'react';
import './Input.css';

const Input = ({ label, placeholder, type }) => {
    return (
        <Fragment>
            <label className="input__label" htmlFor={label}>{label}</label>
            <input className="input__field" name={label} id={label} placeholder={placeholder} type={type} />
        </Fragment>
    )
}

export default Input;