import './SignInCard.css';
import Input from '../Input';
import Button from '../Button';
import ButtonGoogleConnect from '../ButtonGoogleConnect';
import ButtonGithubConnect from '../ButtonGithubConnect';

const SignInCard = () => {
    return (
        <article className="signin__card">
            <h3>Faça Login</h3>
            <h4>Preencha os campos para acessar sua conta.</h4>
            <Input label="E-mail" placeholder="Digite o seu e-mail" type="email" />
            <Input label="Senha" placeholder="Digite sua senha" type="password" />
            <Button title="Acessar Conta" />
            <ButtonGoogleConnect title="Conectar-se com Google" />
            <ButtonGithubConnect title="Conectar-se com Github" />
            <h5>Não tem uma conta? 
                <span> Cadastre-se</span>
            </h5>
        </article>
    )
}

export default SignInCard;