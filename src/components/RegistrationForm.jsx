import React,{ useState } from "react";

import "./registerationform.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    npiNumber: '',
    businessAddress: '',
    telephoneNumber: '',
    emailAddress: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any additional logic like validation or API calls
    console.log(formData);
  };

  return (
    <div>
      <h2>Healthcare Provider Registration</h2>
    
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="npiNumber">NPI Number:</label>
        <input
          type="number"
          id="npiNumber"
          name="npiNumber"
          value={formData.npiNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="businessAddress">Business Address:</label>
        <input
          type="text"
          id="businessAddress"
          name="businessAddress"
          value={formData.businessAddress}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="telephoneNumber">Telephone Number:</label>
        <input
          type="tel"
          id="telephoneNumber"
          name="telephoneNumber"
          value={formData.telephoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="emailAddress">Email Address:</label>
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default RegistrationForm;