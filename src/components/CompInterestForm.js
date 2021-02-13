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
      <h1 className="cool-font">Compound Interest Calculator</h1>
      <form onSubmit={handleSubmit}>
          <label className="cool-font">
            Starting amount:&nbsp;$
            <input className="cool-font" type="text" size="18" value={startingAmount} onChange={(e) => setStartingAmount(e.target.value)} />
          </label>
          <br />
          <br />
          <label className="cool-font">
            Interest rate:&nbsp;
            <input className="cool-font" type="text" size="4" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
            %
          </label>
          <br />
          <br />
          <label className="cool-font">
            Number of years:&nbsp;
            <input className="cool-font" type="text" size="3" value={numYears} onChange={(e) => setNumYears(e.target.value)} />
          </label>
          <br />
          <br />
          <label className="cool-font">
            Compounding interval:&nbsp;
            <select className="cool-font" value={interval} onChange={(e) => setInterval(e.target.value)}>
              <option className="cool-font" value="yearly">yearly</option>
              <option className="cool-font" value="monthly">monthly</option>
            </select>
          </label>
          <br />
          <br />
          <br />
        <input type="submit" value="Calculate" className="cool-button" />
      </form>
      
      {finalAmount ? 
        <>
        <br />
        <br />
          <h1 className="cool-big-font">{`You will have $${numberWithCommas(finalAmount.toFixed(2))}`}</h1>
        </>
        : 
        <></>
      }

    </div>
  )
}

export default CompInterestForm