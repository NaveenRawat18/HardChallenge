import { useState, useEffect } from "react"
import PhoneInput from 'react-phone-input-2';
import '../App.css'
const Login = () => {
  // const navigate = useNavigate();
  const link = "https://chat.whatsapp.com/F7Pd1KKjpog0uvWQDDywkS";
  const alertSuccess = () => alert(`Thanks for Joining In Please join in whatsapp group for further updates ${link}`);
  const alertWarning = () => alert({ message: `Fields can't be empty`, type: 'warning' });
  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');
  const [telegramLink, setTelegramLink] = useState('');
  const [seen, setSeen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  function togglePop () {
      setSeen(!seen);
  };

  const apiUrl = 'https://filthy-undershirt-lamb.cyclic.app/hardusers/add';

  const PostApi = async (user) => {
    try {
      
      console.log(user);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData);
      // setResponseData(responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    setMobile(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    if(!username || !mobile || !email){
      alertWarning();
    }
    else{
      const newUser = {username, email, mobile};
      const data = {
        name: username,
        email: email,
        mobile: mobile
      };
      console.log(data);
      
      PostApi(data);
      alertSuccess();
    }
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
          <form className='conrtainer' onSubmit={handleFormSubmit}>
              <div className="form-group">
                  <input type="text" className="form-control" placeholder="Name" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
              </div>
              <div className="form-group">
                  <input type="email" className="form-control" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>
              <div className='form-group'>
              <PhoneInput
                  country={'in'}
                    value={mobile}
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
      )}
          </div>
      </div>
  )
}

export default Login;