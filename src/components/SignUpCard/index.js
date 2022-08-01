import { useState } from 'react';
import './SignUpCard.css';
import Input from '../Input';
import Button from '../Button';
import ButtonGoogleConnect from '../ButtonGoogleConnect';
import ButtonGithubConnect from '../ButtonGithubConnect';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebase';
import { Alert, AlertTitle } from '@mui/material';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpCard = ({ setUser, setIsAuth, name, setName }) => {

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
        .catch((err) => console.error(err));
    }

    function handleGithubSignIn() {
        const provider = new GithubAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => handleUser(result.user))
        .catch((err) => console.error(err));
    }

    function handleSignIn() {
        if (!email || !password) {
            setError(true);
            return setErrorMessage('E-mail inválido.');
        }
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password, name)
        .then((result) => {
            setUser(result.user);
            setIsAuth(true);
            navigate('/home');
        })
        .catch((err) => {
            console.error(err.code);
            setIsLoading(false);

            if (error.code === 'auth/invalid-email') {
                setError(true);
                setErrorMessage('E-mail inválido.');
            }

            if (error.code === 'auth/user-not-found') {
                setError(true);
                setErrorMessage('E-mail ou senha inválido.');
            }

            if (error.code === 'auth/wrong-password') {
                setError(true);
                setErrorMessage('E-mail ou senha inválido.');
            }

            if (error.code === 'auth/account-exists-with-different-credential') {
                setError(true);
                setErrorMessage('Conta existente em outro provedor.');
            }

            setError(true);
            setErrorMessage('Não foi possível acessar.');
    });
    }

    return (
        <article className="signup__card">
            <h3>Crie Sua Conta</h3>
            <h4>Preencha os campos para criar sua conta.</h4>
            <Input label="Primeiro Nome" placeholder="Digite o seu primeiro nome" type="text" setInput={setName} />
            <Input label="E-mail" placeholder="Digite o seu e-mail" type="email" setInput={setEmail} />
            <Input label="Senha" placeholder="Digite sua senha" type="password" setInput={setPassword} />
            <Button title="Criar Conta" onClick={handleSignIn} isLoading={isLoading} />
            <ButtonGoogleConnect title="Registrar-se com Google" onClick={handleGoogleSignIn} />
            <ButtonGithubConnect title="Registrar-se com Github" onClick={handleGithubSignIn} />
            <h5>Já tem uma conta? 
                <Link className="link" to="/">
                    Faça Login
                </Link>
            </h5>
            {error && <Alert className='signup__alert' severity='error'>
                <AlertTitle>Criar conta</AlertTitle>
                {errorMessage}
            </Alert>}
        </article>
    )
}

export default SignUpCard;