﻿import React, { Dispatch, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    makeStyles,
    Avatar
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
/** material-ui がデフォルトで提供するサイドバーをDrawerという  */
import Drawer from '@material-ui/core/Drawer';

import reactIcon from '../../assets/react.png';
import reduxIcon from '../../assets/react-redux.png';
import muiIcon from '../../assets/material-ui.png';
import tsIcon from '../../assets/typescript.png';

/** 仕切り線 : https://material-ui.com/components/dividers/ */
import Divider from '@material-ui/core/Divider';
/** 縦方向のリスト　：　https://material-ui.com/components/lists/ */
import List from '@material-ui/core/List';
import { IRootState } from "../../store/rootModel";
import AppRouteDrawer, { MenuList, MenuProps } from "../../AppRouteDrawer";
import { Skeleton } from "@material-ui/lab";

/** css in js(ts)  */
import clsx from "clsx";
import style from "./style";
const cssInCode = makeStyles(style);


const SideDrawer: React.FC = () => {
    const classes = cssInCode();
    const overlay = useSelector((x: IRootState) => x.overlay);
    const drawer = useSelector((state: IRootState) => state.drawer);
    const account = useSelector((state: IRootState) => state.account);

    return (
        <div className={classes.root}>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !drawer.open && classes.drawerPaperClose),
                }}
                open={drawer.open}
            >
                <div className={classes.bg} />
                <Grid container className={clsx(classes.profile, !drawer.open && classes.hiddenHeader)}>
                    <Grid item className={clsx(classes.center)}>
                        <a href="#">
                            <h3 className={classes.profileTitle}>
                                Grand Monsieur
                            </h3>
                        </a>
                    </Grid>
                    <Grid item className={clsx(classes.center)}
                        style={{ textAlign: '-webkit-center' as any }}>
                        {overlay.openWaitingSite ?
                            <Skeleton><Avatar className={classes.profileIcon} /></Skeleton> :
                            <Avatar src={account.photo} className={classes.profileIcon} />
                        }
                    </Grid>
                    <Grid item className={clsx(classes.center)}
                        style={{ textAlign: '-webkit-center' as any }}>
                        {
                            overlay.openWaitingSite ?
                                <Skeleton><h5 /></Skeleton> :
                                <h5>{account.displayName}</h5>
                        }
                    </Grid>
                </Grid>

                { /* <Divider /> */}
                <Divider className={classes.divider} />

                <List className={classes.list}>
                    <AppRouteDrawer />
                </List>

                <Grid container className={clsx(classes.toolbarIcon, !drawer.open && classes.hiddenFooter)}>
                    <a rel="noreferrer" target="_blank" href="https://reactjs.org/" >
                        <img src={reactIcon} className={classes.reactIconHeight} />
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://redux.js.org/">
                        <img src={reduxIcon} className={classes.reduxIconHeight} />
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://material-ui.com/">
                        <img src={muiIcon} className={classes.reduxIconHeight} />
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://www.typescriptlang.org/">
                        <img src={tsIcon} className={classes.tsIcon} />
                    </a>
                </Grid>
            </Drawer>

        </div>
    );
};

export default SideDrawer;