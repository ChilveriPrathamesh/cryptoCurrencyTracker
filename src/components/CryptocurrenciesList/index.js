// Write your JS code here

import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptoCurrencyData} = this.props
    return (
      <div className="crypto-container">
        <h1 className="app-title">Cryptocurrency Tracker</h1>
        <img
          className="crypto-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="crypto-currency-list">
          <div className="list-header">
            <p className="crypto-coin">Coin Type</p>
            <div className="values-container">
              <p className="crypto-coin-value">USD</p>
              <p className="crypto-coin-value">EURO</p>
            </div>
          </div>
          <ul className="crypto-currency-list-container">
            {cryptoCurrencyData.map(eachCrypto => (
              <CryptocurrencyItem
                key={eachCrypto.id}
                cryptoCurrencyDetails={eachCrypto}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
