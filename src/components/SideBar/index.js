import SwitchButtonIOS from '../SwitchButtonIOS';
import './SideBar.css';
import 'animate.css';
import { Avatar, CircularProgress } from '@mui/material';
import AvatarsModal from '../AvatarsModal';
import { useState, useEffect } from 'react';

const SideBar = ({ user, name, darkTheme, toggleTheme }) => {

    const [openAvatarsModal, setOpenAvatarsModal] = useState(false);
    const [urlAvatar, setUrlAvatar] = useState('/images/avatars/avatar1.png');
    const [loading, setLoading] = useState(true);

    function saveAvatarToLocalStorage(avatar) {
        localStorage.setItem('avatar', JSON.stringify(avatar))
    }

    function getAvatarFromLocalStorage() {
        const avatar = JSON.parse(localStorage.getItem('avatar'));
        if (avatar !== null) setUrlAvatar(avatar);
        setLoading(false);
    }

    useEffect(() => {
        getAvatarFromLocalStorage();
    })

    return (
        <article className="sidebar">
            {loading ? (
                <CircularProgress className='circularProgress' />
            ) : (
                <Avatar
                    className="avatar"
                    src={urlAvatar}
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
                    onClick={() => setOpenAvatarsModal(true)}
                />
            )}
            <AvatarsModal
                openAvatarsModal={openAvatarsModal}
                setOpenAvatarsModal={setOpenAvatarsModal}
                setUrlAvatar={setUrlAvatar}
                saveAvatarToLocalStorage={saveAvatarToLocalStorage}
            />
            {user.displayName ? <h2>{user.displayName}</h2> :
            <h2>{name}</h2>}
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