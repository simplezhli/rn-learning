import React, {Component} from "react";
import {
  GestureResponderEvent,
  PanResponder,
  PanResponderGestureState,
  PanResponderInstance,
  StyleSheet,
  View,
} from 'react-native';
import {dimensions} from '../styles/Dimensions';

class PanResponderLearning extends Component {

  state = {
    leftPoint: 1,
  };

  watcher: PanResponderInstance;
  startX: number;

  constructor(props) {
    super(props);
    startX = 0;
    this._onPanResponderGrant = this._onPanResponderGrant.bind(this);
    this._onPanResponderMove = this._onPanResponderMove.bind(this);
    this._onPanResponderEnd = this._onPanResponderEnd.bind(this);
    this.watcher = PanResponder.create({ //建立监视器
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: this._onPanResponderGrant, // 只关心按下、移动和松手
      onPanResponderMove: this._onPanResponderMove,
      onPanResponderEnd: this._onPanResponderEnd
    });
  }

  _onPanResponderGrant(e: GestureResponderEvent, gestureState: PanResponderGestureState) {
    this.startX = gestureState.x0; // 按住滑块，记录偏移值
  }

  _onPanResponderMove(e: GestureResponderEvent, gestureState: PanResponderGestureState) {
    const touchPointX = gestureState.moveX;
    let leftPoint;
    if ( touchPointX< this.startX) {
      leftPoint = 1; // 滑块移至到尽头，不继续偏移
    } else {
      if (touchPointX > dimensions.width - 42 - 48 + this.startX) {
        leftPoint = dimensions.width - 42 - 48;
      } else {
        leftPoint = touchPointX - this.startX;
      }
    }
    this.setState({
      leftPoint
    });
  }

  _onPanResponderEnd() {
    this.setState({
      leftPoint: 1
    });
  }

  render() {
    return (
      <View style={styles.flex}>
        <View style={styles.barViewStyle}>
          <View style={[styles.buttonViewStyle, {left: this.state.leftPoint}]}  {...this.watcher.panHandlers}/>
        </View>
      </View>
    );
  }
}

export default PanResponderLearning;

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  barViewStyle: {
    backgroundColor: 'gray',
    borderRadius: 25,
    width: dimensions.width - 40,
    height: 50,
    left: 20,
    top: 50,
    flexDirection: 'row'
  },
  buttonViewStyle: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: 'white',
    left: 1,
    top: 1
  }
});
