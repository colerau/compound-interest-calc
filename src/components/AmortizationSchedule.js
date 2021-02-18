import React, { useState } from "react"

const AmortizationSchedule = props => {
  let {loanAmount, interestRate, numYears, monthlyPayment} = props

  // need to get interest rate per month as a decimal
  let correctedInterestRate = interestRate / 12 * 0.01

  // rounding function
  const twoDecimals = num => {
    return Number.parseFloat(num).toFixed(2)
  }

  const createSched = (loanAmount, correctedInterestRate, numYears, monthlyPayment) => {
    let roundedMonthlyPayment = twoDecimals(monthlyPayment)
    let balance = loanAmount
    let roundedBalance = twoDecimals(balance)
    let finalBalance

    let interest
    let roundedInterest

    let principal
    let roundedPrincipal

    let finalPaymentAmount

    let arrayOfObjects = []

    let object

  
    for (let i = 1; i <= numYears * 12; i++) {
      interest = roundedBalance * correctedInterestRate
      roundedInterest = twoDecimals(interest)

      principal = roundedMonthlyPayment - roundedInterest
      roundedPrincipal = twoDecimals(principal)

      balance = balance - roundedPrincipal
      roundedBalance = twoDecimals(balance)

      // console.log(`The Interest for Payment ${i} is ${roundedInterest}`)
      // console.log(`The Principal for Payment ${i} is ${roundedPrincipal}`)
      // console.log(`The Balance for Payment ${i} is ${roundedBalance}`)

      object = {
        paymentNumber: i,
        paymentAmount: roundedMonthlyPayment,
        roundedInterest: roundedInterest,
        roundedPrincipal: roundedPrincipal,
        roundedBalance: roundedBalance
      }

      arrayOfObjects.push(object)

    }

    return arrayOfObjects.map((obj, paymentNumber) => {
      return (
        <tr key={paymentNumber}>
          <td>{obj.paymentNumber}</td>
          <td>{obj.paymentAmount}</td>
          <td>{obj.roundedInterest}</td>
          <td>{obj.roundedPrincipal}</td>
          <td>{obj.roundedBalance}</td>
        </tr>
      )
    })

    // finalBalance = roundedBalance
    // finalPaymentAmount = finalBalance

    // interest = roundedBalance * correctedInterestRate
    // roundedInterest = twoDecimals(interest)

    // principal = monthlyPayment - roundedInterest
    // roundedPrincipal = twoDecimals(principal)

    // roundedBalance = roundedBalance - finalPaymentAmount

    // console.log(`The last payment amount is ${finalPaymentAmount}`)
    // console.log(`The last Interest is ${roundedInterest}`)
    // console.log(`The last Principal is ${roundedPrincipal}`)
    // console.log(`The final Balance is ${roundedBalance}`)
  }

  return (
    <>
      <h1>Amortization Schedule</h1>
      <center>
        <table>
          <tbody>
            <tr>
              <th>Payment #</th>
              <th>Payment Amount</th>
              <th>Interest</th>
              <th>Principal</th>
              <th>Balance</th>
            </tr>
            {createSched(loanAmount, correctedInterestRate, numYears, monthlyPayment)}
          </tbody>
        </table>
      </center>
    </>
  )
} 

export default AmortizationSchedule