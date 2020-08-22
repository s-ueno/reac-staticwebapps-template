import React, { Fragment, useState, useCallback, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {
    CssBaseline,
    makeStyles,
    CircularProgress,
    Grid,
    GridList,
    GridListTile,
    ListSubheader,

    Dialog

} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import { IRootState } from "../../store/rootModel";
import Grow from '@material-ui/core/Grow';


/** css in js(ts)  */
import clsx from "clsx";
import style from "./style";
const cssInCode = makeStyles(style);






const Home: React.FC = () => {
    const classes = cssInCode();
    const overlay = useSelector((x: IRootState) => x.overlay);
    const dispatch = useDispatch();

    return (
        <Grid container className={classes.root}>
        </Grid>
    );
};

export default Home;