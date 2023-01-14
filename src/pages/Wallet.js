import React, { Component } from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
          <WalletForm />
        </header>
      </div>
    );
  }
}

export default Wallet;
