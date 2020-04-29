import React from "react";
import aboutImage from "../images/aboutImage.jpg";
import "./styles/pictures.css";
import Footer from "../components/Footer";
import Box from '@material-ui/core/Box';
import ice from "../images/ice.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';



function About(){


    return(
        <div>
            <img src={aboutImage} className="bout" alt="bout"/>
        <div className="row justify-content-center">
            <div className="col-4">
                <Box className="parrafo">
                    Founded in 2019, Manthaniel Icereamo wanted ice cream to be super all the time.
                    He used the same stuff that makes rubber duckies cry to make it taste so good. Our locally-owned and operated ice cream shop blends together the freshest, finest ingredients to create unique and delicious super-premium flavors that we know you’ll CRAVE!
                    Combined with friendly locals and lake visitors, you get the best combination of hand-dipped ice cream and family-centered service in town.
                    We serve over 24 hand-crafted ice cream flavors and offer several options for toppings, including hot fudge & caramel, your favorite candies, syrups and more.
                    Shakes, malts, sundaes and banana splits are also in our lineup of mouthwatering treats. Like any celebration, no party is complete without a cake!
                    Our ice cream cakes are available in any of our flavors and can be ordered in advance of your event.
                </Box>
            </div>
            <div className="col-4">
                <img src={ice} className="ice" alt="ice"/>
            </div>
        </div>
        <Footer/>
        </div>

    )
}


export default About;