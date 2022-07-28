import React from 'react';
import './SignUp.css';
import SignUpCard from '../../components/SignUpCard';

const SignUp = () => {
    return (
        <section className="signup__section">
            <div>
                <img src="/images/man.svg" alt="man" aria-hidden />
            </div>
            <div className="content">
                <SignUpCard />
            </div>
        </section>
    )
}

export default SignUp;