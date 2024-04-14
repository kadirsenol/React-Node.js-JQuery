import axios from 'axios';
import {useState} from 'react'
const Post = (props)=>{

    const [konu,setKonu] = useState('');
    const [tarih,setTarih] = useState('');
    const [basSaati,setBasSaati] = useState('');
    const [bitSaati,setBitSaati] = useState('');
    const [katilimci,setKatilimci] = useState('');
    const [respo,setrespo] = useState('');

    const PostButton= async ()=>{
       
        try {
            const response = await axios.post('http://localhost:5051/api/Toplanti/Create',{
            konu:konu,tarih:tarih,baslamaSaati:basSaati,bitisSaati:bitSaati,katilimcilar:katilimci},{
            headers:{
            'Authorization': `Bearer ${props.token}`
            }},
            );
            setrespo(response.data);
            console.log(respo)
        } catch (error) {
            console.log(error);
        }
        
}

    return(
            <>
                <input type='text' onChange={(event)=>{setKonu(event.target.value)}} placeholder='Konu Giriniz' />
                <input type='text' onChange={(event)=>{setTarih(event.target.value)}} placeholder='Tarih Giriniz' />
                <input type='text' onChange={(event)=>{setBasSaati(event.target.value)}} placeholder='Başlama Saati Giriniz' />
                <input type='text' onChange={(event)=>{setBitSaati(event.target.value)}} placeholder='Bitiş Saati Giriniz' />
                <input type='text' onChange={(event)=>{setKatilimci(event.target.value)}} placeholder='Katılımcıları Giriniz' />
                <button onClick={PostButton} >POST</button>
            </>

       ) 

}

export default Post