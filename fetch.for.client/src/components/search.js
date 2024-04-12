import { useState } from "react"

const Search = (props)=>{

    //const[search,setSearch] = useState('');
    const[data,setData] = useState([{konu:'',tarih:'',baslamaSaati:'',bitisSaati:'',katilimcilar:''}]);

    const Searcher = async (event)=>{
        //setSearch(event.target.value); // Bir hamle geriden geliyor, bunu araştır.
        let dataSearch = event.target.value; // Anlık geliyor.
        try {
            const response = await fetch('http://localhost:5051/api/Toplanti/Search',{
            method:'POST',
            headers:{
            'Authorization': `Bearer ${props.token}`,
            'Content-Type':'application/json'
            },
            body:JSON.stringify({katilimciadi:dataSearch})
        });
        setData(await response.json());
        } catch (error) {
            console.log(error)
        }        
    }
    return(

        <>
            <input type="text" placeholder="İsme Göre Ara" onChange={Searcher} />
            <p>Katilimci Adi:{ data[0].katilimcilar} </p>
        </>

    )
}

export default Search