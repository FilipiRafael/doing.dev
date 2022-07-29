import SwitchButtonIOS from '../SwitchButtonIOS';
import './SideBar.css';
import 'animate.css';

const SideBar = ({ darkTheme, setDarkTheme }) => {

    const rootElement = document.documentElement;

    const lightThemeObj = {
        '--color-container-todolist': '#F1F1F1',
        '--color-music-player': '#121214',
        '--text-color-todolist': '#121214',
       '--checked-color-icon': '#5770F7',
        '--checked-color-background': '#FFF'
    }

    const darkThemeObj = {
        '--color-container-todolist': '#121214',
        '--color-music-player': '#F1F1F1',
        '--text-color-todolist': '#F1F1F1',
        '--checked-color-icon': '#FFF',
        '--checked-color-background': '#5770F7'
    }

    function toggleTheme() {
        setDarkTheme(!darkTheme);
        darkTheme ? changeTheme(lightThemeObj) : changeTheme(darkThemeObj);
    }

    function changeTheme(theme) {
        for (let prop in theme) {
            changeProperty(prop, theme[prop]);
        }
    }

    function changeProperty(property, value) {
        rootElement.style.setProperty(property, value);
    }

    return (
        <article className="sidebar">
            <img src="https://github.com/filipirafael.png" alt="avatar" aria-hidden />
            <h2>Juliana Amoasei</h2>
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