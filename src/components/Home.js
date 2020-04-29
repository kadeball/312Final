import React from "react";
import hoemImage2 from "../images/hoemImage2.jpg";
import "./styles/pictures.css"
import Tables from "../components/Tables";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faIceCream} from '@fortawesome/free-solid-svg-icons'
function Home(){
    return(
        <div>
            <h1>
                Super Duper Ice Cream Shop
            <FontAwesomeIcon icon={faIceCream}></FontAwesomeIcon>
            </h1>
<img className="icecream" src={hoemImage2} alt="cream"/>
<Tables/>
<Footer/>
        </div>

)

}


export default Home;