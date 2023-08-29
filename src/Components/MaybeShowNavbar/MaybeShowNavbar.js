import React,{useEffect,useState} from "react";
import { useLocation } from "react-router-dom";


const MaybeShowNavbar = ({children}) => {
    const location = useLocation();

   const [showNavBar, setShowNavBar] = useState(false)
    useEffect(() => {
        // console.log("this is location: ", location)

        if(location.pathname === '/DepartmentRegistration' || location.pathname === '/DepartmentLogin'
         || location.pathname === '/HotelRegistration' || location.pathname === '/hotelLogin' || location.pathname === '/HotelLoginSuccess'){
            setShowNavBar(false)
        }
        else{
            setShowNavBar(true)
        }
    },[location]);

    return (
            <div>{showNavBar && children}</div>
    )
}

export default MaybeShowNavbar