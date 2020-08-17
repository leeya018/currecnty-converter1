import React from 'react'
import "./App.css"

export default function Converter(props) {
  const {
    currenciesOptions,
    selectedCurrency,
    setSelectedCurrency,
    amount,
    onChangeAmount
  } = props
  return (
    <div className="converter">
      <input className="input"
        type="number"
        value={amount}
        onChange={onChangeAmount}
      />
      <select className="selection" name="" id=""
        value={selectedCurrency}
        onChange={setSelectedCurrency}>
        {
          currenciesOptions.map(option => (
            <option key={option} value={option} >{option} </option>
          ))}
      </select>
    </div>
  )
}







