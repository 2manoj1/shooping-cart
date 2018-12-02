import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTable from './components/ProductTable';
import PlaceOrder from './components/PlaceOrder';
import { Provider } from 'react-redux';
import store from './redux/store';
import OrderDetails from './components/OrderDetails';
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <ProductTable />
          <hr />
          <PlaceOrder />
          <hr />
          <OrderDetails />
        </div>
      </Provider>
    );
  }
}


export default App;
