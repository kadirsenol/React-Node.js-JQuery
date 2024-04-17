import {useState,useEffect} from 'react'
import axios from 'axios'
import Home from '../pages/Home'

const Signin = ()=>{

    const [data,setData] = useState("");

    useEffect(()=>{Login()});

    const Login = async ()=>{
        try {
            const response = await axios.post('http://localhost:5051/api/Account/Login',{
            Email:'kdrsnl_61@hotmail.com',Password:'1010'    
            }
            );
            console.log(response);
            setData(response.data) 
        } catch (error) {
                console.log(error)
            }
    }

    return(
        <>
            <Home token={data}/>
        </>
    )
}

export default Signin