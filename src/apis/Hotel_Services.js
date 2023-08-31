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