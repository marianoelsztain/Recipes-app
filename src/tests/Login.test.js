import React from 'react';
import renderWithRouter from './services/renderWithRouter';
import App from '../App';

describe('A tela de Login: ', () => {
  it('deve ter um input de email', () => {
    const { getByPlaceholderText } = renderWithRouter(<App />);
    const emailInput = getByPlaceholderText('E-mail');
    expect(emailInput).toBeInTheDocument();
  });

  it('deve ter um input de senha', () => {
    const { getByPlaceholderText } = renderWithRouter(<App />);
    const passwordInput = getByPlaceholderText('Password');
    expect(passwordInput).toBeInTheDocument();
  });

  it('deve ter um botão para entrar', () => {
    const { getByRole } = renderWithRouter(<App />);
    const loginButton = getByRole('button', { name: /entrar/i });
    expect(loginButton).toBeInTheDocument();
  });
});
