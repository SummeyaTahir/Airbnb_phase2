import React, { useState } from 'react';

function Checkin_out({ fetchPrice }) {
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');

  const handleCheckinChange = (e) => setCheckin(e.target.value);
  const handleCheckoutChange = (e) => setCheckout(e.target.value);

  const handleFetchPrice = () => {
    // Replace 'listingId' with the actual listing ID you are working with
    fetchPrice('listingId');
  };

  return (
    <div>
      <input 
        type="date" 
        value={checkin} 
        onChange={handleCheckinChange} 
        placeholder="Check-in Date" 
      />
      <input 
        type="date" 
        value={checkout} 
        onChange={handleCheckoutChange} 
        placeholder="Check-out Date" 
      />
      <button onClick={handleFetchPrice}>Get Price</button>
    </div>
  );
}

export default Checkin_out;
