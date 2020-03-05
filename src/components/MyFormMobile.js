import React from "react";
import { Dialog,
    DialogTitle,
    TextField,
    Slider,
    FormControl,
    Switch,
    FormControlLabel,
    FormGroup,
    Typography,
    makeStyles,
    DialogContent,
    Button,
    DialogActions,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    actions: {
        margin: theme.spacing(2),
    },
}));

const MyFormMobile = () => {
    const classes = useStyles();
    return (
        <Dialog open fullScreen>
            <form >
                <DialogTitle>My Form</DialogTitle>
                <DialogContent>
                    <FormGroup>
                        <TextField
                            name="search"
                            label="Search"
                            margin="normal"
                        />
                        <FormControlLabel
                            control={<Switch checked={true} onChange={() => {}} value="showHidden" />}
                            label="Show Hidden"
                            margin="normal"
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
                    </FormGroup>
                </DialogContent>
                <DialogActions className={classes.actions}>
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                    >
                    Submit
                    </Button>

                </DialogActions>
            </form>
        </Dialog>
    );
};

export default MyFormMobile;
