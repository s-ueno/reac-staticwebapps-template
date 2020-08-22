﻿import React, { Fragment, Dispatch, useState } from "react";
import { Switch, Route, RouteProps } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Hidden } from "@material-ui/core";
/** material-ui の リスト */
import ListItem from '@material-ui/core/ListItem';
/** material-ui の リストにアイコンをつける */
import ListItemIcon from '@material-ui/core/ListItemIcon';
/** material-ui の リストに文字をつける */
import ListItemText from '@material-ui/core/ListItemText';
//svcIcon
import { SvgIcon } from '@material-ui/core';
import {
    mdiHomeOutline,
    mdiPlaylistStar,
    mdiLinkVariantPlus,
    mdiCogTransferOutline,
    mdiCloudCheckOutline,
} from '@mdi/js';

import { IRootState } from "./store/rootModel";
import { UpdateTitle } from "./store/Layout/action";
import { v4 as uuidv4 } from 'uuid';
import { updateDrawer } from "./store/SideDrawer/action";

// css in code(ts) -- inline style
import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';

const cssInCode = makeStyles((theme) => ({
    itemLink: {
        width: "100%",
        transition: "all 300ms linear" as any,
        borderRadius: "3px",
        backgroundColor: "transparent",
    },
    itemIcon: {
        width: "24px",
        height: "30px",
        fontSize: "24px",
        lineHeight: "30px",
        float: "left",
        marginRight: "15px",
        textAlign: "center",
        verticalAlign: "middle",
        color: theme.palette.text.primary,
    },
    itemText: {
        margin: "0",
        lineHeight: "30px",
        fontSize: "14px",
        color: theme.palette.text.primary,
    },
}));

export type MenuProps = {
    svgIcon: string;
    text: string;
    to: string;
}
export const MenuList: MenuProps[] = [
    { svgIcon: mdiHomeOutline, to: "/", text: "Home" },
    { svgIcon: mdiPlaylistStar, to: "/favorite", text: "Favorite" },
    { svgIcon: mdiCloudCheckOutline, to: "/archive", text: "Archive" },
    { svgIcon: mdiCogTransferOutline, to: "/settings", text: "Settings" },
];

const AppRouteDrawer: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const classes = cssInCode();
    const drawer = useSelector((state: IRootState) => state.drawer);
    const title = useSelector((state: IRootState) => state.title);

    const MakeBreakpointsList = (props:any) => {
        const { children, x, ...rest } = props;
        return (
            <Fragment>
                <Hidden smDown implementation="css">
                    <ListItem button className={classes.itemLink} onClick={e => NotifyTitleChange(x)}>
                        {children}
                    </ListItem>
                </Hidden>
                <Hidden mdUp implementation="css">
                    <ListItem button className={classes.itemLink} onClick={e => NotifyTitleChange(x, true)}>
                        {children}
                    </ListItem>
                </Hidden>
            </Fragment>
        );
    };
    // 画面遷移が終わるまでアニメーションが止まるので、遅延させたいが、localstate じゃダメだった。。。
    //const [performanceIsuue, SetPerformanceIssue] = useState("");
    function MakeListItems(props:any) {
        return props.items.map((x: MenuProps) => {
            return (
                <li key={`key-${uuidv4()}`}>
                    { /* <Link to={performanceIsuue}> */}
                    <Link to={x.to}>
                        <MakeBreakpointsList x={x}>
                            <ListItemIcon className={classes.itemIcon}>
                                <SvgIcon ><path d={x.svgIcon} /></SvgIcon>
                            </ListItemIcon>
                            <Hidden smDown implementation="css">
                                <ListItemText primary={drawer.open ? x.text : ""} className={classes.itemText} />
                            </Hidden>
                            <Hidden mdUp implementation="css">
                                <ListItemText primary={!drawer.open ? x.text : ""} className={classes.itemText} />
                            </Hidden>
                        </MakeBreakpointsList>
                    </Link >
                </li>
            )
        });
    }
    function NotifyTitleChange(x: MenuProps, menuClose: boolean = false) {
        if (menuClose) {
            dispatch(updateDrawer(!drawer.open));
        }
        dispatch(UpdateTitle(x.text, x.svgIcon));
    }

    return (
        <Fragment>
            <MakeListItems
                items={MenuList}
            />
        </Fragment>
    );
};

export default AppRouteDrawer;
