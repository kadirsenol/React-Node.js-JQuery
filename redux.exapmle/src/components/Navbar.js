import { useDispatch } from "react-redux"
import { arttir, yukle } from "../store/slices/cartSlice";

const Navbar = ()=>{

    const dispatch = useDispatch();

    return(

        <>      
        <button onClick={()=>{dispatch(arttir())}}>+</button>
        <button onClick={()=>{dispatch(yukle({name:"kadir",surname:"senol"}))}}>Yükle</button>
        </>

    )

}

export default Navbar