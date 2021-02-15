import React from "react"
import { useState } from "react"

const AmortizationForm = props => {

  const [loanAmount, setLoanAmount] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [numYears, setNumYears] = useState("")
  const [interval, setInterval] = useState("yearly")

  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // const getFinalAmount = () => {
  //   let finalAmount = 0
  //   if (startingAmount && interestRate && numYears && interval) {
  //     if (interval === "yearly") {
  //       finalAmount = (startingAmount * (1 + (interestRate * .01))**numYears)
  //     } else {
  //       finalAmount = (startingAmount * (1 + ((interestRate * .01) / 12))**(12 * numYears))
  //     }
  //   }
  //   return finalAmount
  // }

  return (
    <div>
      <h1 className="cool-font">Amortization Calculator</h1>
      <form>
          <label className="cool-font">
            Loan amount:&nbsp;$
            <input className="cool-font" type="text" size="18" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
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
      
      {/* {getFinalAmount() ? 
        <>
        <br />
        <br />

        <div className="cool-font">
          <h2>
            If <strong>${numberWithCommas(startingAmount)}</strong> 
            &nbsp;were compounded <strong>{interval}</strong> at <strong>{interestRate}%</strong> for <strong>{numberWithCommas(numYears)}</strong> 
            &nbsp;{numYears === "1" ? "year" : "years"}, you would have...
          </h2>
        </div>
    
        <h1 className="cool-big-font">{`$${numberWithCommas(getFinalAmount().toFixed(2))}`}</h1>

        <div className="cool-font">
          <h2>That's an increase of&nbsp;
            <strong>${numberWithCommas((getFinalAmount() - startingAmount).toFixed(2))}</strong>
          </h2>
        </div>
        </>
        : 
        <></>
      } */}
    </div>
  )
}

export default AmortizationForm