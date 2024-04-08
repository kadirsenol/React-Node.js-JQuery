import {useState} from 'react'
const ChangeText=()=>{

    const [text,settext] = useState("İlk Değer")
    
    const pressButton=()=>{
        settext("Yeni Değer")
    }
    const pressButtontwo = () => {
        settext("Sonraki Değer")
    }

    return(

        <div>
            <h1>{text}</h1>
            <button className='btn btn-primary me-2' onClick={pressButton}>Buton 1</button>
            <button className='btn btn-danger' onClick={pressButtontwo}>Buton 2</button>
        </div>

    )
}
export default ChangeText