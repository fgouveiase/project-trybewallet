import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisable: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.loginValidation();
    });
  };

  loginValidation = () => {
    const { email, password } = this.state;
    const minLenght = 6;
    const validEmail = /\S+@\S+\.\S+/;
    const testEmailValidation = validEmail.test(email);
    const validPassword = password.length >= minLenght;
    if (testEmailValidation === true && validPassword === true) {
      this.setState({ isDisable: false });
    } else {
      this.setState({ isDisable: true });
    }
  };

  clickDispatchEmailBtn = () => {
    const { history, dispatch } = this.props;
    const { email } = this.state;
    dispatch(userLogin(email));
    history.push('/carteira');
  };

  render() {
    const { isDisable } = this.state;
    return (
      <div>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ isDisable }
          onClick={ this.clickDispatchEmailBtn }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default connect()(Login);
