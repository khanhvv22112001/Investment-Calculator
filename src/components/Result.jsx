import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";
export default function Result({ input }) {
  const valueInput = calculateInvestmentResults(input);
  const initialInvestment = valueInput[0].valueEndOfYear;
  console.log(valueInput);
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {valueInput.map((item, index) => {
          const total =
            item.valueEndOfYear +
            item.annualInvestment * (index + 1) -
            initialInvestment;
          const investedCapital = item.valueEndOfYear - total;
          return (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(total)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
