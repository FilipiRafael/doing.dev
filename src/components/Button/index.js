import { Fragment } from 'react';
import './Button.css';

const Button = ({title}) => {
    return (
        <Fragment>
            <button className="button__component">{title}</button>
        </Fragment>
    )
}

export default Button;