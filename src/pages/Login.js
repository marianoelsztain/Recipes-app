import React from 'react';
import '../css/Login.css';

function Login() {
  const isDisabled = true;
  return (
    <div className="Login-body">
      <form>
        <label>
          <input
            type="text"
            placeholder="E-mail"
            id="email-input"
            data-testid="email-input"
          />
        </label>
        <label>
          <input
            type="text"
            id="password-input"
            placeholder="Password"
            data-testid="password-input"
          />
        </label>
        <button
          data-testid="login-submit-btn"
          type="button"
          disabled={isDisabled}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
