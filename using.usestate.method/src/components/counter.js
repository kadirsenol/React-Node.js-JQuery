import {useState} from 'react'

const Counter = ()=>{

    const [read,set] = useState(0)

    const up = ()=>{
        if(read<10){
          set(read+1)
        }
    }
    const down = () => {
        if(read>0){
          set(read-1)
        }
    }
    return(

        <div className='counter'>
            <button className='btn btn-outline-success' onClick={up} >+</button>
            <h1 style={{margin:'40px'}}>{read}</h1>
            <button className='btn btn-outline-danger' onClick={down}>-</button>

        </div>

    )

}

export default Counter