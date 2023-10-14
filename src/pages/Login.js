 import React, { useState } from 'react'
import '../App.css'
import { PostApi } from '../utils/api';

const Login = () => {
    // const navigate = useNavigate();
    const link = "https://chat.whatsapp.com/F7Pd1KKjpog0uvWQDDywkS";
    const alertSuccess = () => alert(`Thanks for Joining In Please join in whatsapp group for further updates ${link}`);
    const alertWarning = () => alert({ message: `Fields can't be empty`, type: 'warning' });
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [user, setUser] = useState([{
      username: username,
      email:email,
      mobile: mobile
    }]);


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(user);
    if(!username || !mobile || !email){
      alertWarning();
    }
    else{
      const newUser = {username, email, mobile};
      setUser([...user, newUser]);
      PostApi(user);
      alertSuccess();
    }

  }
  return (
    <div className="bg-img">
      <h1 className='heading-hard'>75 Hard isn't everyone's cup of tea</h1>
      {/* <h3 className='heading-hard-2'>It requires the courage and dedication to show consistency toawrds a goal</h3> */}
      <form className='conrtainer' onSubmit={handleSubmit}>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="First Name" value="" />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Last Name" value="" />
        </div>
        <div className="form-group">
            <input type="text" id="mobile_code" className="form-control" placeholder="Phone Number" name="name" />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Email" name="name" />
        </div>
        <button type="submit" className="btn btn-primary form-submit">Submit</button>
    </form>
    </div>
  )
}

export default Login
