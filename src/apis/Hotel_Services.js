import axios from "axios";

export const getStateListRequest = async()=>{
    const res = await axios({
       method:'GET',
       url:'https://hotelapi.ictsbm.com/api/SelectList/GetStates' ,
    });
    return res
}

export const getDistrictListRequest = async(selectedStateId)=>{
    const res = await axios({
        method:'GET',
        headers: {
            stateID: `${selectedStateId}`,
        },
        url:'https://hotelapi.ictsbm.com/api/SelectList/GetDistrict' ,
     });
     return res
}