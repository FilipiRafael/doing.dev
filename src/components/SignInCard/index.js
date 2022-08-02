import './SignInCard.css';
import Input from '../Input';
import Button from '../Button';
import ButtonGoogleConnect from '../ButtonGoogleConnect';
import ButtonGithubConnect from '../ButtonGithubConnect';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { Alert, AlertTitle } from '@mui/material';

const SignInCard = ({ setUser, setIsAuth }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    function handleUser(user) {
        setUser(user);
        setIsAuth(true);
        navigate('/home');
    }

    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => handleUser(result.user))
        .catch((err) => {
            console.error(err);
            setIsLoading(false);

            if (err.code === 'auth/invalid-email') {
                setError(true);
                return setErrorMessage('E-mail inválido.');
            }

            if (err.code === 'auth/user-not-found') {
                setError(true);
                return setErrorMessage('Usuário não encontrado.');
            }

            if (err.code === 'auth/wrong-password') {
                setError(true);
                return setErrorMessage('E-mail ou senha inválido.');
            }

            if (err.code === 'auth/account-exists-with-different-credential') {
                setError(true);
                return setErrorMessage('Conta existente em outro provedor.');
            }

            setError(true);
            return setErrorMessage('Não foi possível acessar.');
        })
    }

    function handleGithubSignIn() {
        const provider = new GithubAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => handleUser(result.user))
        .catch((err) => {
            console.error(err);
            setIsLoading(false);

            if (err.code === 'auth/invalid-email') {
                setError(true);
                return setErrorMessage('E-mail inválido.');
            }

            if (err.code === 'auth/user-not-found') {
                setError(true);
                return setErrorMessage('Usuário não encontrado.');
            }

            if (err.code === 'auth/wrong-password') {
                setError(true);
                return setErrorMessage('E-mail ou senha inválido.');
            }

            if (err.code === 'auth/account-exists-with-different-credential') {
                setError(true);
                return setErrorMessage('Conta existente em outro provedor.');
            }

            setError(true);
            return setErrorMessage('Não foi possível acessar.');
        })
    }

    function handleSignIn() {
        if (!email || !password) {
            setError(true);
            return setErrorMessage('Informe o e-mail e senha.');
        }
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => handleUser(result.user))
        .catch((err) => {
            console.error(err);
            setIsLoading(false);

            if (err.code === 'auth/invalid-email') {
                setError(true);
                return setErrorMessage('E-mail inválido.');
            }

            if (err.code === 'auth/user-not-found') {
                setError(true);
                return setErrorMessage('Usuário não encontrado.');
            }

            if (err.code === 'auth/wrong-password') {
                setError(true);
                return setErrorMessage('E-mail ou senha inválido.');
            }

            if (err.code === 'auth/account-exists-with-different-credential') {
                setError(true);
                return setErrorMessage('Conta existente em outro provedor.');
            }

            setError(true);
            return setErrorMessage('Não foi possível acessar.');
        })
    }

    return (
        <article className="signin__card">
            <h3>Faça Login</h3>
            <h4>Preencha os campos para acessar sua conta.</h4>
            <Input label="E-mail" placeholder="Digite o seu e-mail" type="email" setInput={setEmail} />
            <Input label="Senha" placeholder="Digite sua senha" type="password" setInput={setPassword} />
            <Button title="Acessar Conta" isLoading={isLoading} onClick={handleSignIn} />
            <ButtonGoogleConnect title="Conectar-se com Google" onClick={handleGoogleSignIn} />
            <ButtonGithubConnect title="Conectar-se com Github" onClick={handleGithubSignIn} />
            <h5>Não tem uma conta? 
                <Link className="link" to="/signup">
                    Cadastre-se
                </Link>
            </h5>
            {error && <Alert className='signin__alert' severity='error'>
                <AlertTitle>Acessar conta</AlertTitle>
                {errorMessage}
            </Alert>}
        </article>
    )
}

export default SignInCard;