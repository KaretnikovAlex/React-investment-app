import { calculateInvestmentResults } from '../util/investment.js'

export function Results({ input }) {

    console.log(calculateInvestmentResults(input))
    return (
        <>
            <p>...Results</p>

        </>
    )
}