import React, { Component, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import Select, { components } from 'react-select';
export default class HotelRegistration extends Component {

  render() {

    const State = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ];
    const  District = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ];
    const City = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ];
    const Police_Station = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ];
    return (
      <div style={{ background: '#ebebeb', paddingTop: '1px', height: '100%' }}>
        <div className='px-6 nav-bg' style={{ width: '100%', height: '60px' }}>
          <p className='d-flex justify-content-between'>
            <Link to='/'> <span>Home</span></Link>
            <Link to='/hotelLogin'> <span>
              Login
            </span></Link>
          </p>
        </div>
        <div className='px-6 pt-3'>
          <h5 style={{ background: '#efefef', marginBottom: '0px', width: '30%', padding: '10px', backgroundColor: '#7cb0f5', color: '#fff', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', marginLeft: '20px' }}>Hotel Registration Form</h5>
          <form className='registrationform_Hotel'>

            <div className="mb-3 d-flex">

              <input
                type="text"
                className="form-control"
                placeholder="First name" style={{ marginRight: '80px' }}
              />
              <input type="text" className="form-control" placeholder="Last name" />
            </div>
            <div className="mb-3 d-flex" >
              <input
                type="text"
                className="form-control"
                placeholder="Mobile Number" style={{ marginRight: '80px' }}
              />
              <input type="text" className="form-control" placeholder="Email ID" />

            </div>

            <div className="mb-3 d-flex" >
              <input
                type="text"
                className="form-control"
                placeholder="Hotel Name" style={{ marginRight: '80px' }}
              />
              <input type="text" className="form-control" placeholder="Hotel License Number" />

            </div>
            <div className="mb-3 d-flex" >
              <input
                type="text"
                className="form-control"
                placeholder="Hotel Address" style={{ marginRight: '80px', width: '100%' }}
              />


            </div>
            <div className="mb-3 d-flex" >
              <input
                type="text"
                className="form-control"
                placeholder="Pincode" style={{ marginRight: '40px' }}
              />
              <input type="text" className="form-control" placeholder="Latitude " style={{ marginRight: '40px' }} />
              <input type="text" className="form-control" placeholder="Longitude " />
            </div>
            <p className='d-flex justify-content-end'><span style={{ color: 'red', fontSize: '12px' }}>Use My Current Location
            </span></p>
            <div className="mb-3 d-flex" >
           
              <Select options={State} placeholder={<div className="select-placeholder-text">Select State</div>} styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  border: 'none', borderBottom: '2px solid #9979f6;', width: '520px', borderRadius: '0px', marginRight: '80px'
                }),
              }} />
            
              <Select options={District} placeholder={<div className="select-placeholder-text">Select District</div>} styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  border: 'none', borderBottom: '2px solid #9979f6;', width: '520px', borderRadius: '0px'
                }),
              }} />
            </div>
            <div className="mb-3 d-flex" >
              
              <Select options={City} placeholder={<div className="select-placeholder-text">Select City</div>} styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  border: 'none', borderBottom: '2px solid #9979f6;', width: '520px', borderRadius: '0px', marginRight: '80px'
                }),
              }} />
              

              <Select options={Police_Station} placeholder={<div className="select-placeholder-text">Select Police Station</div>} styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  border: 'none', borderBottom: '2px solid #9979f6;', width: '520px', borderRadius: '0px',
                }),
              }} />
            </div>

            <div className="mb-3 d-flex" >
              <input
                type="text"
                className="form-control"
                placeholder="Username" style={{ marginRight: '80px' }}
              />

            </div>
            <p className='d-flex justify-content-start'><span style={{ color: '#9979f6', fontSize: '12px' }}>Note: Username is use for login in future.

            </span></p>







            <div className="d-grid" style={{ justifyContent: 'center' }}>
              <button type="submit" className="btn btn-primary hlbtn-gb" style={{ padding: '6px 50px' }}>
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <a href="/HotelLogin">sign in?</a>
            </p>
          </form></div></div>
    )
  }
}

