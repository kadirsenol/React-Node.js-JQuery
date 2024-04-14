import axios from "axios";
import { useState } from "react"

const Delete = (props)=>{

    const[deleteId,setDeleteId] = useState('');

    const deleteButton= async ()=>{

        try {
            await axios.delete(`http://localhost:5051/api/Toplanti/Delete/${deleteId}`,{
                headers:{
                'Authorization': `Bearer ${props.token}`
                }}
            );
        } catch (error) {
            console.log(error)
        }
      
    }

    return(
        <>
        <input onChange={(event)=>{setDeleteId(event.target.value)}} placeholder="Id giriniz" />
        <button onClick={deleteButton} >DELETE</button>
        </>
    )

}

export default Delete
