import { Fragment } from 'react';
import './Input.css';

const Input = ({ label, placeholder, type, setInput }) => {
    return (
        <Fragment>
            <label className="input__label" htmlFor={label}>{label}</label>
            <input
                className="input__field"
                name={label} id={label}
                placeholder={placeholder}
                type={type}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />
        </Fragment>
    )
}

export default Input;