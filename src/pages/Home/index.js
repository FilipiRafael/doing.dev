import { Fragment, useState } from 'react';
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
            done: true,
        },        
        {
            id: '19192',
            description: 'Create a React Native Tutorial',
            done: false,
        },        
        {
            id: '94920',
            description: 'Make a Youtube Channel',
            done: false,
        },   
        {
            id: '29293',
            description: 'Mais uma task',
            done: false,
        },   
    ]);

    const [newItem, setNewItem] = useState(false);

    function handleKeyUp(e) {
        if (e.key === 'Enter') {
            const newArrayItems = [...tasks];
            newArrayItems.push({
                id: `${e.target.value}/${tasks.length}`,
                description: e.target.value,
                done: false
            });
            setTasks(newArrayItems);
            setNewItem(false);
        }
    }

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
                        {newItem && tasks.length === 0 && (
                            <div className="home__newtask-emptylist">
                                <input type="text" placeholder="Digite a nova tarefa..." onKeyUp={handleKeyUp} />
                            </div>
                        )}
                        {tasks.length > 0 ?
                        (
                            <div className="home__tasks-wrapper">
                                {tasks.map((task, index) => (
                                    <div key={`${task.description}/${index}`}>
                                        {task.done ?
                                            <Fragment>
                                                <input type="checkbox" checked={task.done} onChange={() => {
                                                    const newTasksArray = [...tasks];
                                                    newTasksArray[index].done = false;
                                                    setTasks(newTasksArray);
                                                }} />
                                                <span className='home__tasks-line-through'>{task.description}</span>
                                            </Fragment> :
                                            <Fragment>
                                                <input type="checkbox" checked={task.done} onChange={() => {
                                                    const newTasksArray = [...tasks];
                                                    newTasksArray[index].done = true;
                                                    setTasks(newTasksArray);
                                                }} />
                                                <span>{task.description}</span>
                                            </Fragment>
                                        }
                                        <DeleteIcon
                                            className="home__tasks-deleteicon"
                                            onClick={() => {
                                                const newTasksArray = [...tasks];
                                                newTasksArray.splice(index, 1);
                                                setTasks(newTasksArray);
                                            }}
                                        />
                                    </div>
                                ))}
                                {newItem && (
                                    <div className="home__newtask">
                                        <input type="text" placeholder="Digite a nova tarefa..." onKeyUp={handleKeyUp} />
                                    </div>
                                )}
                            </div>
                        ) :
                        (
                            <div className="home__tasks-empty">
                                <PlaylistAddCheckIcon className="home__tasks-icon" />
                                <h3>Você ainda não tem tarefas registradas</h3>
                            </div> 
                        )
                        }
                        <button
                            className="home__tasks-button"
                            onClick={() => setNewItem(true)}    
                        >
                            <AddIcon />
                        </button>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Home;