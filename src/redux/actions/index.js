export const USER_LOGIN = 'USER_LOGIN';
export const CURRENCIES = 'CURRENCIES';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

export const apiCurrencies = (currencies) => ({
  type: CURRENCIES,
  payload: currencies,
});

export const saveCurrencies = (data) => {
  const currencieKeys = Object.keys(data);
  const filterCurrencies = currencieKeys.filter((currency) => currency !== 'USDT');
  return filterCurrencies;
};

export function fetchApi() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => dispatch(apiCurrencies(saveCurrencies(data))));
  };
}
