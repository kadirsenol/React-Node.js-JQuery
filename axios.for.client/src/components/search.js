import axios from "axios";
import { useState } from "react"

const Search = (props)=>{

    //const[search,setSearch] = useState('');
    const[data,setData] = useState([{konu:'',tarih:'',baslamaSaati:'',bitisSaati:'',katilimcilar:''}]);

    const Searcher = async (event)=>{
        //setSearch(event.target.value); // Bir hamle geriden geliyor, bunu araştır.
        //setSearch(document.getElementById('search').value); //Bir hamle geriden geliyor, bunu araştır.
        let dataSearch = event.target.value; // Anlık geliyor.
        
        try {
            const response = await axios.post('http://localhost:5051/api/Toplanti/Search',{
            katilimciadi:dataSearch},{
            headers:{
            'Authorization': `Bearer ${props.token}`
            }}
            );
            setData(response.data);
        } catch (error) {
            console.log(error)
        }        
    }
    return(

        <>
            <input type="text" placeholder="İsme Göre Ara" onChange={Searcher} id="search" />
            <p>Katilimci Adi:{ data[0].katilimcilar} </p>
        </>

    )
}

export default Search