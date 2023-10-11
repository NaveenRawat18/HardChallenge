import React, { useState, useEffect } from 'react';
import './App.css'; // Ensure you have a CSS file for styling
import Login from './components/PopupForm';
function App() {
  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');
  const [telegramLink, setTelegramLink] = useState('');
  const [seen, setSeen] = useState(false)

  function togglePop () {
      setSeen(!seen);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission actions here (e.g., send data to a server).
    // For this example, we'll just set submitted to true.
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      // Set the WhatsApp and Telegram group links here.
      setWhatsappLink('https://chat.whatsapp.com/F7Pd1KKjpog0uvWQDDywkS');
      setTelegramLink('https://t.me/your-telegram-link');
    }
  }, [submitted]);
  
  return (
    <div className="landing-page">
      <header className="hero">
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="#EAEAEA" width="100%" height="200px" viewBox="0 0 1440 320">
          <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,144C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg> */}
        <h1>Welcome to the 75 Hard Challenge</h1>
        <p className="sub-title">Transform your life through discipline and self-improvement.</p>
        <button onClick={togglePop} className="btn">Get Started</button>
        {seen ? <Login toggle={togglePop} /> : null}
      </header>

      <section className="features">
        <div className="feature">
          <h2>Physical Fitness</h2>
          <p>Exercise daily to build a healthier and stronger body.</p>
        </div>
        <div className="feature">
          <h2>Mental Resilience</h2>
          <p>Read, learn, and develop a resilient mindset.</p>
        </div>
        <div className="feature">
          <h2>Learn New Skills</h2>
          <p>Challenge yourself to acquire new knowledge and skills.</p>
        </div>
        <div className="feature">
          <h2>Healthy Lifestyle</h2>
          <p>Eat well and make choices for improved well-being.</p>
        </div>
        <div className="feature">
          <h2>Personal Growth</h2>
          <p>Set and work towards personal goals for self-improvement.</p>
        </div>
      </section>

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
          <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Mobile Number" required /> {/* Mobile number input */}
            <input type="file" accept="image/*" required /> {/* Image upload input */}
            <button type="submit" className="btn">Get Started</button>
          </form>
          </div>
      )}
    </div>
  );
}

export default App;
