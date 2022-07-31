import SwitchButtonIOS from '../SwitchButtonIOS';
import './SideBar.css';
import 'animate.css';
import { Avatar } from '@mui/material';
import AvatarsModal from '../AvatarsModal';

const SideBar = ({ darkTheme, toggleTheme }) => {

    return (
        <article className="sidebar">
            <Avatar
                className="avatar"
                src="/images/avatars/avatar4.png"
                alt="avatar"
                aria-hidden
                sx={{ 
                    width: 200,
                    height: 200,
                    transition: 'all .3s',
                    cursor: 'pointer',
                    '&:hover': {
                        opacity: 0.8
                    }
                }}
            />
            <AvatarsModal />
            <h2>Filipi Rafael</h2>
            <div className="theme">
                <span>Light</span>
                <SwitchButtonIOS className="sidebar__switchbutton" checked={darkTheme} onClick={toggleTheme} />
                <span>Dark</span>
            </div>
            <img className="hand" src="/images/hand.svg" alt="hand sidebar" aria-hidden />
        </article>
    )
}

export default SideBar;