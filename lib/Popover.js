import React from 'react'
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
    Dimensions
} from 'react-native'

const HEIGHT = Dimensions.get('window').height;

function PopupWindow(props){
    if(props.menus){
        const pageY = props.event.nativeEvent.pageY.toFixed(0)*1;
        const _position = {
            top:pageY+80>HEIGHT?pageY-80:pageY,
        };
        const isTop = pageY+80<HEIGHT;

        return (
            <View style={[styles.popover,{...props.position||_position}]}>
                {isTop&&<View style={styles.anchor}>
                    <View style={styles.anchorTop} />
                </View>}
                <View style={{flexDirection:'row'}}>
                    {props.menus.map((a,i)=>{
                        return (
                            <TouchableOpacity onPress={a.onPress} key={i}>
                                <View style={[styles.btn,
                                    props.menus.length===1?styles.singleBtn:
                                        i===props.menus.length-1?styles.rightBtn:
                                            i===0?styles.leftBtn:
                                                styles.centerBtn]}>
                                    <Text style={styles.font}>{a.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                {!isTop&&<View style={styles.anchor}>
                    <View style={styles.anchorBottom} />
                </View>}
            </View>
        )
    }
}

export default React.memo(PopupWindow)

const styles = StyleSheet.create({
    popover:{
        alignItems:'center',
        position:'absolute',
        justifyContent:'center'
    },
    btn:{
        backgroundColor:'#000',
        paddingVertical:10,
        paddingHorizontal:20,
        marginHorizontal:0.3
    },
    leftBtn:{
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10,
    },
    rightBtn:{
        borderBottomRightRadius:10,
        borderTopRightRadius:10,

    },
    centerBtn:{
    },
    singleBtn:{
        borderRadius:10
    },
    anchor:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    font:{
        color:'white'
    },
    anchorBottom:{
        width:0,
        height:0,
        borderStyle:'solid',
        borderWidth:7,
        borderTopColor:'#000',
        borderLeftColor:'transparent',
        borderBottomColor:'transparent',
        borderRightColor:'transparent',
    },
    anchorTop:{
        width:0,
        height:0,
        borderStyle:'solid',
        borderWidth:7,
        borderTopColor:'transparent',
        borderLeftColor:'transparent',
        borderBottomColor:'#000',
        borderRightColor:'transparent',
    },

});