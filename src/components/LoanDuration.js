import React, { useState } from 'react'

const LoanDuration = props => {

  const [monthlyPayment, setMonthlyPayment] = useState("")
  const [loanAmount, setLoanAmount] = useState("")
  const [interestRate, setInterestRate] = useState("")

  return (
    <>
      <h1 className="cool-font">Loan Duration Calculator</h1>

      {/* work on this */}
      <form>
        <label className="cool-font">
          Loan amount:&nbsp;$
          <input className="cool-font" type="text" size="19" maxLength="18" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
        </label>
        <br />
        <br />
        <label className="cool-font">
          Interest rate:&nbsp;
          <input className="cool-font" type="text" size="6" maxLength="6" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
          %
        </label>
        <br />
        <br />
        {/* <label className="cool-font">
          Number of years:&nbsp;
          <input className="cool-font" type="text" size="2" maxLength="2" value={numYears} onChange={(e) => setNumYears(e.target.value)} />
        </label> */}
      </form>

    </>
  )
}

export default LoanDuration