import {useState} from 'react'
import Get from '../HttpMethods/get';
import Post from '../HttpMethods/post';
import Put from '../HttpMethods/put';
import Delete from '../HttpMethods/delete';
import Search from './search';
import axios from 'axios'

const Signin = ()=>{

    const [data,setData] = useState("");

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
            <button onClick={Login} className='btn btn-primary'>Login</button>
            <p>Token:{data}</p>
            <Get token={data}/>
            <Post token={data}/> <br/>
            <Put token={data}/> <br/>
            <Delete token={data}/> <br/>
            <Search token={data}/>
        </>
    )
}

export default Signin