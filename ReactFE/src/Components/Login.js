import { useState } from "react"

export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    async function loginUser (event){
        event.preventDefault()
        const response = await fetch('http://localhost:1337/api/login',{
            method:'POST', 
            headers:{
                'Content-Type':'application/json',
            },
    
            body:JSON.stringify({
                email,
                pass,
            }),
         })
    
         const data = await response.json()

         if(data.user){
            localStorage.setItem('token' , data.user)
            alert('Login Successful')
            window.location.href = '/'
         }else{
            alert('Please check your email and password')
         }
        }


    return (
        <div className="App">
             <div className="auth-form-container">
            <h2>Login</h2>

            <form className="login-form" onSubmit={loginUser}>

                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@email.com" id="email" name="email" />

                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="password" id="password" name="password" />

                <button className="auth-btn" type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
        </div>
       

    )
}