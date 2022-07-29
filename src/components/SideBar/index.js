import SwitchButtonIOS from '../SwitchButtonIOS';
import './SideBar.css';
import 'animate.css';

const SideBar = () => {
    return (
        <article className="sidebar">
            <img src="https://github.com/filipirafael.png" alt="avatar" aria-hidden />
            <h2>Juliana Amoasei</h2>
            <div className="theme">
                <span>Light</span>
                <SwitchButtonIOS className="sidebar__switchbutton" />
                <span>Dark</span>
            </div>
            <img className="hand" src="/images/hand.svg" alt="hand sidebar" aria-hidden />
        </article>
    )
}

export default SideBar;