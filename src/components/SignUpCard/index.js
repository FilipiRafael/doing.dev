import { useState } from 'react';
import './SignUpCard.css';
import Input from '../Input';
import Button from '../Button';
import ButtonGoogleConnect from '../ButtonGoogleConnect';
import ButtonGithubConnect from '../ButtonGithubConnect';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../services/firebase';

const SignUpCard = () => {

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

    // function handleSignIn() {
    //     if (!email || !password) {
    //       return Alert.alert("Entrar", "Informe o e-mail e senha.");
    //     }
    //     setIsLoading(true);
    //     auth()
    //     .signInWithEmailAndPassword(email, password)
    //     .catch((error) => {
    //       console.error(error);
    //       setIsLoading(false);
    
    //       if (error.code === 'auth/invalid-email') {
    //         return Alert.alert('Entrar', 'E-mail inválido.');
    //       } 
    
    //       if (error.code === 'auth/user-not-found') {
    //         return Alert.alert('Entrar', 'E-mail ou senha inválido.');
    //       }
    
    //       if (error.code === 'auth/wrong-password') {
    //         return Alert.alert('Entrar', 'E-mail ou senha inválido.');
    //       }
    
    //       return Alert.alert('Entrar', 'Não foi possível acessar.')
    //     });
    //   }

    return (
        <article className="signup__card">
            <h3>Crie Sua Conta</h3>
            <h4>Preencha os campos para criar sua conta.</h4>
            <Input label="Primeiro Nome" placeholder="Digite o seu primeiro nome" type="text" />
            <Input label="E-mail" placeholder="Digite o seu e-mail" type="email" />
            <Input label="Senha" placeholder="Digite sua senha" type="password" />
            <Button title="Criar Conta" />
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