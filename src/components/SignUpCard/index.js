import { useState } from 'react';
import './SignUpCard.css';
import Input from '../Input';
import Button from '../Button';
import ButtonGoogleConnect from '../ButtonGoogleConnect';
import ButtonGithubConnect from '../ButtonGithubConnect';
import { Link } from 'react-router-dom';
import { auth } from '../../services/firebase';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { Alert } from '@mui/material';

const SignUpCard = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // eslint-disable-next-line
    const [user, setUser] = useState();

    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => setUser(result.user))
        .catch((error) => console.error(error));
    }

    function handleGithubSignIn() {
        const provider = new GithubAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => setUser(result.user))
        .catch((error) => console.error(error));
    }

    function handleSignIn() {
        if (!email || !password) {
            return <Alert saverity="error">Informe o e-mail e senha.</Alert>
        }
        setIsLoading(true);
        auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            console.error(error);
            setIsLoading(false);

            if (error.code === 'auth/invalid-email') {
                return <Alert saverity="error">E-mail inválido.</Alert>
            }

            if (error.code === 'auth/user-not-found') {
                return <Alert saverity="error">E-mail ou senha inválido.</Alert>
            }

            if (error.code === 'auth/wrong-password') {
                return <Alert saverity="error">E-mail ou senha inválido.</Alert>
            }

            return <Alert saverty="error">Não foi possível acessar.</Alert>
        });
    }

    return (
        <article className="signup__card">
            <h3>Crie Sua Conta</h3>
            <h4>Preencha os campos para criar sua conta.</h4>
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
        </article>
    )
}

export default SignUpCard;