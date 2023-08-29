import React,{useState} from "react";
export const DepartmentLogin = (props) => {
    const [dusername, setDUsername] = useState('');
    const [dpassword, setDPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dusername);
    }

    return(
        <div className="auth-form-container">
        <form onSubmit={handleSubmit}>
            <label htmlFor="dusername">Username</label>
            <input value={dusername} onChange={(e) =>setDUsername(e.target.value)} type="text" placeholder="Enter Your Department Username" name="dusername" id="dusername" />

            <label htmlFor="dpassword">Password</label>
            <input value={dpassword} onChange={(e) =>setDPassword(e.target.value)}  type="password" placeholder="Enter Your Department Password" name="dpassword" id="dpassword" />

            <button type="submit">Login</button>
        </form>
         <span>Don't have an Account? <button onClick={()=>props.onFormSwitch('departmentRegistration')}>Register</button> here</span>
        </div>
    )
        
    
}