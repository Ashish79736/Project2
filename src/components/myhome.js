
import About from "./aboutus";
import Contact from "./Contact";
import Client from "./client";
import Footer from "./footer";
import Subscribe from "./subscribe";
import Product from "./product";

export default function Home(){
    return(
        <>
            <About/>
            <Product/>
            <Contact/>
            <Client/>
            <Subscribe/>
            <Footer/>
        </>
    )
}