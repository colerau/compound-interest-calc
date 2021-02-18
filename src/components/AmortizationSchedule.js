import React, { useState } from "react"

const AmortizationSchedule = props => {
  let {loanAmount, interestRate, numYears, monthlyPayment} = props

  // need to get interest rate per month as a decimal
  let correctedInterestRate = interestRate / 12 * 0.01

  const twoDecimals = num => {
    return Number.parseFloat(num).toFixed(2)
  }

  const createSched = (loanAmount, correctedInterestRate, numYears, monthlyPayment) => {
    let balance = loanAmount
    let roundedBalance = twoDecimals(balance)
    let finalBalance

    let interest
    let roundedInterest

    let principal
    let roundedPrincipal

    let finalPaymentAmount
  
    for (let i = 1; i <= numYears * 12; i++) {
      interest = roundedBalance * correctedInterestRate
      roundedInterest = twoDecimals(interest)

      principal = monthlyPayment - roundedInterest
      roundedPrincipal = twoDecimals(principal)

      balance = balance - roundedPrincipal
      roundedBalance = twoDecimals(balance)

      console.log(`The Interest for Payment ${i} is ${roundedInterest}`)
      console.log(`The Principal for Payment ${i} is ${roundedPrincipal}`)
      console.log(`The Balance for Payment ${i} is ${roundedBalance}`)
    }

    finalBalance = roundedBalance
    finalPaymentAmount = finalBalance

    interest = roundedBalance * correctedInterestRate
    roundedInterest = twoDecimals(interest)

    principal = monthlyPayment - roundedInterest
    roundedPrincipal = twoDecimals(principal)

    roundedBalance = roundedBalance - finalPaymentAmount

    console.log(`The last payment amount is ${finalPaymentAmount}`)
    console.log(`The last Interest is ${roundedInterest}`)
    console.log(`The last Principal is ${roundedPrincipal}`)
    console.log(`The final Balance is ${roundedBalance}`)
  }

  return (
    <>
      {createSched(loanAmount, correctedInterestRate, numYears, monthlyPayment)}
    </>
  )
} 

export default AmortizationSchedule