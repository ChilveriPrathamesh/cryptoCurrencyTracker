// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, cryptoCurrencyData: []}

  componentDidMount() {
    this.getCryptoCurrencyData()
  }

  getCryptoCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)

    this.setState({
      cryptoCurrencyData: data.map(eachData => ({
        id: eachData.id,
        currencyName: eachData.currency_name,
        usdValue: eachData.usd_value,
        euroValue: eachData.euro_value,
        currencyLogo: eachData.currency_logo,
      })),
      isLoading: false,
    })
  }

  render() {
    const {isLoading, cryptoCurrencyData} = this.state
    return (
      <div className="app-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} widht={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptoCurrencyData={cryptoCurrencyData} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
