import "./App.css";
import { Header } from './Components/Header'
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import { Movies } from "./Components/Movies";
import jwt from 'jsonwebtoken';
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

export function Home({setQuery}) {
    const navigate = useNavigate();

    async function populateQuote(){
        const req = await fetch('http://localhost:1337/api/quote',{
            headers:{
                'x-access-token':localStorage.getItem('token')
            },
        })

        const data = req.json()
        console.log(data)
    }

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            const user =jwt.decode(token)
            if(!user){
                localStorage.removeItem('token')
                navigate('/login')
            }else{
                populateQuote()
            }
        }
    },[])
    
    return (
        <>
            <NavBar />
            <Header setQuery={setQuery} />
            <Movies />
            <Footer />
        </>
    );
}