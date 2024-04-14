import axios from "axios";
import { useState } from "react"

const Get = (props)=>{

    const [data,setData] = useState([{konu:"",tarih:"",baslamaSaati:"",bitisSaati:"",katilimcilar:""}])

    const GetButton = async ()=>{
        try {
                const response = await axios.get('http://localhost:5051/api/Toplanti/Get',{
                headers:{
                'Authorization': `Bearer ${props.token}`
                }}
                );
                setData(response.data);
            } catch (error) {
            console.log(error);
            }
        
    }
    
    return(

        <>       
        <button onClick={GetButton}>GET</button>
        <p>Konu:{data[0].konu}</p>
        </>
    )
}

export default Get