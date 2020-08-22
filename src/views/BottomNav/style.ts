﻿import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import { drawerWidth, drawerMinWidth } from '../../global';

//css
const style: Styles<Theme, {}> = (theme) => ({
    bottomNav: {
        position: "fixed",
        bottom: 0,
        zIndex: theme.zIndex.drawer + 1,
        width: "100%",
        //[theme.breakpoints.up("md")]: {
        //    height: 0,
        //    minHeight: 0,
        //    visibility: "hidden",
        //    zIndex: -1,
        //},
    }
});

export default style;
