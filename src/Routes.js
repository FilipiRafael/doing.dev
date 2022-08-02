import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

export function AppRoutes() {

    const [user, setUser] = useState('');
    const [isAuth, setIsAuth] = useState(false);

    return (
        <Router>
            <Routes>
                {isAuth ? (
                    <Route path="/home" element={<Home user={user} setUser={setUser} setIsAuth={setIsAuth} />} />
                ) : (
                    <Fragment>
                        <Route path="/" element={<SignIn setUser={setUser} setIsAuth={setIsAuth} />} />
                        <Route path="/signup" element={<SignUp setUser={setUser} setIsAuth={setIsAuth} />} />
                    </Fragment>
                )}
            </Routes>
        </Router>
    )
}

