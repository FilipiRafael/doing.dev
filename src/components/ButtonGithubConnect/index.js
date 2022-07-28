import { Fragment } from 'react';
import './ButtonGithubConnect.css';
import GitHubIcon from '@mui/icons-material/GitHub';

const ButtonGithubConnect = ({ title }) => {
    return (
        <Fragment>
            <button className="buttonGithubConnect">
                <GitHubIcon className="githubIcon" />
                {title}
            </button>
        </Fragment>
    )
}

export default ButtonGithubConnect;
