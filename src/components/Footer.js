import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
const useStyles = makeStyles({
    root:{
        color: "white",
    width: "100vw",
    backgroundColor: "pink",
}});


function Footer(){
    const classes =useStyles();
    const [value, setValue]= React.useState(0);
    return(

        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}

            showLabels className={classes.root}

            >

            <p> Follow Us on Social Media</p>

            <BottomNavigationAction icon={<TwitterIcon/>}/>
            <BottomNavigationAction icon={<InstagramIcon/>}/>
            <BottomNavigationAction icon={<PinterestIcon/>}/>
            <BottomNavigationAction icon={<FacebookIcon/>}/>


        </BottomNavigation>




            )
}


export default Footer;