import React, {Component} from "react";
import {StyleSheet, AppRegistry, View} from 'react-native';
import Popover from "../index";

viewRoot = null;

class RootView extends Component {
    constructor(props) {
        super(props);
        viewRoot = this;
        this.state = {
            toast: null,
        }
    }

    render() {
        return (<View style={styles.rootView} pointerEvents="box-none" zIndex={999}>
            {this.state.toast}
        </View>)
    }

    static setView = (view) => {
        viewRoot.setState({toast: view})
    };
}


const originRegister = AppRegistry.registerComponent;

AppRegistry.registerComponent = (appKey, component) => {

    return originRegister(appKey, function () {
        const OriginAppComponent = component();

        return class extends Component {
            render() {
                return (
                    <View style={styles.container}
                          onStartShouldSetResponder={()=>Popover.hide()}
                    >
                        <View style={{flex:1}} zIndex={1}>
                            <OriginAppComponent/>
                        </View>
                        <RootView/>
                    </View>
                );
            };
        };
    });
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'transparent',
        position: 'relative',
    },
    rootView: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        flexDirection: "row",
        justifyContent: "center",
    }
});
export default RootView