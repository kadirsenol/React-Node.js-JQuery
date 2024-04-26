import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import imghome from '../assest/image/iothome2.jpg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'


const Home = ()=>{

    const[data, setData] = useState([{name:"", image:"",price:"",id:0,createDate:"",updateDate:"",isDelete:false}])

    useEffect(()=>{
        getProduct()
    },[])

    const getProduct=async ()=>{

        try {
            const response = await axios.get("http://localhost:5051/api/Product/Get")
            
            if(response.status===200){
                setData(response.data)
            }
            
        } catch (error) {
            if(error.code==="ERR_NETWORK"){
                toast.error("Sunucuya bağlanılamadı. !")  
               }
               else{
               toast.error("Ürünler listelenirken bir hata meydana geldi.")
               }
        }
        

    }

    return(
        
        <>
        <Navbar/>
        <div className=" bg-cover bg-center bg-no-repeat min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 " style={{backgroundImage:`url(${imghome})`,backgroundAttachment:'fixed'}}>   
        {data.map((element)=> (
        <ProductCard element={element}/>
        ))}     
        </div>
        </>
    )

}

export default Home