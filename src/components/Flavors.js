import React from "react";
import data from "../data.json";
import Chocolate from "../components/Chocolate";
import Vanilla from "../components/Vanilla";
import Blue from "../components/Blue";
import Neo from "../components/Neo";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

function Flavors(){


    return(
        <div className="row">
            <div className="col"><Chocolate/></div>
            <div className="col"><Vanilla/></div>
            <div className="w-100"></div>
            <div className="col"><Neo/></div>
            <div className="col"><Blue/></div>
        <Footer/>
        </div>
    )
}


export default Flavors;