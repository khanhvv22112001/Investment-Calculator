import { useState } from "react";
import Calculator from "./components/Caculator";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
  const [value, setValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 100,
    duration: 10,
  });
  const inputIsValue = value.duration >= 1;

  function handleChange(name, value) {
    setValue((prev) => ({ ...prev, [name]: +value }));
  }
  return (
    <main>
      <Header />
      <Calculator onChangeValue={handleChange} value={value} />
      {inputIsValue ? (
        <Result input={value} />
      ) : (
        <p className="center">Please enter a duration greater than zero</p>
      )}
    </main>
  );
}

export default App;
