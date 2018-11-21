import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native';
import Popover from 'react-native-long-press-popup'

export default class extends React.Component {
    render(){
        const menus = [
            {name:'复制',onPress:()=>alert('复制')},
            {name:'粘贴',onPress:()=>alert('粘贴')},
        ];
        return (
            <View style={{flex:1,position:'relative'}}>
                <TouchableOpacity ref={"button"}
                                  onLongPress={(e)=>{
                                      //振动反馈，使用时注意添加权限
                                      // Vibration.vibrate(1000);
                                      this.refs.button.measure((ox, oy, width, height, px, py) => {
                                          Popover.show(menus,{
                                              top:py<height?py+height:py-height
                                          },py<height);
                                      });

                                  }}
                >
                    <View style={{height:50,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                        <Text>get position from refs.measure</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity ref={"button2"}
                                  onPress={(e)=>{
                                      this.refs.button2.measure((ox, oy, width, height, px, py) => {
                                          Popover.show(menus,{
                                              top:py<height?py+height:py-height
                                          },py<height);
                                      });

                                  }}
                >
                    <View style={{height:50,backgroundColor:'blue',justifyContent:'center',alignItems:'center'}}>
                        <Text>get position from refs.measure</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}