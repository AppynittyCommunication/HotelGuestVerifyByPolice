import React,{useState} from "react";
export const DepartmentRegistration = (props) => {
    const [dusername, setDUsername] = useState('');
    const [dpassword, setDPassword] = useState('');
    const [dname, setDName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dusername);
    }

    return(
        <div className="auth-form-container">
        <form onSubmit={handleSubmit}>
            <label htmlFor="dname">Name</label>
            <input value={dname} onChange={(e) =>setDName(e.target.value)} type="text" placeholder="Enter Your Name" name="dname" id="dname" />

            <label htmlFor="dusername">Username</label>
            <input value={dusername} onChange={(e) =>setDUsername(e.target.value)} type="text" placeholder="Enter Your Department Username" name="dusername" id="dusername" />

            <label htmlFor="dpassword">Password</label>
            <input value={dpassword} onChange={(e) =>setDPassword(e.target.value)}  type="password" placeholder="Enter Your Department Password" name="dpassword" id="dpassword" />

            <button type="submit">Register</button>
        </form>
         <span>Already have an Account? <button  onClick={()=>props.onFormSwitch('departmentLogin')}>Login</button> here</span>
        </div>
    )
        
    
}