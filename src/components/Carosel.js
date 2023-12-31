import React, {useState, useEffect} from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import PopupForm from './PopupForm';

export default function Carosel() { 
	const [seen, setSeen] = useState(false);
	
	function togglePop () {
		setSeen(!seen);
	};
	// const handleFormSubmit = (e) => {
	//   e.preventDefault();
	//   // Perform form submission actions here (e.g., send data to a server).
	//   // For this example, we'll just set submitted to true.
	//   setSubmitted(true);
	// };
  
	// const [valid, setValid] = useState(true);
  
	// const handleChange = (value) => {
	//   setPhone(value);
	//   setValid(validatePhoneNumber(value));
	// };
  
	// const validatePhoneNumber = (phoneNumber) => {
	//   const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
  
	//   return phoneNumberPattern.test(phoneNumber);
	// };
  
	// useEffect(() => {
	//   if (submitted) {
	// 	// Set the WhatsApp and Telegram group links here.
	// 	setWhatsappLink('https://chat.whatsapp.com/F7Pd1KKjpog0uvWQDDywkS');
	// 	setTelegramLink('https://t.me/your-telegram-link');
	//   }
	// }, [submitted]);
	
return ( 
	<div className='container-fluid p-0'> 
		<div interval={0} classNameName="carousel-item active"> 
		<img className="w-100" src="./assets/img/carousel-2.jpg" alt="Image" />
		<p className="carousel-caption d-flex flex-column align-items-center justify-content-center pt-5"> 
		{
			seen ? 
			<PopupForm toggle={togglePop} /> :
			<div>
        	<h3 className="text-primary text-capitalize m-0">75 Hard Challenge</h3>
            <h2 className="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">Transform Your Life with Resilience and Growth</h2>
			<button onClick={togglePop} className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">Get Started</button>
			</div>
		}
		</p>
		</div>
	</div> 
); 
}
