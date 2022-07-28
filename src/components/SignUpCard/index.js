import './SignUpCard.css';
import Input from '../Input';
import Button from '../Button';
import ButtonGoogleConnect from '../ButtonGoogleConnect';
import ButtonGithubConnect from '../ButtonGithubConnect';

const SignUpCard = () => {
    return (
        <article className="signup__card">
            <h3>Crie Sua Conta</h3>
            <h4>Preencha os campos para criar sua conta.</h4>
            <Input label="Primeiro Nome" placeholder="Digite o seu primeiro nome" type="text" />
            <Input label="E-mail" placeholder="Digite o seu e-mail" type="email" />
            <Input label="Senha" placeholder="Digite sua senha" type="password" />
            <Button title="Criar Conta" />
            <ButtonGoogleConnect title="Registrar-se com Google" />
            <ButtonGithubConnect title="Registrar-se com Github" />
        </article>
    )
}

export default SignUpCard;