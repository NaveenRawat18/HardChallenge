import { useState, useEffect } from "react"
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
  // const [user, setUser] = useState([{
  //   username: username,
  //   email:email,
  //   mobile: mobile
  // }]);

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
          <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Name" required value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            <input type="email" placeholder="Email" required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="tel" placeholder="Mobile Number" required value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/> {/* Mobile number input */}
            {/* <input type="file" accept="image/*" required /> Image upload input */}
            <button type="submit" className="btn">Get Started</button>
          </form>
          </div>
      )}
          </div>
      </div>
  )
}

export default Login;