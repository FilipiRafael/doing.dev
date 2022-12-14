import SignInCard from '../../components/SignInCard';
import './SignIn.css';
import 'animate.css';

const SignIn = ({ setUser, setIsAuth }) => {
    return (
        <section className="signin__section">
            <img className="brand" src="/images/logo.svg" alt="brand" aria-hidden />
            <div className="content">
                <SignInCard
                    setUser={setUser}
                    setIsAuth={setIsAuth}
                />
            </div>
            <div>
                <img className="woman" src="/images/woman.svg" alt="man" aria-hidden />
            </div>
        </section>
    )
}

export default SignIn;