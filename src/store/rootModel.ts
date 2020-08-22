﻿import React from "react";

import { IOverlay } from "./Overlay/model";
import { IPalette, ITheme } from "./Theme/model";
import { IDrawer } from "./SideDrawer/model";
import { ITitle } from "./Layout/model";
import { IAccount } from "./Account/model";
import { IArchive } from "./Archive/model";

export interface IActionBase {
    type: string;
    [prop: string]: any;
}


// サイト全体を通して、状態管理するための宣言
export interface IRootState {
    router:any,
    customTheme: ITheme,
    customPalette: IPalette,
    overlay: IOverlay,
    drawer: IDrawer,
    title: ITitle,
    account: IAccount,
    archive: IArchive,
}
