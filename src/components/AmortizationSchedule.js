import React from "react"
import numberWithCommas from '../helpers/numberWithCommas.js'

const AmortizationSchedule = props => {
  let {loanAmount, interestRate, numYears, monthlyPayment} = props

  // need to get interest rate per month as a decimal
  let correctedInterestRate = interestRate / 12 * 0.01

  // rounding function
  const twoDecimals = num => {
    return Number.parseFloat(num).toFixed(2)
  }

  // const numberWithCommas = x => {
  //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }

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

  
    for (let i = 1; i <= (numYears * 12) - 1; i++) {
      interest = roundedBalance * correctedInterestRate
      roundedInterest = twoDecimals(interest)

      principal = roundedMonthlyPayment - roundedInterest
      roundedPrincipal = twoDecimals(principal)

      balance = balance - roundedPrincipal
      roundedBalance = twoDecimals(balance)

      object = {
        paymentNumber: i,
        paymentAmount: roundedMonthlyPayment,
        roundedInterest: roundedInterest,
        roundedPrincipal: roundedPrincipal,
        roundedBalance: roundedBalance
      }

      arrayOfObjects.push(object)

    }

    // get final interest
    interest = roundedBalance * correctedInterestRate
    roundedInterest = twoDecimals(interest)

    // get final principal
    principal = roundedBalance
    roundedPrincipal = twoDecimals(principal)

    // get final payment amount
    finalPaymentAmount = twoDecimals(Number.parseFloat(roundedPrincipal) + Number.parseFloat(roundedInterest))

    // update rounded balance
    roundedBalance = roundedBalance - roundedPrincipal

    object = {
      paymentNumber: numYears * 12,
      paymentAmount: finalPaymentAmount,
      roundedInterest: roundedInterest,
      roundedPrincipal: roundedPrincipal,
      roundedBalance: twoDecimals(roundedBalance)
    }

    arrayOfObjects.push(object)

    return arrayOfObjects.map((obj, paymentNumber) => {
      return (
        <tr key={paymentNumber}>
          <td>{numberWithCommas(obj.paymentNumber)}</td>
          <td>${numberWithCommas(obj.paymentAmount)}</td>
          <td>${numberWithCommas(obj.roundedInterest)}</td>
          <td>${numberWithCommas(obj.roundedPrincipal)}</td>
          <td>${numberWithCommas(obj.roundedBalance)}</td>
        </tr>
      )
    })
  }

  return (
    <>
      <h1 className="cool-font">Amortization Schedule</h1>
        <table id="amor-table">
          <tbody>
            <tr>
              <th>Payment No.</th>
              <th>Payment Amount</th>
              <th>Interest</th>
              <th>Principal</th>
              <th>Loan Remaining</th>
            </tr>
            {createSched(loanAmount, correctedInterestRate, numYears, monthlyPayment)}
          </tbody>
        </table>
    </>
  )
} 

export default AmortizationSchedule