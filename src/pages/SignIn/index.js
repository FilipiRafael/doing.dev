import SignInCard from '../../components/SignInCard';
import './SignIn.css';

const SignIn = () => {
    return (
        <section className="signin__section">
            <div>
                <img src="/images/woman.svg" alt="man" aria-hidden />
            </div>
            <div className="content">
                <SignInCard />
            </div>
        </section>
    )
}

export default SignIn;