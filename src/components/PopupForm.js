import { useState, useEffect } from "react"
import '../App.css'

function Login(props) {

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
      <div className="popup">
          <div className="popup-inner">
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
          <p>Join the 75 Hard Challenge and transform yourself.</p>
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
      </div>
  )
}

export default Login;