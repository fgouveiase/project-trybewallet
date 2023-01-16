import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWith';
import WalletForm from '../../components/WalletForm';
import Wallet from '../../pages/Wallet';

describe('Testando o componente WalletForm', () => {
  test('Existe botão de adicionar despesas', () => {
    renderWithRouterAndRedux(<WalletForm />);
    const btnSespesa = screen.getAllByRole('button');

    expect(btnSespesa).toHaveLength(1);
  });

  test('Verificando existe o campo para inserir as informações da despesa.', () => {
    renderWithRouterAndRedux(<WalletForm />);

    const description = screen.getByTestId('description-input');

    expect(description).toBeInTheDocument();

    const value = screen.getByTestId('value-input');

    expect(value).toBeInTheDocument();

    const currency = screen.getByTestId('currency-input');

    expect(currency).toBeInTheDocument();

    const method = screen.getByTestId('method-input');

    expect(method).toBeInTheDocument();

    const tag = screen.getByTestId('tag-input');

    expect(tag).toBeInTheDocument();
  });

  test('testa se ao clicar no botão o valor dos inputs é limpo ', () => {
    renderWithRouterAndRedux(<Wallet />);
    const inputExpenses = screen.getByTestId('value-input');
    const inputDescription = screen.getByTestId('description-input');
    const btn = screen.getByRole('button', {
      name: /adicionar despesa/i,
    });

    userEvent.type(inputExpenses, 5);
    userEvent.type(inputDescription, 'botafogo');
    userEvent.click(btn);

    expect(inputExpenses).toHaveTextContent('');
    expect(inputDescription).toHaveTextContent('');
  });
});
