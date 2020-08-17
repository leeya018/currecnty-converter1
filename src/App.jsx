import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from "./CurrencyRow";

const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {
  const [currenciesOptions, setCurrenciesOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrncy, setAmountInFromCurrncy] = useState(true)
  const [exchangeRate, setExchangeRate] = useState()

  let fromAmount, toAmount;

  if (amountInFromCurrncy) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }


  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      let EXCHANGE_URL = `${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`
      fetch(EXCHANGE_URL).then(res => res.json()).
        then(data => {
          setExchangeRate(data.rates[toCurrency])
        })
    }
  }, [fromCurrency, toCurrency])
  

  useEffect(() => {
    fetch(BASE_URL).
      then(res => res.json()).
      then(data => {
        console.log(data)
        let firstCurrency = Object.keys(data.rates)[0]
        setExchangeRate(data.rates[firstCurrency])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setCurrenciesOptions([data.base, ...Object.keys(data.rates)])
      })
  }, [])
  

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrncy(true)
  }


  function handleToAmountChnage(e) {
    setAmount(e.target.value)
    setAmountInFromCurrncy(false)
  }


  return (
    <div className="app">
      <h1 className="title">Convert</h1>
      <CurrencyRow
        currenciesOptions={currenciesOptions}
        selectedCurrency={fromCurrency}
        setSelectedCurrency={(e) => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount} />
      <div className="equals">=</div>
      <CurrencyRow
        currenciesOptions={currenciesOptions}
        selectedCurrency={toCurrency}
        setSelectedCurrency={(e) => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChnage}
        amount={toAmount}
      />
      <p>Copy rights reserved : Lee Yahav</p>
    </div>
  );
}
export default App;
