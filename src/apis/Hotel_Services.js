import axios from "axios";


export const GetStateRequest = async()=>{
    const res = await axios({
       method:'get',
       url:'https://hotelapi.ictsbm.com/api/SelectList/GetStates' ,
       headers: {
      
        'Content-Type': 'application/json',
    }
    });
    return res
  
}
