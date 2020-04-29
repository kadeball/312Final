import React from "react";
import {Link} from "react-router-dom";
import "./styles/Nav.css";
import {Dropdown} from "react-bootstrap";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./styles/container.css";


function Navbar(){

    return(
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Flavors">Flavors</Link></li>
             <li> <Link to="/Contact">Contact</Link></li>
            <li><Link to="/About">About</Link></li>

            <ul>
                <Dropdown className="dropdown">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <FontAwesomeIcon icon={faBars}/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/">Home</Dropdown.Item>
                        <Dropdown.Item href="/Flavors">Flavors</Dropdown.Item>
                        <Dropdown.Item href="/Contact">Contact</Dropdown.Item>
                        <Dropdown.Item href="/About">About</Dropdown.Item>

                    </Dropdown.Menu>

                </Dropdown>
            </ul>
        </nav>

)
}

export default Navbar;