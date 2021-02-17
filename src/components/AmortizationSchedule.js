import React, { useState } from "react"

const AmortizationSchedule = props => {
  let {loanAmount, interestRate, numYears, monthlyPayment} = props

  // need to get interest rate per month as a decimal
  let correctedInterestRate = interestRate / 12 * 0.01

  const createSched = (loanAmount, correctedInterestRate, numYears, monthlyPayment) => {
    let balance = loanAmount
    let interest
    let principal
  
    for (let i = 1; i <= numYears * 12; i++) {
      interest = balance * correctedInterestRate
      principal = monthlyPayment - interest
      balance = balance - principal

      console.log(`The Interest for Payment ${i} is ${interest}`)
      console.log(`The Principal for Payment ${i} is ${principal}`)
      console.log(`The Balance for Payment ${i} is ${balance}`)
    }
  }

  return (
    <>
      {createSched(loanAmount, correctedInterestRate, numYears, monthlyPayment)}
    </>
  )
} 

export default AmortizationSchedule