import React from 'react'
import { useState } from 'react'

const CompInterestForm = props => {

  const [startingAmount, setStartingAmount] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [numYears, setNumYears] = useState("")
  const [interval, setInterval] = useState("yearly")

  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const getFinalAmount = () => {
    let finalAmount = 0
    if (startingAmount && interestRate && numYears && interval) {
      if (interval === "yearly") {
        finalAmount = (startingAmount * (1 + (interestRate * .01))**numYears)
      } else {
        finalAmount = (startingAmount * (1 + ((interestRate * .01) / 12))**(12 * numYears))
      }
    }
    return finalAmount
  }

  return (
    <div>
      <h1 className="cool-font">Compound Interest Calculator</h1>
      <form>
          <label className="cool-font">
            Starting amount:&nbsp;$
            <input className="cool-font" type="text" size="18" value={startingAmount} onChange={(e) => setStartingAmount(e.target.value)} />
          </label>
          <br />
          <br />
          <label className="cool-font">
            Interest rate:&nbsp;
            <input className="cool-font" type="text" size="6" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
            %
          </label>
          <br />
          <br />
          <label className="cool-font">
            Number of years:&nbsp;
            <input className="cool-font" type="text" size="5" value={numYears} onChange={(e) => setNumYears(e.target.value)} />
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
      </form>
      
      {getFinalAmount() ? 
        <>
        <br />
        <br />
          <h1>{`If $${numberWithCommas(startingAmount)} were compounded ${interval} for ${numYears} years, you would have...`}</h1>
          <h1 className="cool-big-font">{`$${numberWithCommas(getFinalAmount().toFixed(2))}`}</h1>
          <h1>{`That's an increase of $${numberWithCommas((getFinalAmount() - startingAmount).toFixed(2))}`}</h1>
        </>
        : 
        <></>
      }
    </div>
  )
}

export default CompInterestForm