import axios from "axios";

export const getStateListRequest = async()=>{
    const res = await axios({
       method:'POST',
       url:'https://hotelapi.ictsbm.com/api/SelectList/GetStates' ,
       headers: {
      
        'Content-Type': 'application/json',
      
    }
    });
    return res
  
}

export const getDistrictListRequest = async(stateID)=>{
    const res = await axios({
        method:'POST',
        headers: {
            stateID: stateID,
        },
        url:'https://hotelapi.ictsbm.com/api/SelectList/GetDistrict' ,
     });
     return res
}

export const getCityListRequest = async(stateID,distID)=>{
    const res = await axios({
        method:'POST',
        headers: {
            stateID: stateID,
            distID: distID,
        },
        url:'https://hotelapi.ictsbm.com/api/SelectList/GetCities' ,
     });
     return res
}
export const getPoliceStationListRequest = async(stateID,distID,cityID)=>{
    const res = await axios({
        method:'POST',
        headers: {
            stateID: stateID,
            distID: distID,
            cityID: cityID,
        },
        url:'https://hotelapi.ictsbm.com/api/SelectList/GetPoliceStation' ,
     });
     return res
}

export const submitHotelRegistration = async(fName,lName,mNumber,eMail,hName,hRegNo,hAddress,hpinCode,hLat,hLong,hUsername,stateID, distID,cityData,psData) => {
    const res = await axios({
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({ 
            hotelName: hName,
            hotelRegNo: hRegNo,
            userId: hUsername,
            firstName: fName,
            lastName: lName,
            mobile: mNumber,
            email: eMail,
            address: hAddress,
            pinCode: parseInt(hpinCode),
            stateId: stateID,
            distId: distID,
            cityId: cityData,
            stationCode: String(psData),
            lat: parseFloat(hLat),
            _long: parseFloat(hLong),
            diviceIp: "fsdkfjksd"
         }), 
      
        url:'https://hotelapi.ictsbm.com/api/Account/HotelRegistration' ,
     });
     if (!res.ok) {
        //throw new Error(`${res}`);
        console.log(res);
        console.log("Status Code: ",res.code);
        console.log("Status Status: ",res.status);
        console.log("Status MEssage: ",res.message);
      }
      console.log(res);
      console.log("Status Code: ",res.code);
      console.log("Status Status: ",res.status);
      console.log("Status MEssage: ",res.message);
      return res.json();
}