import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from "./CurrencyRow";

const GET_CURRENCIES_URL = 'https://api.exchangeratesapi.io/latest'


function App() {
  const [currenciesOptions, setCurrenciesOptions] = useState([])
  console.log(currenciesOptions)

  useEffect(() => {
    fetch(GET_CURRENCIES_URL).
      then(res => res.json()).
      then(data => {
        setCurrenciesOptions([...Object.keys(data.rates), data.base])
      })
  }, [])



  return (
    <div className="app">

      <h1 className="title">Convert</h1>
      <CurrencyRow currenciesOptions={currenciesOptions}/>
      <div className="equals">=</div>
      <CurrencyRow currenciesOptions={currenciesOptions}/>
    </div>
  );
}
export default App;


