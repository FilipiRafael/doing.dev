import { Fragment } from 'react';
import './ButtonGithubConnect.css';
import GitHubIcon from '@mui/icons-material/GitHub';

const ButtonGithubConnect = ({ title, onClick }) => {
    return (
        <Fragment>
            <button onClick={onClick} className="buttonGithubConnect">
                <GitHubIcon className="githubIcon" />
                {title}
            </button>
        </Fragment>
    )
}

export default ButtonGithubConnect;
