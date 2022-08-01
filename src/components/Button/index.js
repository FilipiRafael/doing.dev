import { Fragment } from 'react';
import './Button.css';

const Button = ({title, isLoading}) => {
    return (
        <Fragment>
            {isLoading ? <button className="button__component" disabled>{title}</button> :
            <button className="button__component">{title}</button>}
        </Fragment>
    )
}

export default Button;