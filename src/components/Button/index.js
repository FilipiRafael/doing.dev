import { Fragment } from 'react';
import './Button.css';

const Button = ({title, isLoading, onClick}) => {
    return (
        <Fragment>
            {isLoading ? 
            <button
                onClick={onClick}
                className="button__component-disabled"
            >
                {title}
            </button> :
            <button
                className="button__component"
                onClick={onClick}
            >
                    {title}
            </button>
            }
        </Fragment>
    )
}

export default Button;