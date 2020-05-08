import React from "react";
import './auth.css'
import Transition from "react-transition-group/Transition";
import {useDispatch, useSelector} from "react-redux";
import {loginFormOpen, registrationFormOpen} from "../../store/actions/login";

const LoginForm = () => {

    const dispatch = useDispatch();

    return (
        <>
            <h5>Welcome back!</h5>
            <p>Happy to see you again!</p>
            <form className='form-container'>
                <div className="input-field">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="username" type="text" className="validate"/>
                    <label htmlFor="username">Username</label>
                </div>
                <div className="input-field">
                    <i className="material-icons prefix">lock</i>
                    <input id="password" type="password" className="validate"/>
                    <label htmlFor="password">Password</label>
                </div>
                <p className='pass-link'>Forgot password?</p>
                <button className='login-btn'>LOGIN</button>
                <span>Don't have an Account? </span>
                <span className='sign-up-link' onClick={() => dispatch(registrationFormOpen())}> Sign up</span>
            </form>
        </>
    )
};

const RegistrationForm = () => {

    const dispatch = useDispatch();

    return (
        <>
            <h5>New here?</h5>
            <p>Join us today! It takes only few steps</p>
            <form className='form-container'>
                <div className="input-field">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="username" type="text" className="validate"/>
                    <label htmlFor="username">Username</label>
                </div>
                <div className="input-field">
                    <i className="material-icons prefix">email</i>
                    <input id="email" type="email" className="validate"/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                    <i className="material-icons prefix">lock</i>
                    <input id="password" type="password" className="validate"/>
                    <label htmlFor="password">Password</label>
                </div>
                <p className='pass-link'>Forgot password?</p>
                <button className='login-btn'>SIGN UP</button>
                <span>Already have an account?  </span>
                <span className='sign-up-link' onClick={() => dispatch(registrationFormOpen())}> Login</span>
            </form>
        </>
    )
};

const Login = () => {

    const isLoginFormOpen = useSelector(state => state.loginForm.isLoginForm);
    const registration = useSelector(state => state.loginForm.registration);
    const dispatch = useDispatch();

    const content = registration ? <RegistrationForm /> : <LoginForm />;

    const clickHandler = () => {
        dispatch(loginFormOpen());
        if (registration) dispatch(registrationFormOpen());
    };

    return (
        <Transition in={isLoginFormOpen} timeout={0}>
            {
                (state) => {
                    return (
                        <div className={`login-container ${state}`}>
                            <div className='login-empty-block' onClick={clickHandler}></div>
                            <div className='auth-container'>
                                <Transition in={registration} timeout={200}>
                                    {
                                        (state) => {
                                            return (
                                                <div className={`login-form-container ${state}`}>
                                                    {content}
                                                </div>
                                            )
                                        }
                                    }
                                </Transition>
                            </div>
                        </div>
                    )
                }
            }
        </Transition>
    )
};

export default Login;