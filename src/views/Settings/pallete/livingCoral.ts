﻿import React from "react";
import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import { IPalette } from "../../../store/Theme/model";

export const livingCoral: IPalette = {
    title: "Living Coral",
    appBar: "#FC766AFF",
    background: {
        default: "#5B84B1FF",
        paper: "#fee8e6",
    },
    primary: {
        light: "#7986cb",
        main: "#3f51b5",
        dark: "#303f9f",
        contrastText: "#fff"
    },
    secondary: {
        light: "#ff4081",
        main: "#f50057",
        dark: "#c51162",
        contrastText: "#fff"
    },
}
