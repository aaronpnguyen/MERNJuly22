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
            password: formInfo.password};
        console.log("Welcome", newUser);
    };
    
    return(
        <div>
            <form onSubmit={createUser}>
                <div>
                    {formInfo.firstName.length < 2 && formInfo.firstName.length > 0? <p style={{color:'red'}}>First name must be at least 2 characters long!</p>: null}
                    <label>First Name: </label> 
                    <input type="text" onChange={changeHandler} name="firstName"/>
                </div>
                <div>
                    {formInfo.lastName.length < 2 && formInfo.lastName.length > 0? <p style={{color:'red'}}>Last name must be at least 2 characters long!</p>: null}
                    <label>Last Name: </label> 
                    <input type="text" onChange={changeHandler} name="lastName"/>
                </div>
                <div>
                    {formInfo.email.length < 2 && formInfo.email.length > 0? <p style={{color:'red'}}>Email must be at least 2 characters long!</p>: null}
                    <label>Email Address: </label> 
                    <input type="text" onChange={changeHandler} name="email"/>
                </div>
                <div>
                    {formInfo.password.length < 8 && formInfo.password.length > 0? <p style={{color:'red'}} name="password">Password must be at least 8 characters long!</p>: null}
                    <label>Password: </label>
                    <input type="password" onChange={changeHandler} name="password"/>
                </div>
                <div>
                    {formInfo.password !== formInfo.confirm? <p style={{color:'red'}}>Passwords must match!</p>: null}
                    <label>Confirm Password: </label>
                    <input type="password" onChange={changeHandler} name="confirm"/>
                </div>
                <input type="submit" value="Create User"/>
            </form>
            <div>
                <h3>First Name: {formInfo.firstName}</h3>
                <h3>Last Name: {formInfo.lastName}</h3>
                <h3>Email: {formInfo.email}</h3>
                <h3>Password: {formInfo.password}</h3>
                <h3>Confirm Password: {formInfo.confirm}</h3>
            </div>
        </div>
    );
};
    
export default Form;