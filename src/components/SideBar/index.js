import './SideBar.css';

const SideBar = () => {
    return (
        <article className="sidebar">
            <img src="/images/avatar.svg" alt="avatar" aria-hidden />
            <h2>Juliana Amoasei</h2>
            <div></div>
            <img className="hand" src="/images/hand.svg" alt="hand sidebar" aria-hidden />
        </article>
    )
}

export default SideBar;