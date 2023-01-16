import React, { Component } from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

class Wallet extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
          <WalletForm />
          <Table />
        </header>
      </div>
    );
  }
}

export default Wallet;
