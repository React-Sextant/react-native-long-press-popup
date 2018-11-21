import React from 'react';
import RootView from './lib/RootView'
import PopupWindow from './lib/Popover'

export default class Popover{

    static show(menus,position,isTop) {
        RootView.setView(<PopupWindow menus={menus} position={position} isTop={isTop}/>)
    }

    static hide() {
        RootView.setView()
    }
}