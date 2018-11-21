# React Native仿QQ/微信/iOS 长按文本弹出上下文菜单
A React Native Popop Menu with long press open

<img src="https://github.com/zhijiasoft/react-native-long-press-popup/blob/master/example/demo.png" style="width:100%;"/>
## Getting started

`$ npm install react-native-long-press-popup@https://github.com/zhijiasoft/react-native-long-press-popup.git --save`

## Usage

```javascript
const menus = [
    {name:'复制',onPress:()=>alert('复制')},
    {name:'粘贴',onPress:()=>alert('粘贴')},
];
<TouchableOpacity ref={"button"}
                  onPress={(e)=>{
                      this.refs.button.measure((ox, oy, width, height, px, py) => {
                          Popover.show(menus,{
                              top:py<height?py+height:py-height
                          },py<height);
                      });

                  }}
>
```

## Popover.show(menus: Array\<Object>, position: Object, isTop: boolean)

**menus** : 弹出的菜单信息

**position**: 相对定位，决定弹出的气泡位置

**isTop**: 决定气泡下标指向上还是下