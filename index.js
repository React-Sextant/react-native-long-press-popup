import React from 'react';
import RootView from './lib/RootView'
import PopupWindow from './lib/Popover'

export default class {
    static show(width,height,py,menus) {
        RootView.setView(<PopupWindow position={{
            width:width,
            top:py<height?py+height:py-height+50,
            isTop:py<height
        }} menus={menus}/>)
    }

    static hide() {
        RootView.setView()
    }
}