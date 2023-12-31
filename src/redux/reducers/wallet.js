import { CURRENCIES, EXPENSES, REMOVE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };

  case EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };

  case REMOVE_EXPENSES:
    return { ...state, expenses: action.payload };

  default:
    return state;
  }
};

export default wallet;
