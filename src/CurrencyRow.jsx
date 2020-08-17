import React from 'react'
import "./App.css"

export default function converter(props) {
  const { currenciesOptions } = props
  return (
    <div className="converter">
      <input className="input" type="number" />
      <select className="selection" name="" id="">
        {
          currenciesOptions.map(option => (
            <option key={option} value={option} >{option} </option>
          ))}
      </select>
    </div>
  )
}







