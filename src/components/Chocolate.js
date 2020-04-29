import React, { useState, useEffect } from 'react';
import choc from "../images/choc.jpg";
import data from "../data.json";
import "./styles/container.css";

function Chocolate(){

const [modal, toggleModal] = useState(false);

// styles
const containerStyles = {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    margin: '50px'
};

const modalBackground = {
    position: 'fixed',
    left: '0',
    top: '0',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'lightpink',
    display: modal ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '5',
};

const modalContainer = {
    backgroundColor: 'rgba(0,0,0,0.8)',
    width: '40vw',
    padding: '40px 0px 40px 0px',
    color: 'white'
};

const modalCloseButton = {
    backgroundColor: 'gray',
    width: '120px',
    height: '48px',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    marginBottom: '12px',
    display: 'flex',
    border: '2px solid black'
};

return(
    <div className="productContainer" style={containerStyles}>
        <div onClick={ () => toggleModal(true) }>
            <img src={choc} alt="choco" width="300px" />
            <p>Chocolate</p>
        </div>

        <div className="modalBackground" style={modalBackground} onClick={ () => toggleModal(false) }>
            <div className="modalContainer" style={modalContainer} onClick={ (event) => event.stopPropagation() }>
                <img src={ choc } alt="choco" width="300px"/>
                <p>Cost: 1.99</p>
                <div style={modalCloseButton} onClick={ () => toggleModal(false) }>Close</div>
            </div>
        </div>

    </div>

)};



export default Chocolate;