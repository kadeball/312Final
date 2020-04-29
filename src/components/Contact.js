import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import raspberrycrop from "../images/raspberrycrop.jpg";
import "./styles/pictures.css"
import Button from '@material-ui/core/Button';



function Contact(){

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            margin: "50px"
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
    }));

    const classes = useStyles();



    return(
        <div className={classes.root}>
            <img className="rasp" src={raspberrycrop} alt="rass"/>
            <div>
        <TextField
            id="outlined-full-width"
            label="Enter Name"
            style={{ margin: 8 }}
            placeholder="Name"
            fullWidth
            margin="normal"
            color="secondary"
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
        />
                <TextField
                    id="outlined-full-width"
                    label="Enter Email"
                    style={{ margin: 8 }}
                    placeholder="Email"
                    fullWidth
                    margin="normal"
                    color="secondary"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    id="outlined-full-width"
                    label="Enter Phone Number"
                    style={{ margin: 8 }}
                    placeholder="Phone Number"
                    fullWidth
                    margin="normal"
                    color="secondary"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    id="outlined-full-width"
                    label="Enter Comment"
                    style={{ margin: 8 }}
                    placeholder="Comment"
                    fullWidth
                    margin="normal"
                    color="secondary"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <div>
                    <Button variant="contained" color="secondary">
                        Submit
                    </Button>
                </div>

            </div>
        </div>
    )
}


export default Contact;