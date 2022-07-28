import { useState } from 'react';
import './Home.css';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const Home = () => {

    const [tasks, setTasks] = useState([
        {
            id: '73180',
            description: 'Go to Coffe',
            isChecked: true,
        },        
        {
            id: '19192',
            description: 'Create a React Native Tutorial',
            isChecked: true,
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
                                        {task.isChecked ?
                                            <span className='home__tasks-line-through'>{task.description}</span> :
                                            <span>{task.description}</span>
                                        }
                                        <DeleteIcon className="home__tasks-deleteicon" />
                                    </div>
                                ))}
                                <button className="home__tasks-button">
                                    <AddIcon />
                                </button>
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