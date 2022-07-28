import { useState } from 'react';
import './Home.css';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

const Home = () => {

    const [tasks, setTasks] = useState([
        {
            id: '73180',
            description: 'Go to Coffe',
            isChecked: false,
        },        
        {
            id: '19192',
            description: 'Create a React Native Tutorial',
            isChecked: false,
        },        
        {
            id: '94920',
            description: 'Make a Youtube Channel',
            isChecked: false,
        },      
    ]);

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
                    <h2>What's up, Juliana?</h2>
                    <img src="/images/girl.svg" alt="girl vetor" aria-hidden />
                </div>
                <div className="home__content">
                    <div className="home__todolist">
                        {tasks.length > 0 ?
                        (
                            <div className="home__tasks-wrapper">
                                {tasks.map(task => (
                                    <div>
                                        <input type="checkbox" />
                                        {task.description}
                                    </div>
                                ))}
                            </div>
                        ) :
                        (
                            <div className="home__tasks-empty">
                                <PlaylistAddCheckIcon className="home__tasks-icon" />
                                <h3>Você ainda não tem tarefas registradas</h3>
                            </div>
                        )
                        }
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Home;