export const USER_LOGIN = 'USER_LOGIN';
export const CURRENCIES = 'CURRENCIES';
export const EXPENSES = 'EXPENSES';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

export const currencyAction = (expenses) => ({
  type: CURRENCIES,
  payload: expenses,
});

export const expenseAction = (expenses) => ({
  type: EXPENSES,
  payload: expenses,
});

const fetchApi = async () => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(URL);
  const json = await response.json();
  return json;
};

export const currencyApi = () => async (dispatch) => {
  const data = await fetchApi();
  delete data.USDT;
  const curr = Object.keys(data);
  dispatch(currencyAction(curr));
};

export const currencyRate = () => async () => {
  const data = await fetchApi();
  delete data.USDT;
  return data;
};
