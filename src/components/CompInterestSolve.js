import React from "react"
import CompInterestOutput from "./CompInterestOutput"

const CompInterestSolve = (startingAmount=0, interestRate=0, numYears=0, interval="yearly") => {

  let finalAmount

  if (interval === "yearly") {
    finalAmount = (startingAmount * (1 + (interestRate * .01))**numYears)
  } else {
    finalAmount = (startingAmount * (1 + ((interestRate * .01) / 12))**(12 * numYears))
  }

  return (
    <>
      <h1>Test</h1>
      <CompInterestOutput finalAmount={finalAmount} startingAmount={startingAmount} 
      interestRate={interestRate} numYears={numYears} interval={interval} />
    </>
  )
}

export default CompInterestSolve