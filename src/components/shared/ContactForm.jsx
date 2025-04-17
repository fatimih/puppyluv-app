import { Italic } from 'lucide-react';
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

        // Comment out the fetch call to prevent actual form submission
    /*
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
       */
    
    // For testing, just set submitted to true directly
    setSubmitted(true);
 


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


 // This is just the section that needs to be fixed - replace only this part in your code

// If the form is submitted, display the thank-you message with typing animation
const [displayText, setDisplayText] = useState('');
const fullText = "  Thank you!\nI will be in touch with you\nand your pup, shortly :)";

useEffect(() => {
  if (submitted) {
    let currentText = '';
    let currentIndex = 0;
    let timeoutId;

    const typeNextCharacter = () => {
      if (currentIndex < fullText.length) {
        const currentChar = fullText[currentIndex];
        
        // Check for special pause points
        let pauseDuration = 90; // default typing speed
        
        // Fast typing for "Thank you!" (20ms per character)
        if (currentIndex < 11) {
          pauseDuration = 35;
        } else if (currentIndex === 11) {
          // After "Thank you!"
          pauseDuration = 900;
        } else if (currentIndex === 39) {
          // After "I will be in touch with you"
          pauseDuration = 400;
        } else if (currentIndex === 52) {
          // After "and your pup"
          pauseDuration = 350; // shorter pause here
        }
        
        // Add current character to our tracking variable
        if (currentChar === '\n') {
          currentText += '<br>';
        } else {
          currentText += currentChar;
        }
        
        // Apply bold formatting to specific segments
        let formattedText = currentText;
        
        // Look for "Thank you!" and make it bold
        formattedText = formattedText.replace(/Thank you!/g, '<span style="font-size: 1.3em; font-weight: bold;">Thank you!</span>');
        
        // Look for "and your pup" and make it bold
        formattedText = formattedText.replace(/and your pup/g, '<i><b>and your pup</b></i>');
        
        // Look for ":)" and make it bold
        formattedText = formattedText.replace(/:\)/g, '<b>:)</b>');
        
        // Update the display
        setDisplayText(formattedText);
        
        currentIndex++;
        
        // Use the determined pause duration
        timeoutId = setTimeout(typeNextCharacter, pauseDuration);
      }
    };

    timeoutId = setTimeout(typeNextCharacter, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }
}, [submitted]);

if (submitted) {
  return (
    <div className="contact-form-message">
      <div className="typing-container">
        <p
          className="typing-text"
          dangerouslySetInnerHTML={{ __html: displayText }}
        ></p>
      </div>

      <style jsx>{`
        .contact-form-message {
          text-align: center;
          color: var(--color-accent);
          font-size: 1rem;
          margin-top: 2.5rem;
          line-height: 1.3;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px;
        }

        .typing-container {
          position: relative;
          max-width: 400px;
          margin: none;
          padding: none;
        }

        .typing-text {
          position: relative;
          margin: 0;
          padding: 0;
          color: var(--color-accent);
        }

        .typing-text::after {
          content: '|';
          color: var(--color-primary);
          animation: blink-caret 0.75s step-end infinite;
        }

        @keyframes blink-caret {
          from,
          to {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
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
          placeholder="Puppy Luver"
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
          placeholder="puppyluver@puppyluvsd.com"
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
          placeholder="619-123-4567"
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
          placeholder="92104"
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