import React, {useState} from  'react';
    
const Userform = props => {
    let [formInfo, setFormInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm: ""
    })

    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            firstName: formInfo.firstName,
            lastName: formInfo.lastName,
            email: formInfo.email,
            password: formInfo.password
        };
        console.log("Welcome", newUser);
    };
    
    const {firstName, lastName, email, password, confirm} = formInfo;
    return(
        <div>
            <form onSubmit={createUser}>
                <div>
                    {firstName.length < 2 && firstName.length > 0? <p style={{color:'red'}}>First name must be at least 2 characters long!</p>: null}
                    <label>First Name: </label> 
                    <input type="text" onChange={changeHandler} name="firstName"/>
                </div>
                <div>
                    {lastName.length < 2 && lastName.length > 0? <p style={{color:'red'}}>Last name must be at least 2 characters long!</p>: null}
                    <label>Last Name: </label> 
                    <input type="text" onChange={changeHandler} name="lastName"/>
                </div>
                <div>
                    {email.length < 2 && email.length > 0? <p style={{color:'red'}}>Email must be at least 2 characters long!</p>: null}
                    <label>Email Address: </label> 
                    <input type="text" onChange={changeHandler} name="email"/>
                </div>
                <div>
                    {password.length < 8 && password.length > 0? <p style={{color:'red'}} name="password">Password must be at least 8 characters long!</p>: null}
                    <label>Password: </label>
                    <input type="password" onChange={changeHandler} name="password"/>
                </div>
                <div>
                    {password !== confirm? <p style={{color:'red'}}>Passwords must match!</p>: null}
                    <label>Confirm Password: </label>
                    <input type="password" onChange={changeHandler} name="confirm"/>
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