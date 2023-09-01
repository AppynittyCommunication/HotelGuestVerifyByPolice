import React, { useEffect, useState, Component, } from 'react';
import { Link } from 'react-router-dom';
import Select, { components } from 'react-select';
import { getStateListRequest, getDistrictListRequest, getCityListRequest,getPoliceStationListRequest, submitHotelRegistration } from '../apis/Hotel_Services'
import axios from 'axios';
import { Empty } from 'antd';

export const HotelRegistration = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [mNumber, setMNumber] = useState('');
  const [eMail, setEMail] = useState('');
  const [hName, setHName] = useState('');
  const [hRegNo, setHRegNo] = useState('');
  const [hAddress, setHAddress] = useState('');
  const [hpinCode, setHPinCode] = useState('');
  const [hLat, setHLat] = useState('');
  const [hLong, setHLong] = useState('');
  const [hUsername, setHUsername] = useState('');
  const [stateData, setStateData] = useState([]);
  const [distData, setDistData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [psData, setPsData] = useState([]);
  const [selectedStateOption, setSelectedStateOption] = useState('');
  const [selectedDistOption, setSelectedDistOption] = useState('');
  const [selectedCityOption, setSelectedCityOption] = useState('');
  const [selectedPsOption, setSelectedPsOption] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    getStateList();
  }, []);

  // useEffect(() => {

  //   getDistList()
  // }, []);

  const getStateList = async () => {
    try {
      const res = await getStateListRequest(); // Assuming GetStateRequest returns a promise
      console.log(res.data)
      setStateData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getDistList = async (stateID) => {
    try {
      const res = await getDistrictListRequest(stateID); // Assuming GetStateRequest returns a promise
      console.log(res.data)
      setDistData(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  const getCityList = async (stateID, distID) => {
    try {
      const res = await getCityListRequest(stateID, distID); // Assuming GetStateRequest returns a promise
      console.log(res.data)
      setCityData(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  const getPsList = async (stateID, distID,cityData) => {
    try {
      const res = await getPoliceStationListRequest(stateID, distID,cityData); // Assuming GetStateRequest returns a promise
      console.log(res.data)
      setPsData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const submitHotelReg = async (fName,lName,mNumber,eMail,hName,hRegNo,hAddress,hpinCode,hLat,hLong,hUsername,stateID, distID,cityData,psData) => {
    try{
      const res = await submitHotelRegistration(fName,lName,mNumber,eMail,hName,hRegNo,hAddress,hpinCode,hLat,hLong,hUsername,stateID, distID,cityData,psData); // Assuming GetStateRequest returns a promise
      console.log(res.data)
    }
    catch (error) {
      console.log(error);
    }
  }
  const stateListOption = stateData.map(function (data) {
    return { value: data.stateId, label: data.stateName }
  })

  const distListOption = distData.map(function (data) {
    return { value: data.distId, label: data.distName }
  })
  const cityListOption = cityData.map(function (data) {
    return { value: data.cityId, label: data.cityName }
  })
  const psListOption = psData.map(function (data) {
    return { value: data.stationID, label: data.stationName }
  })
  const handleStateChange = selectedStateOption => {
    setSelectedStateOption(selectedStateOption);

    console.log('Selected State:', selectedStateOption.value)
    getDistList(selectedStateOption.value);
    setSelectedDistOption('');
    setSelectedCityOption('');
    setSelectedPsOption('');
  };

  const handleDistChange = selectedDistOption => {
    setSelectedDistOption(selectedDistOption);
    getCityList(selectedStateOption.value, selectedDistOption.value);
    setSelectedCityOption('');
    setSelectedPsOption('');
    console.log('Selected City: ', selectedDistOption.value)
  }
  const handleCityChange = selectedCityOption => {
    setSelectedCityOption(selectedCityOption);
    getPsList(selectedStateOption.value,selectedDistOption.value,selectedCityOption.value);
    setSelectedPsOption('');
  }

  const handlePsChange = selectedPsOption => {
    setSelectedPsOption(selectedPsOption);
    
  }

  const handleHotelRegSubmit = async(e) =>{
    e.preventDefault();
  
    submitHotelReg(fName,lName,mNumber,eMail,hName,hRegNo,hAddress,hpinCode,hLat,hLong,hUsername,selectedStateOption.value,selectedDistOption.value,selectedCityOption.value,selectedPsOption.value);
  }

  

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
        <form className='registrationform_Hotel' onSubmit={handleHotelRegSubmit} method='POST'>

          <div className="mb-3 d-flex">

            <input
              type="text"
              className="form-control"
              placeholder="First name" style={{ marginRight: '80px' }}
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            />
            <input type="text" className="form-control" 
            placeholder="Last name"
            value={lName}
            onChange={(e) => setLName(e.target.value)} />
          </div>
          <div className="mb-3 d-flex" >
            <input
              type="text"
              className="form-control"
              placeholder="Mobile Number" style={{ marginRight: '80px' }}
              value={mNumber}
              onChange={(e) => setMNumber(e.target.value)}
            />
            <input type="email" className="form-control"
             placeholder="Email ID"
             value={eMail}
             onChange={(e) => setEMail(e.target.value)} />

          </div>

          <div className="mb-3 d-flex" >
            <input
              type="text"
              className="form-control"
              placeholder="Hotel Name"
              style={{ marginRight: '80px' }}
              value={hName}
              onChange={(e) => setHName(e.target.value)}
            />
            <input type="text" className="form-control"
             placeholder="Hotel License Number"
             value={hRegNo}
             onChange={(e) => setHRegNo(e.target.value)} />

          </div>
          <div className="mb-3 d-flex" >
            <input
              type="text"
              className="form-control"
              placeholder="Hotel Address"
              style={{ marginRight: '80px', width: '100%' }}
              value={hAddress}
              onChange={(e) => setHAddress(e.target.value)}
            />


          </div>
          <div className="mb-3 d-flex" >
            <input
              type="text"
              className="form-control"
              placeholder="Pincode"
              style={{ marginRight: '40px' }}
              value={hpinCode}
              onChange={(e) => setHPinCode(e.target.value)}
            />
            <input type="text" className="form-control" placeholder="Latitude " 
            style={{ marginRight: '40px' }} 
            value={hLat}
             onChange={(e) => setHLat(e.target.value)}/>
            <input type="text" className="form-control" placeholder="Longitude " 
            value={hLong}
            onChange={(e) => setHLong(e.target.value)}/>
          </div>
          <p className='d-flex justify-content-end'><span style={{ color: 'red', fontSize: '12px' }}>Use My Current Location
          </span></p>
          <div className="mb-3 d-flex" >

            <Select options={stateListOption} value={selectedStateOption}
              onChange={handleStateChange} placeholder={<div className="select-placeholder-text">Select State</div>} styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  border: 'none', borderBottom: '2px solid #9979f6;', width: '520px', borderRadius: '0px', marginRight: '80px'
                }),
              }} />

            <Select options={distListOption} value={selectedDistOption}
              onChange={handleDistChange} placeholder={<div className="select-placeholder-text">Select District</div>} styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  border: 'none', borderBottom: '2px solid #9979f6;', width: '520px', borderRadius: '0px'
                }),
              }} />
          </div>
          <div className="mb-3 d-flex" >

            <Select options={cityListOption} value={selectedCityOption}
              onChange={handleCityChange} placeholder={<div className="select-placeholder-text">Select City</div>} styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  border: 'none', borderBottom: '2px solid #9979f6;', width: '520px', borderRadius: '0px', marginRight: '80px'
                }),
              }} />


            <Select options={psListOption} value={selectedPsOption}
              onChange={handlePsChange} placeholder={<div className="select-placeholder-text">Select Police Station</div>} styles={{
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
              value={hUsername}
              onChange={(e) => setHUsername(e.target.value)}
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
  // }}
}


