import { Fragment } from 'react';
import './ButtonGoogleConnect.css';
import GoogleIcon from '@mui/icons-material/Google';

const ButtonGoogleConnect = ({ title }) => {
    return (
        <Fragment>
            <button className="buttonGoogleConnect">
                <GoogleIcon className="googleIcon" />
                {title}
            </button>
        </Fragment>
    )
}

export default ButtonGoogleConnect;