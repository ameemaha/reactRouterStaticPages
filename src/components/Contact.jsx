import React from "react";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form submission logic here
      alert("Form submitted successfully!");
    } else {
      alert("Form submission failed due to validation errors.");
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = "Name is required";
    } else if (data.name.length < 4) {
      errors.name = "Name must be at least 4 characters long";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }

    if (!data.message.trim()) {
      errors.message = "Message is required";
    } else if (data.message.length < 4) {
      errors.message = "Username must be at least 4 characters long";
    }



    return errors;
  };
  return (
    <div>
      
      <div className="container mt-5">
      <h1>Contact Us</h1>
        <div className="row">
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <h3>Contact Information:</h3>
            <h4><FaMapMarkerAlt style={{color:"red",fontSize:"20px"}} />Kukatpally — Hyderabad</h4>
            <p>#205, 2nd Floor, Fortune Signature, Near JNTU Metro Station, Kukatpally, Hyderabad, Telangana 500085</p>

            <h4><FaMapMarkerAlt style={{color:"red",fontSize:"20px"}} />Gachibowl — Hyderabad</h4>
            <p>2nd Floor, Leeway, BP Raju Marg, Opp. Sarath City Capital Mall, Beside Subbayagari Hotel, Laxmi Cyber City, Whitefields, Kondapur, Telangana 500081</p>
          
            <h4><FaPhoneAlt  style={{color:"red",fontSize:"20px"}} /> Phone/Whatsapp: </h4>
            <p>+91-1800 412 2416 / +91-6304126766 / +91-9347804375</p>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
          <h2 className="form-title">Contact Form</h2>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name:</label>
              <input
                className="form-control"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>
            <div className="col-md-6">
              <label className="form-label">Email:</label>
              <input
                className="form-control"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>
            <div className="col-md-12">
              <label className="form-label">Message:</label>
              <textarea
                className="form-control"
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
