import React, { useState } from "react"

const AmortizationSchedule = props => {
  let {loanAmount, interestRate, numYears, monthlyPayment} = props

  // need to get interest rate per month as a decimal
  let correctedInterestRate = interestRate / 12 * 0.01

  const createSched = (loanAmount, correctedInterestRate, numYears, monthlyPayment) => {
  //   let balance = loanAmount
  //   debugger
  //   let roundedBalance = balance.toFixed(2)

  //   let interest
  //   let roundedInterest

  //   let principal
  //   let roundedPrincipal
  
  //   for (let i = 1; i <= numYears * 12; i++) {
  //     interest = roundedBalance * correctedInterestRate
  //     roundedInterest = interest.toFixed(2)

  //     principal = monthlyPayment - roundedInterest
  //     roundedPrincipal = principal.toFixed(2)

  //     balance = balance - roundedPrincipal
  //     roundedBalance = balance.toFixed(2)

  //     console.log(`The Interest for Payment ${i} is ${roundedInterest}`)
  //     console.log(`The Principal for Payment ${i} is ${roundedPrincipal}`)
  //     console.log(`The Balance for Payment ${i} is ${roundedBalance}`)
  //   }
  }

  return (
    <>
      {createSched(loanAmount, correctedInterestRate, numYears, monthlyPayment)}
    </>
  )
} 

export default AmortizationSchedule