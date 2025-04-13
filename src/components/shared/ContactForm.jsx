import React, { useState, useEffect, useRef } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    breed: '',
    size: '',
    age: '',
    service: '',
    duration: '',
    startDate: '',
    specificStartDate: '',
    endDate: '',
    specificEndDate: '',
    zipCode: '',
    message: ''
  });

  // Create refs for all select elements
const sizeSelectRef = useRef(null);
const ageSelectRef = useRef(null);
const serviceSelectRef = useRef(null);
const durationSelectRef = useRef(null);
const endDateSelectRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handle clearing of specific dates
    if (name === 'specificEndDate' && value === '') {
      setFormData(prevState => ({
        ...prevState,
        endDate: '',
        specificEndDate: ''
      }));
    } else if (name === 'specificStartDate' && value === '') {
      setFormData(prevState => ({
        ...prevState,
        startDate: '',
        specificStartDate: ''
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
    // If this is a select element, add/remove the has-value class
if (e.target.tagName === 'SELECT') {
  // Check if the selected value is not the default/empty option
  if (value && value !== '' && !value.includes('Select') && value !== 'specific') {
    e.target.classList.add('has-value');
  } else {
    e.target.classList.remove('has-value');
  }
}
  };

  // Update select classes when form data changes
useEffect(() => {
  // Array of refs and their corresponding form data fields
  const selectRefs = [
    { ref: sizeSelectRef, field: 'size' },
    { ref: ageSelectRef, field: 'age' },
    { ref: serviceSelectRef, field: 'service' },
    { ref: durationSelectRef, field: 'duration' },
    { ref: endDateSelectRef, field: 'endDate' }
  ];
  
  // Update classes for all select elements
  selectRefs.forEach(({ ref, field }) => {
    if (ref.current) {
      const value = formData[field];
      if (value && value !== '' && !value.includes('Select') && value !== 'specific') {
        ref.current.classList.add('has-value');
      } else {
        ref.current.classList.remove('has-value');
      }
    }
  });
}, [formData]);



  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://formspree.io/f/xrbpozga', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form", error);
        alert("There was an error. Please try again later.");
      });
    
    // Optionally, reset the formData if needed:
    setFormData({
      name: '',
      email: '',
      phone: '',
      breed: '',
      size: '',
      age: '',
      service: '',
      duration: '',
      startDate: '',
      specificStartDate: '',
      endDate: '',
      specificEndDate: '',
      zipCode: '',
      message: ''
    });

    // Reset all select classes
[sizeSelectRef, ageSelectRef, serviceSelectRef, 
  durationSelectRef, endDateSelectRef].forEach(ref => {
   if (ref.current) {
     ref.current.classList.remove('has-value');
   }
 });
  };

  // If the form is submitted, display the thank-you message
  if (submitted) {
    return (
      <div className="contact-form-message">
        <p>Thank you! <p></p>I will be in touch shortly :)</p>
      </div>
    );
  }

  // Otherwise, render the form
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group short-input">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Puppy Lover"
          required
        />
      </div>

      <div className="form-group short-input">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="puppylover@puppyluvsd.com"
          required
        />
      </div>

      <div className="form-group short-input">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="123-456-7890"
        />
      </div>

      {/* Additional fields for dog info and service details */}
      <div className="form-group short-input">
        <label htmlFor="breed">Dog Breed:</label>
        <input
          type="text"
          id="breed"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
          placeholder="e.g., cutiest mix ever"
          required
        />
      </div>

      <div className="form-group short-input">
        <label htmlFor="size">Dog Size:</label>
        <select
          id="size"
          name="size"
          value={formData.size}
          onChange={handleChange}
          required
          ref={endDateSelectRef}
        >
          <option value="">Select size</option>
          <option value="small">Small (under 20 lbs)</option>
          <option value="medium">Medium (20-50 lbs)</option>
          <option value="large">Large (50+ lbs)</option>
        </select>
      </div>

      <div className="form-group short-input">
        <label htmlFor="age">Dog Age:</label>
        <select
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          ref={endDateSelectRef}
        >
          <option value="">Select age</option>
          <option value="puppy">Puppy (6-24 months)</option>
          <option value="mature">Mature Adult (2-6 years)</option>
          <option value="senior">Senior (7-11 years)</option>
          <option value="geriatric">Geriatric (12+ years)</option>
        </select>
      </div>

      <div className="form-group short-input">
        <label htmlFor="service">Type of Service:</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          ref={endDateSelectRef}
        >
          <option value="">Select service</option>
          <option value="drop-in-visits">Drop-in Visits</option>
          <option value="neighborhood-walks">Neighborhood Walks</option>
          <option value="dog-park-visits">Dog Park Visits</option>
          <option value="dog-beach-visits">Dog Beach Visits</option>
          <option value="hiking-adventures">Hiking Adventures</option>
          <option value="in-home-dog-sitting">In Home Dog Sitting</option>
        </select>
      </div>

      <div className="form-group short-input">
        <label htmlFor="duration">Duration:</label>
        <select
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          required
          ref={endDateSelectRef}
        >
          <option value="">Select duration</option>
          <option value="30min">30 Minutes</option>
          <option value="60min">60 Minutes</option>
          <option value="90min">90 Minutes</option>
          <option value="half-day">Half Day (8pm-8am)</option>
          <option value="full-day">Full Day (24 hrs)</option>
        </select>
      </div>

      <div className="form-group short-input">
        <label htmlFor="startDate">Start Date:</label>
        {formData.startDate === 'specific' ? (
          <input
            type="date"
            id="specificStartDate"
            name="specificStartDate"
            value={formData.specificStartDate}
            onChange={handleChange}
            required
            ref={endDateSelectRef}
          />
        ) : (
          <select
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            ref={endDateSelectRef}
          >
            <option value="">Select start date</option>
            <option value="asap">ASAP</option>
            <option value="specific">Select specific date</option>
          </select>
        )}
      </div>

      <div className="form-group short-input">
        <label htmlFor="endDate">End Date:</label>
        {formData.endDate === 'specific' ? (
          <input
            type="date"
            id="specificEndDate"
            name="specificEndDate"
            value={formData.specificEndDate}
            onChange={handleChange}
            required
            ref={endDateSelectRef}
          />
        ) : (
          <select
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
            ref={endDateSelectRef}
          >
            <option value="">Select end date</option>
            <option value="indefinite">Indefinitely</option>
            <option value="specific">Select specific date</option>
          </select>
        )}
      </div>

      <div className="form-group short-input">
        <label htmlFor="zipCode">Zip Code:</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          placeholder="92101"
          required
        />
      </div>

      <div className="form-group message">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          placeholder="Tell me about your pup's personality, preferences, and anything else I should know..."
        ></textarea>
      </div>

      <button type="submit">send message</button>
    </form>
  );
}

export default ContactForm;