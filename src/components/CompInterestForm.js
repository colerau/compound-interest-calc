import React from 'react'
import { useState } from 'react'

const CompInterestForm = props => {

  const [startingAmount, setStartingAmount] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [numYears, setNumYears] = useState("")
  const [finalAmount, setFinalAmount] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    // console.log(`submitted starting amount ${startingAmount}`)
    // console.log(`submitted interest rate ${interestRate}`)
    // console.log(`submitted num years ${numYears}`)

    setFinalAmount(startingAmount * (1 + (interestRate * .01))**numYears)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Present value (starting amount):
          <input type="text" value={startingAmount} onChange={(e) => setStartingAmount(e.target.value)} />
        </label>
        <br />
        <label>
          Interest rate:
          <input type="text" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
        </label>
        <br />
        <label>
          Number of years:
          <input type="text" value={numYears} onChange={(e) => setNumYears(e.target.value)} />
        </label>
        <br />
        <input type="submit" />
      </form>
      
      {finalAmount ? 
        <h1>{`In ${numYears} years, you would have $${Math.round(finalAmount * 100) / 100}.`}</h1>
        : 
        <></>
      }

    </div>
  )
}

export default CompInterestForm