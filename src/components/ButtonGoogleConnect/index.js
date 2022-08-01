import { Fragment } from 'react';
import './ButtonGoogleConnect.css';
import GoogleIcon from '@mui/icons-material/Google';

const ButtonGoogleConnect = ({ title, onClick }) => {
    return (
        <Fragment>
            <button onClick={onClick} className="buttonGoogleConnect">
                <GoogleIcon className="googleIcon" />
                {title}
            </button>
        </Fragment>
    )
}

export default ButtonGoogleConnect;