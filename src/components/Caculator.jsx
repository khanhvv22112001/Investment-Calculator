import { useState } from "react";

export default function Calculator({ onChangeValue, value }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            value={value.initialInvestment}
            onChange={(e) => onChangeValue("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            value={value.annualInvestment}
            onChange={(e) => onChangeValue("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected return</label>
          <input
            type="number"
            value={value.expectedReturn}
            onChange={(e) => onChangeValue("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            value={value.duration}
            onChange={(e) => onChangeValue("duration", e.target.value)}
          />
        </p>
      </div>
    </div>
  );
}
