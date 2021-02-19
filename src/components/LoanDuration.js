import React, { useState } from 'react'
import numberWithCommas from '../helpers/numberWithCommas.js'

const LoanDuration = props => {

  const [monthlyPayment, setMonthlyPayment] = useState("")
  const [loanAmount, setLoanAmount] = useState("")
  const [interestRate, setInterestRate] = useState("")

  const getFinalAmount = () => {
    let numerator 
    let denominator
    let finalAmount

    // need to get interest rate per month as a decimal
    let correctedInterestRate = interestRate / 12 * 0.01

    if (loanAmount && interestRate && monthlyPayment) {
      numerator = Math.log10(monthlyPayment) - Math.log10(monthlyPayment - (loanAmount * correctedInterestRate))

      denominator = Math.log10(1 + correctedInterestRate / 12)
    }

    finalAmount = numerator / denominator 

    return finalAmount
  }

  return (
    <>
      <h1 className="cool-font">Loan Duration Calculator</h1>

      <form>
        <label className="cool-font">
          Loan amount:&nbsp;$
          <input className="cool-font" type="text" size="19" maxLength="18" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
        </label>
        <br />
        <br />
        <label className="cool-font">
          Monthly Payment:&nbsp;$
          <input className="cool-font" type="text" size="16" maxLength="15" value={monthlyPayment} onChange={(e) => setMonthlyPayment(e.target.value)} />
        </label>
        <br />
        <br />
        <label className="cool-font">
          Interest rate:&nbsp;
          <input className="cool-font" type="text" size="6" maxLength="6" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
          %
        </label>
      </form>

      {getFinalAmount() ? 
        <>
        <br />
        <br />

        <div className="cool-font">
          <h2>
            It would take...
          </h2>
    
          {/* display and format final amount */}
          <h1 className="cool-big-font-2"><span className="orange">{numberWithCommas(Number.parseFloat(getFinalAmount()).toFixed(2))}</span> years or <span className="orange">{Math.ceil(getFinalAmount() / 12)}</span> months</h1>
        
          <h2>
            to pay off your <span className="orange">${numberWithCommas(loanAmount)}</span> loan
          </h2>
        </div>
        </>
        : 
        <></>
      }

    </>
  )
}

export default LoanDuration