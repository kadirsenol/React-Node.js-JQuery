import { useState } from "react"

const Delete = (props)=>{

    const[deleteId,setDeleteId] = useState('');

    const deleteButton= async ()=>{

        try {
            await fetch(`http://localhost:5051/api/Toplanti/Delete/${deleteId}`,{
                method:'DELETE',
                headers:{
                'Authorization': `Bearer ${props.token}`
                }
                });
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
