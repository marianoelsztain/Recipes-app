import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';

function Login() {
  const [localState, setLocalState] = useState({
    email: '',
    password: '',
    isDisabled: true,
  });
  const { email, password, isDisabled } = localState;
  const onChange = ({ target }) => {
    const { value, name } = target;
    setLocalState({
      ...localState,
      [name]: value,
    });
  };
  const onClick = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
  };

  const validateLoginInfo = () => {
    const minLength = 0;
    const minPassChar = 6;
    const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validated = password.length > minPassChar
      && password.length !== minLength
      && emailExp.test(email);
    if (validated) {
      setLocalState({
        ...localState,
        isDisabled: false,
      });
    } else {
      setLocalState({
        ...localState,
        isDisabled: true,
      });
    }
  };

  useEffect(() => {
    validateLoginInfo();
  }, [email, password, isDisabled]);

  return (
    <div className="Login-body">
      <form className="Login-form">
        <label htmlFor="email-input">
          <input
            data-testid="email-input"
            id="email-input"
            name="email"
            onChange={ onChange }
            placeholder="E-mail"
            type="text"
            value={ email }
          />
        </label>
        <label htmlFor="password-input">
          <input
            data-testid="password-input"
            id="password-input"
            name="password"
            onChange={ onChange }
            placeholder="Password"
            type="password"
            value={ password }
          />
        </label>
        <Link to="/comidas">
          <button
            data-testid="login-submit-btn"
            disabled={ isDisabled }
            onClick={ onClick }
            type="button"
          >
            Entrar
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
