import React from 'react';
import './biiling_address.css';

function BillingAddress({ billingInfo, setBillingInfo, errors }) {
  return (
    <div>
      <form>
        <div id="bill_box">
          <input 
            className="input1" 
            type="text" 
            placeholder="Street Address" 
            value={billingInfo.street}
            onChange={e => setBillingInfo({ ...billingInfo, street: e.target.value })} 
          />
          <hr />
          <input 
            className="input1" 
            type="text" 
            placeholder="Apartment/Room" 
            value={billingInfo.apartment}
            onChange={e => setBillingInfo({ ...billingInfo, apartment: e.target.value })} 
          />
          <hr />
          <input 
            className="input1" 
            type="text" 
            placeholder="City" 
            value={billingInfo.city}
            onChange={e => setBillingInfo({ ...billingInfo, city: e.target.value })} 
          />
        
          <input 
            className="input1" 
            type="text" 
            placeholder="Zip" 
            value={billingInfo.zip}
            onChange={e => setBillingInfo({ ...billingInfo, zip: e.target.value })} 
          />
          <hr />
          <input 
            className="input1" 
            type="text" 
            placeholder="Postal Code" 
            value={billingInfo.postalCode}
            onChange={e => setBillingInfo({ ...billingInfo, postalCode: e.target.value })} 
          />
        </div>  
        <div>
          
          <br/><br/>
          <hr />
          <select 
            className="input1" 
            value={billingInfo.country}
            onChange={e => setBillingInfo({ ...billingInfo, country: e.target.value })}
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            {/* Add more countries as needed */}
          </select>
          <hr />
          <br/><br/>
          {errors && <div className="error">{errors}</div>}
        </div>
      </form>
    </div>
  );
}

export default BillingAddress;
