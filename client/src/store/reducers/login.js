const initialState = {
    isLoginForm: false,
    registration: false,
};

const LoginForm = (state = initialState, action) => {

    switch (action.type) {

        case 'LOGIN_FORM_OPEN' :
            return {
                ...state,
                isLoginForm: !state.isLoginForm
            };

        case 'REGISTRATION_FORM_OPEN' :
            return {
                ...state,
                registration: !state.registration,
            };

        default: return state;
    }
};

export default LoginForm;