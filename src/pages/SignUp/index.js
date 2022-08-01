import './SignUp.css';
import SignUpCard from '../../components/SignUpCard';
import 'animate.css';

const SignUp = ({ setUser, setIsAuth, name, setName }) => {

    return (
        <section className="signup__section">
            <img className="brand" src="/images/logo.svg" alt="brand" aria-hidden />
            <div>
                <img className="man" src="/images/man.svg" alt="man" aria-hidden />
            </div>
            <div className="content">
                <SignUpCard setUser={setUser} setIsAuth={setIsAuth} name={name} setName={setName} />
            </div>
        </section>
    )
}

export default SignUp;