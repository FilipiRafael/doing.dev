import './AvatarsModal.css'
import { Modal, Box } from '@mui/material';

const AvatarsModal = ({ openAvatarsModal, setOpenAvatarsModal, setUrlAvatar, saveAvatarToLocalStorage }) => {

    const avatarsArray = [
        'avatar1',
        'avatar2',
        'avatar3',
        'avatar4',
        'avatar5',
        'avatar6',
        'avatar7',
        'avatar8',
        'avatar9',
        'avatar10',
        'avatar11',
        'avatar12',
        'avatar13',
        'avatar14',
        'avatar15',
        'avatar16',
        'avatar17',
        'avatar18',
        'avatar19',
        'avatar20',
    ]

    return (
        <Modal
            className="avatarsModal"
            open={openAvatarsModal}
        >
            <Box className="avatarsBox">
                {avatarsArray.map((image, index) => (
                    <img
                        className="avatar-image"
                        key={`${image}/${index}`}
                        src={`/images/avatars/${image}.png`}
                        alt="avatar" aria-hidden
                        onClick={() => {
                            setUrlAvatar(`/images/avatars/${image}.png`);
                            saveAvatarToLocalStorage(`/images/avatars/${image}.png`);
                            setOpenAvatarsModal(false);
                        }}
                    />
                ))}
            </Box>
        </Modal>
    )
}

export default AvatarsModal;