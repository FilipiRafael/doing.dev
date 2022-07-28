import './Home.css';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

const Home = () => {
    return (
        <section className="home__section">
            <header>
                <nav>
                    <MenuIcon className="navbar__icon" />
                    <LogoutIcon className="navbar__icon" />
                </nav>
            </header>
            <main>
                <div className="home__header">
                    <h2>What's up, Juliana!</h2>
                    <img src="/images/girl.svg" alt="girl vetor" aria-hidden />
                </div>
                <div>

                </div>
            </main>
        </section>
    )
}

export default Home;