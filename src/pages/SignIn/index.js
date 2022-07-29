import SignInCard from '../../components/SignInCard';
import './SignIn.css';
import 'animate.css';

const SignIn = () => {
    return (
        <section className="signin__section">
            <img className="brand" src="/images/logo.svg" alt="brand" aria-hidden />
            <div>
                <img className="woman" src="/images/woman.svg" alt="man" aria-hidden />
            </div>
            <div className="content">
                <SignInCard />
            </div>
        </section>
    )
}

export default SignIn;