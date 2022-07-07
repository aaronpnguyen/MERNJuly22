import React, {useState} from  'react';
    
const Userform = props => {
    const [firstName, setFirstName] = useState("");
    const [firstError, setFirstError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastError, setLastError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirm, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
    };

    const handleFirstName = (e) => {
        let value = e.target.value;
        setFirstName(value);
        if (value.length < 2) {
            setFirstError("First name must have at least 2 characters!");
        } else {
            setFirstError("");
        }
    }

    const handleLastName = (e) => {
        let value = e.target.value;
        setLastName(value);
        if (value.length < 2) {
            setLastError("Last name must have at least 2 characters!");
        } else {
            setLastError("");
        }
    }

    const handleEmail = (e) => {
        let value = e.target.value;
        setEmail(value);
        if (value.length < 5) {
            setEmailError("Email must have at least 5 characters!");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        let value = e.target.value;
        setPassword(value);
        if (value.length < 8) {
            setPasswordError("Password must have at least 8 characters!");
        } else {
            setPasswordError("");
        }
    }
    
    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if (e.target.value !== password) {
            setConfirmError("Passwords must match!");
        } else {
            setConfirmError("")
        }
    }
    
    return(
        <div>
            <form onSubmit={createUser}>
                <div>
                    {firstError ?
                        <h3 style={{color:'red'}}>{firstError}</h3>: 
                        ''
                    }
                    <label>First Name: </label> 
                    <input type="text" onChange={handleFirstName} />
                </div>
                <div>
                    {lastError ?
                        <h3 style={{color:'red'}}>{lastError}</h3>: 
                        ''
                    }
                    <label>Last Name: </label> 
                    <input type="text" onChange={handleLastName} />
                </div>
                <div>
                    {emailError ?
                        <h3 style={{color:'red'}}>{emailError}</h3>: 
                        ''
                    }
                    <label>Email Address: </label> 
                    <input type="text" onChange={handleEmail} />
                </div>
                <div>
                    {passwordError ?
                        <h3 style={{color:'red'}}>{passwordError}</h3>: 
                        ''
                    }
                    <label>Password: </label>
                    <input type="password" onChange={handlePassword} />
                </div>
                <div>
                    {confirmError ?
                        <h3 style={{color:'red'}}>{confirmError}</h3>: 
                        ''
                    }
                    <label>Confirm Password: </label>
                    <input type="password" onChange={handleConfirm} />
                </div>
                <input type="submit" value="Create User"/>
            </form>
            <div>
                <h3>First Name: {firstName}</h3>
                <h3>Last Name: {lastName}</h3>
                <h3>Email: {email}</h3>
                <h3>Password: {password}</h3>
                <h3>Confirm Password: {confirm}</h3>
            </div>
        </div>
    );
};
    
export default Userform;