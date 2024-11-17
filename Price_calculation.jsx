import React from 'react';

function Price_calculation({ price }) {
  return (
    <div>
      <h2>Price Calculation</h2>
      {price ? <p>Total Price: ${price}</p> : <p>Price will appear here after selecting dates.</p>}
    </div>
  );
}

export default Price_calculation;
