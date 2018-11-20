import React from 'react'
import { View,TouchableOpacity,Text } from 'react-native';
import Popover from '../index'

export default class extends React.Component {
    render(){
        return (
            <View style={{flex:1}}>
                <TouchableOpacity ref={"button"}
                                  onLongPress={()=>{
                                      this.refs.button.measure((ox, oy, width, height, px, py) => {
                                          Popover.show({
                                              width:width,
                                              height:0
                                          },[
                                              {
                                                  name:'复制',
                                                  onPress:()=>{
                                                      alert(1);
                                                      Popover.hide()
                                                  }
                                              },
                                              {
                                                  name:'粘贴',
                                                  onPress:()=>{
                                                      alert(2)
                                                  }
                                              },
                                          ])
                                      })
                                  }}
                >
                    <View style={{height:50,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                        <Text>onLongPress</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}