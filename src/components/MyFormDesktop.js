import React from "react";
import { Card,
    CardHeader,
    CardContent,
    TextField,
    Slider,
    FormControl,
    makeStyles,
    Switch,
    FormControlLabel,
    FormGroup,
    Typography,
    Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        width: "40%",
        padding: theme.spacing(2),
    },
    cardContent: {
        display: "flex",
        justifyContent: "center",
    },
    form: {
        width: "70%",
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

const MyFormDesktop = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Card className={classes.card}>
                <form>
                    <CardHeader title="My Form"/>
                    <CardContent className={classes.cardContent}>
                        <FormGroup className={classes.form}>
                            <TextField
                                name="search"
                                label="Search"
                            />
                            <FormControl margin="normal">
                                <Typography id="slider-label">
                            Results per Page
                                </Typography>
                                <Slider
                                    step={10}
                                    min={10}
                                    max={50}
                                    aria-labelledby="slider-label"
                                />
                            </FormControl>
                            <FormControlLabel
                                control={<Switch checked={true} onChange={() => {}} value="showHidden" />}
                                label="Show Hidden"
                                margin="normal"
                            />
                            <Button
                                className={classes.button}
                                color="primary"
                                variant="contained"
                                type="submit"
                            >
                            Submit
                            </Button>
                        </FormGroup>
                    </CardContent>
                </form>
            </Card>
        </div>
    );
};


export default MyFormDesktop;
