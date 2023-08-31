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

export const getDistrictListRequest = async(head)=>{
    const res = await axios({
        method:'POST',
        headers: {
            stateID: head,
        },
        url:'https://hotelapi.ictsbm.com/api/SelectList/GetDistrict' ,
     });
     return res
}