import { useSelector } from 'react-redux'

const Content = ()=>{

    const data = useSelector(state=>state.cart.value)
    const mydata = useSelector(state=>state.cart.valuesecond)


    return(

        <>
          <p>{data}</p>
          <p>{mydata[0] && mydata[0].name}</p>
        </>

    )

}

export default Content