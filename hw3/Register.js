import React, { useState } from "react";

export default function Register({ dispatch }) {

    const [ formData, setFormData ] = useState({
        username: "",
        password: "",
        passwordRepeat: ""
    })

    return (
        <form onSubmit={(e)=>{e.preventDefault(); dispatch({type: 'REGISTER' ,username: formData.username }) }}>
        <label htmlFor="register-username"></label>
        <input type="text" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})}
        name="register-username" placeholder="Username" id="register-username"/>
        
        <label htmlFor="register-password"></label>
        <input type="password" value={formData.password} onChange={e =>setFormData({...formData, password: e.target.value})}
        name="register-password" placeholder="Password" id="register-password"/>
        
        <label htmlFor="register-password-repeat"></label>
        <input type="password" value={formData.passwordRepeat} onChange={e => setFormData({...formData, passwordRepeat : e.target.value})}
        name="register-password-repeat" placeholder="Repeat Password" id="register-password-repeat"/>
        
        <input type="submit" value="Register" disabled={formData.username.length === 0 || formData.password.length === 0 ||formData.password !== formData.passwordRepeat}/>
    </form>
    )
}