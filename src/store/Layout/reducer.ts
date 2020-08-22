﻿import React from "react";
import { ITitle, initialTitle } from "./model";
import { IActionBase } from "../rootModel";
import { UPDATE_TITLE } from "./action";

export function titleReducer(
    state: ITitle = initialTitle,
    action: IActionBase): ITitle {

    switch (action.type) {
        case UPDATE_TITLE:
            return {
                ...state,
                title: action.title,
                icon: action.icon
            };
        default:
            return state;
    }
}
