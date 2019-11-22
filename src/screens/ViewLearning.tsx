import React, {Component} from "react";
import {ActivityIndicator, LayoutChangeEvent, PixelRatio, StyleSheet, Text, View} from 'react-native';
import {colors} from '../styles/Colors';

class ViewLearning extends Component {

  _onLayout(event: LayoutChangeEvent) {
    let {x, y, width, height} = event.nativeEvent.layout;
    console.log('width from View onLayout:' + width); // 打印宽
    console.log('height from View onLayout:' + height); // 打印高
    console.log('x from View onLayout:' + x); // 打印组件左上顶点的横坐标
    console.log('y from View onLayout:' + y); // 打印组件左上顶点的纵坐标
  }
  render() {
    return (
      <View style={styles.flex}>
        <View style={styles.container} >
          <View style={[styles.item, styles.center]}>
            <Text style={styles.font}>酒店</Text>
          </View>

          <View style={[styles.item, styles.lineLeftRight]}>
            <View style={[styles.center, styles.flex, styles.lineCenter]}>
              <Text style={styles.font}>海外酒店</Text>
            </View>
            <View style={[styles.center, styles.flex]}>
              <Text style={styles.font}>特惠酒店</Text>
            </View>
          </View>

          <View style={styles.item} onLayout={this._onLayout}>
            <View style={[styles.center, styles.flex, styles.lineCenter]}>
              <Text style={styles.font}>团购</Text>
            </View>
            <View style={[styles.center, styles.flex]}>
              <Text style={styles.font}>客栈，公寓</Text>
            </View>
          </View>
        </View>
        <ActivityIndicator style={{top: 40}}
          animating={true}
          color={colors.primary}
          size={'large'}/>
      </View>
    );
  }
}

export default ViewLearning;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    height: 84,
    flexDirection: 'row',
    borderRadius: 5,
    padding: 2,
    backgroundColor: '#ff0067'
  },
  item: {
    flex: 1,
    height: 80
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flex: {
    flex: 1
  },
  font: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  lineLeftRight: {
    borderLeftWidth: 1/PixelRatio.get(),
    borderRightWidth: 1/PixelRatio.get(),
    borderColor: '#fff'
  },
  lineCenter: {
    borderBottomWidth: 1/PixelRatio.get(),
    borderColor: '#fff'
  }
});
