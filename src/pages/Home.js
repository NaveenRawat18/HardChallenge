import React, { useState, useEffect } from 'react';
import '../App.css'; // Ensure you have a CSS file for styling
import PopupForm from '../components/PopupForm';
import PhoneInput from 'react-phone-input-2';
import Navbar from '../components/Navbar';
import Carosel from '../components/Carosel';
import Blocks from '../components/Blocks';
import Services from '../components/Services';
import Features from '../components/Features';
import Footer from '../components/Footer';
import TopInfluencers from '../components/TopInfluencers';
import Blog from '../components/Blog';
function Home() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');
  const [telegramLink, setTelegramLink] = useState('');
  const [seen, setSeen] = useState(false);
  

  function togglePop () {
      setSeen(!seen);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission actions here (e.g., send data to a server).
    // For this example, we'll just set submitted to true.
    setSubmitted(true);
  };

  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    setPhone(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  useEffect(() => {
    if (submitted) {
      // Set the WhatsApp and Telegram group links here.
      setWhatsappLink('https://chat.whatsapp.com/F7Pd1KKjpog0uvWQDDywkS');
      setTelegramLink('https://t.me/your-telegram-link');
    }
  }, [submitted]);
  
  return (
    <>
      <Navbar />
      <Carosel />
      <Blocks />
      <Features />
      <Services />
      <TopInfluencers />
      <Blog />
      {/* <Footer /> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="#EAEAEA" width="100%" height="200px" viewBox="0 0 1440 320">
          <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,144C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <h1>WE HELP TOU TRANSFORM</h1>
        <p className="sub-title">TAKE 75 HARD CHALLENGE WITH US.</p>
        <button onClick={togglePop} className="btn">Get Started</button>
        {seen ? <PopupForm toggle={togglePop} /> : null}
      </header>

      {submitted ? (
          <div className="confirmation">
            <h2>Thank you for signing up!</h2>
            <p>Your journey to self-improvement begins now. Explore more about the challenge below:</p>
            <a href="/resources" className="btn">Explore Resources</a>
            
            <p>Join our community on:</p>
            <a href={whatsappLink} className="group-link">WhatsApp Group</a>
            <a href={telegramLink} className="group-link">Telegram Group</a>
          </div>
        ) : (
          <div className="cta-form">
          <h2>Ready to embark on your journey?</h2>
          <p>Join the 75 Hard Challenge and transform yourself. Provide your info to get started:</p>
          <form className='conrtainer' onSubmit={handleFormSubmit}>
              <div className="form-group">
                  <input type="text" className="form-control" placeholder="First Name" value="" />
              </div>
              <div className="form-group">
                  <input type="text" className="form-control" placeholder="Last Name" value="" />
              </div>
              <div className='form-group'>
              <PhoneInput
                  country={'in'}
                    value={phone}
                    onChange={handleChange}
                    inputProps={{
                      // required: true,
                    }}
                    inputClass="form-control"
                    // inputClass='form-control'
                  />
                {!valid && (
                  <p>Please enter a valid phone number.</p>
                )}
                </div>
              <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email" name="name" />
              </div>
              <button type="submit" className="btn btn-primary form-submit">Submit</button>
          </form>
          </div>
      )} */}
    </>
  );
}

export default Home;
