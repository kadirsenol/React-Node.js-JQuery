import About from "./About"
import Contact from "./Contact"
import HeaderHome from "./HeaderHome"
import Portfolio from "./Portfolio"
import Footer from "./footer"

const PageContent = ()=>{

    return(

        <div className="w3-padding-large" id="main" >

            <>
                <HeaderHome/>
                <About/>
                <Portfolio/>
                <Contact/>
                <Footer/>
            </>

        </div>

    )
}

export default PageContent