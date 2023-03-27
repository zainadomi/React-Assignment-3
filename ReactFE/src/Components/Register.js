import { useState } from "react"
import {useNavigate} from 'react-router-dom'



export const Register = (props) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

   async function registerUser (event){
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/register',{
        method:'POST', 
        headers:{
            'Content-Type':'application/json',
        },

        body:JSON.stringify({
            name,
            email,
            pass,
        }),
     })

     const data = await response.json()
     if(data.status === 'ok'){
        navigate('/login');
     }
    }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(email);
    // }


    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            
            <form className="register-form" onSubmit={registerUser}>

                <label htmlFor="name ">full name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="full name" id="name" name="name" />

                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@email.com" id="email" name="email" />

                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="password" id="password" name="password" />


                <button type="submit" className="auth-btn">Register</button>
            </form>
            <button className="link-btn" onClick={()=> props.onFormSwitch('login')}>Already have an account? Login.</button>
        </div>

    )
}