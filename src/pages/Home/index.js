import { Fragment, useEffect, useState } from 'react';
import './Home.css';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SideBar from '../../components/SideBar';
import { auth } from '../../services/firebase';
import 'animate.css';
import { useNavigate } from 'react-router-dom';

const Home = ({ user, setUser, setIsAuth }) => {

    const [tasks, setTasks] = useState([]);
    const [newItem, setNewItem] = useState(false);
    const [sideBar, setSideBar] = useState(false);
    const [darkTheme, setDarkTheme] = useState(false);
    const navigate = useNavigate();

    function handleSignOut() {
        auth.signOut();
        setIsAuth(false);
        setUser('');
        navigate('/');
    }

    function showSideBar() {
        setSideBar(!sideBar);
    }

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
        darkTheme ? saveThemeToLocalStorage(lightThemeObj) : saveThemeToLocalStorage(darkThemeObj);
    }

    function changeTheme(theme) {
        for (let prop in theme) {
            changeProperty(prop, theme[prop]);
        }
    }

    function changeProperty(property, value) {
        rootElement.style.setProperty(property, value);
    }

    function saveThemeToLocalStorage(theme) {
        localStorage.setItem('theme', JSON.stringify(theme))
    }


    function getThemeFromLocalStorage() {
        const theme = JSON.parse(localStorage.getItem('theme'));

        if (theme !== null) {
            if (isThemeEqual(theme, darkTheme)) setDarkTheme(true);
            changeTheme(theme);
        }

        if (theme === null) changeTheme(lightThemeObj);
    }

    function isThemeEqual(firstTheme, secondTheme) {
        for (let prop in firstTheme) {
            if (firstTheme[prop] !== secondTheme[prop]) return false;
        }
        return true;
    }

    useEffect(() => {
        getThemeFromLocalStorage();
    });

    return (
        <section className="home__section">
            {sideBar && <SideBar user={user} darkTheme={darkTheme} toggleTheme={toggleTheme} />}
            <header>
                <nav>
                    {sideBar ? (
                        <MenuIcon className="navbar__icon-sidebar" onClick={showSideBar} />
                    ) : (
                        <MenuIcon className="navbar__icon" onClick={showSideBar} />
                    )}
                    <LogoutIcon className="navbar__icon" onClick={handleSignOut} />
                </nav>
            </header>
            <main>
                {sideBar ? (
                    <div className="home__header">
                        <img src="/images/girl.svg" alt="girl vetor" aria-hidden />
                    </div>
                ) : (
                    <div className="home__header">
                        {user.displayName ? <h2>What's up, {String(user.displayName).split(' ')[0]}?</h2> :
                        <h2>What's up, my friend?</h2>}
                        <img src="/images/girl.svg" alt="girl vetor" aria-hidden />
                    </div>
                )}
                <div className="home__content">
                    <div className="home__todolist">
                        {newItem && tasks.length === 0 && (
                            <div className="home__newtask-emptylist">
                                <input autoFocus type="text" placeholder="Digite a nova tarefa..." onKeyUp={handleKeyUp} />
                            </div>
                        )}
                        {tasks.length > 0 && !sideBar ?
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
                                                <span className="checkmark"></span>
                                                <span className='home__tasks-line-through'>{task.description}</span>
                                            </Fragment> :
                                            <Fragment>
                                                <input type="checkbox" checked={task.done} onChange={() => {
                                                    const newTasksArray = [...tasks];
                                                    newTasksArray[index].done = true;
                                                    setTasks(newTasksArray);
                                                }} />
                                                <span className="checkmark"></span>
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
                                        <input autoFocus type="text" placeholder="Digite a nova tarefa..." onKeyUp={handleKeyUp} />
                                    </div>
                                )}
                            </div>
                        ) :
                        (
                            newItem && tasks.length === 0 ? (
                                <div className="home__tasks-empty-newitem">
                                    <PlaylistAddCheckIcon className="home__tasks-icon" />
                                    <h3>Você ainda não tem tarefas registradas</h3>
                                </div> 
                            ) : (
                                sideBar ?
                                <></> :
                                <div className="home__tasks-empty">
                                    <PlaylistAddCheckIcon className="home__tasks-icon" />
                                    <h3>Você ainda não tem tarefas registradas</h3>
                                </div>  
                            )
                        )
                        }
                        {!sideBar && (
                            <button
                                className="home__tasks-button"
                                onClick={() => setNewItem(true)}    
                            >
                                <AddIcon />
                            </button>
                        )}                        
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Home;