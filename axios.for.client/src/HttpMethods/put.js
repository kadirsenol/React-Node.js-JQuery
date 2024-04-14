import axios from 'axios';
import {useState} from 'react'
const Put = (props)=>{

    const [id,setId] = useState('');
    const [konu,setKonu] = useState('');
    const [tarih,setTarih] = useState('');
    const [basSaati,setBasSaati] = useState('');
    const [bitSaati,setBitSaati] = useState('');
    const [katilimci,setKatilimci] = useState('');

    const PostButton= async ()=>{
       
        try {
            await axios.put('http://localhost:5051/api/Toplanti/Update',{
            id:id,konu:konu || null,tarih:tarih|| null,baslamaSaati:basSaati|| null,bitisSaati:bitSaati || null,katilimcilar:katilimci || null},{
            headers:{
            'Authorization': `Bearer ${props.token}`
            }}
            );
        } catch (error) {
            console.log(error);
        }
        
}

    return(
            <>
                <input type='text' onChange={(event)=>{setId(event.target.value)}} placeholder='Id Giriniz' />
                <input type='text' onChange={(event)=>{setKonu(event.target.value)}} placeholder='Konu Giriniz' />
                <input type='text' onChange={(event)=>{setTarih(event.target.value)}} placeholder='Tarih Giriniz' />
                <input type='text' onChange={(event)=>{setBasSaati(event.target.value)}} placeholder='Başlama Saati Giriniz' />
                <input type='text' onChange={(event)=>{setBitSaati(event.target.value)}} placeholder='Bitiş Saati Giriniz' />
                <input type='text' onChange={(event)=>{setKatilimci(event.target.value)}} placeholder='Katılımcıları Giriniz' />
                <button onClick={PostButton} >PUT</button>
            </>

       ) 

}

export default Put