import React from 'react';
import RootView from './lib/RootView'
import PopupWindow from './lib/Popover'

export default class Popover{

    static show(event,menus,position) {
        RootView.setView(<PopupWindow event={event} position={position} menus={menus}/>)
    }

    static hide() {
        RootView.setView()
    }
}