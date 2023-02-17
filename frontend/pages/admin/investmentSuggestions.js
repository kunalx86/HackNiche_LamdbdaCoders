import { useState } from "react";

export function InvestmentSuggestions() {
  const [suggestions, setSuggestions] = useState([]);
  
  // async function getInvestmentSuggestions() {
  //   const response = await fetch('https://ml-api-endpoint.com/suggest-investments', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       riskFactor: 5,
  //       capital: 10000,
  //       timePeriod: '3 years',
  //     }),
  //   });

  //   const data = await response.json();
  //   setSuggestions(data);
  // }

  return (
    <div>
      <button onClick={getInvestmentSuggestions}>
        Get Investment Suggestions
      </button>
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion.id}>
            {suggestion.name}: {suggestion.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
