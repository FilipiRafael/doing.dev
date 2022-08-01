import './SignUp.css';
import SignUpCard from '../../components/SignUpCard';
import 'animate.css';

const SignUp = () => {

    return (
        <section className="signup__section">
            <img className="brand" src="/images/logo.svg" alt="brand" aria-hidden />
            <div>
                <img className="man" src="/images/man.svg" alt="man" aria-hidden />
            </div>
            <div className="content">
                <SignUpCard />
            </div>
        </section>
    )
}

export default SignUp;