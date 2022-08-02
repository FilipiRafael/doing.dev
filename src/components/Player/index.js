import { useState, Fragment } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import './Player.css';

const Player = () => {

    const player = document.querySelector('audio');

    const playlist = [
        'https://mp3.chillhop.com/serve.php/?mp3=11768',
        'https://mp3.chillhop.com/serve.php/?mp3=10075',
        'https://mp3.chillhop.com/serve.php/?mp3=9272',
        'https://mp3.chillhop.com/serve.php/?mp3=9222',
        'https://mp3.chillhop.com/serve.php/?mp3=10310',
        'https://mp3.chillhop.com/serve.php/?mp3=9248',
        'https://mp3.chillhop.com/serve.php/?mp3=9219',
        'https://mp3.chillhop.com/serve.php/?mp3=9355',
        'https://mp3.chillhop.com/serve.php/?mp3=8200',
        'https://mp3.chillhop.com/serve.php/?mp3=10243',
        'https://mp3.chillhop.com/serve.php/?mp3=9148',
        'https://mp3.chillhop.com/serve.php/?mp3=9228',
        'https://mp3.chillhop.com/serve.php/?mp3=826',
        'https://mp3.chillhop.com/serve.php/?mp3=9071',
        'https://mp3.chillhop.com/serve.php/?mp3=8285',
        'https://mp3.chillhop.com/serve.php/?mp3=10074',
        'https://mp3.chillhop.com/serve.php/?mp3=3524',
        'https://mp3.chillhop.com/serve.php/?mp3=10460'
    ]

    const [musicRef, setMusicRef] = useState(0)
    const [play, setPlay] = useState(false);

    function nextMusic() {
        if (musicRef >= playlist.length) {
            setMusicRef(0);
            player.play()
        }
        setMusicRef(musicRef + 1);
        player.play();
    }

    function previousMusic() {
        if (musicRef === 0) {
            setMusicRef(0);
            player.play()
        }
        setMusicRef(musicRef - 1);
        player.play()
    }


    return (
        <Fragment>
            <ReactAudioPlayer
                src={playlist[musicRef]}
                autoPlay
                onEnded={nextMusic}
                onPlay={() => setPlay(true)}
                onPause={() => setPlay(false)}
            />
            <div className="music__player">
                <SkipPreviousIcon
                    onClick={previousMusic}
                />
                {play ? 
                <PauseCircleIcon
                    onClick={() => {
                        setPlay(false);
                        player.pause();
                    }}  
                /> : 
                <PlayCircleFilledIcon
                    onClick={() => {
                        setPlay(true);
                        player.play();
                    }}
                />}
                <SkipNextIcon
                    onClick={nextMusic}
                />
            </div>
        </Fragment>
    )
}

export default Player;