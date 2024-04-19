import { useLocation } from "react-router-dom"


const Profile =()=>{

    const {state} = useLocation();
    const token = state?.token;
    return(

        <>
        <p>Burasi Senin Profilin</p>
        <p>İşte Tokenin {token}</p>
        </>
    )

}

export default Profile