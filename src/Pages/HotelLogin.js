import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";


export const HotelLogin = (props) => {
  const [husername, setHUsername] = useState('');
  const [hpassword, setHPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("This is your username",husername);
    // console.log("This is your password",hpassword);
    //const data = { husername, hpassword };

    fetch('https://gisapi.ictsbm.com/api/Account/GisLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(data),
      body: JSON.stringify({ userLoginId: husername, userPassword: hpassword, }),
    })
      .then(response => response.json())
      .then(result => {
        // Handle the API response here (e.g., store tokens, show messages)
        //console.log(result.code);
        if (result.code === 200 && result.status === 'Success') {
          // console.log(result.code);
          // navigate("/HotelLoginSuccess");
          alert('Login successful! Click OK to go to the dashboard.');
          // Redirect to the dashboard or perform other navigation
          window.location.href = '/HotelLoginSuccess';
        }
        else {
          alert('Login failed. Please check your credentials.');
        }
      })
      .catch(error => {
        // Handle errors here
        //console.log(error.code);
        alert('An error occurred during login.');
      });
  }

  return (
    <div className="auth-form-container bg-gradient" style={{ height: '100%', paddingTop: '7%' }}>
      <h3 style={{ color: '#fff', marginLeft: '10%' }}>Hotel Login</h3>
      <form className='loginform' onSubmit={handleSubmit} style={{ marginLeft: '10%' }}>
        <h3 style={{ color: '#9979f6' }}>LOGIN</h3>
        <div className="mb-3">

          <input
            type="text"
            value={husername} onChange={(e) => setHUsername(e.target.value)}
            className="form-control"
            placeholder="ENTER USERNAME"
          />
        </div>
        <div className="mb-3">

          <input
            type="password"
            value={hpassword} onChange={(e) => setHPassword(e.target.value)}
            className="form-control"
            placeholder="ENTER PASSWORD"
          />
        </div>
        <p className="forgot-password text-right">
          <a href="#">Forget Password?</a>
        </p>
        <div className="d-grid" style={{ justifyContent: 'center' }}>
          <button type="submit" className="btn btn-primary hlbtn-gb">
            LOGIN
          </button>
        </div>
        {/* <p className="forgot-password text-right">
                    Don't Have Account <a href="/HotelRegistration">Register?</a>
                </p> */}
      </form>
      <div style={{ marginLeft: '10%', paddingLeft: '10%', paddingTop: '2%' }}>
        <Link to='/HotelRegistration'>    <button className="btn btn-primary" style={{ background: '#05356b', color: '#fff', borderColor: '#05356b', padding: '5px 35px' }}>
          Hotel Registration
        </button></Link>
        <p style={{ color: '#fff', paddingTop: '10px' }}>
          Click here for the hotel registration.
        </p>
      </div>
    </div>
  )
}


