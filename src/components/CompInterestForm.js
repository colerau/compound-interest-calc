import React from 'react'
import { useState } from 'react'

const CompInterestForm = props => {

  const [startingAmount, setStartingAmount] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [numYears, setNumYears] = useState("")
  const [interval, setInterval] = useState("yearly")
  const [finalAmount, setFinalAmount] = useState("")


  const handleSubmit = e => {
    e.preventDefault()

    if (interval === "yearly") {
      setFinalAmount(startingAmount * (1 + (interestRate * .01))**numYears)
    } else {
      setFinalAmount(startingAmount * (1 + ((interestRate * .01) / 12))**(12 * numYears))
    }
 
  }

  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Starting amount: $
          <input type="text" value={startingAmount} onChange={(e) => setStartingAmount(e.target.value)} />
        </label>
        <br />
        <label>
          Interest rate: &nbsp;
          <input type="text" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
          %
        </label>
        <br />
        <label>
          Number of years: &nbsp;
          <input type="text" value={numYears} onChange={(e) => setNumYears(e.target.value)} />
        </label>
        <br />
        <label>
          Compounding interval: 
          <select value={interval} onChange={(e) => setInterval(e.target.value)}>
            <option value="yearly">yearly</option>
            <option value="monthly">monthly</option>
          </select>
        </label>
        <br />
        <input type="submit" />
      </form>
      
      {finalAmount ? 
        <h1>{`In ${numYears} years, you would have $${numberWithCommas(Math.round(finalAmount * 100) / 100)}`}</h1>
        : 
        <></>
      }

    </div>
  )
}

export default CompInterestForm