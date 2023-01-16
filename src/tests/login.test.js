import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testa o component Login', () => {
  test('Renderiza os elementos email, senha e entrar', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByText(/email/i);
    const inputPassword = screen.getByText(/senha/i);
    const btnEntrar = screen.getByRole('button');
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(btnEntrar).toBeInTheDocument();

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('Verifica o input para inserir e-mail e senha.', () => {
    renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByTestId('email-input');

    expect(emailInput).toBeInTheDocument();

    const inputSenha = screen.getByTestId('password-input');

    expect(inputSenha).toBeInTheDocument();
  });

  test('Verificando se os campos funcionam.', () => {
    renderWithRouterAndRedux(<App />);

    const USER_EMAIL = 'alguem@alguem.com';
    const USER_SENHA = '12345';

    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const btnEnter = screen.getByRole('button');

    userEvent.type(inputEmail, USER_EMAIL);
    userEvent.type(inputPassword, USER_SENHA);

    expect(inputEmail).toHaveValue(USER_EMAIL);
    expect(inputPassword).toHaveValue(USER_SENHA);

    userEvent.click(btnEnter);
  });
});
