/*************************************************************************************************
 * @author:   weilu
 * @data:     2019-11-01 10:18
 ************************************************************************************************/
import React, {Component} from 'react';
import {
  PixelRatio,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Modal from "react-native-modal";

export class ModalDemo extends Component {

  state = {
    isModalOpen: true
  };

  render() {
    return (
      <View style={styles.page}>
        <Text onPress={this.openModal.bind(this)}>预定火车票</Text>
        <Modal
          isVisible={this.state.isModalOpen}
          onBackdropPress={() => this.closeModal()}
          onBackButtonPress={() => this.closeModal()}
          backdropOpacity={0.3}>
          <View style={styles.pay}>
            <Text style={styles.date}>2019/11/01</Text>
            <View style={styles.row}>
              <View style={styles.point}>
                <Text style={styles.station}>上海站</Text>
                <Text style={styles.mp10}>8:00</Text>
              </View>
              <View>
                <Text style={styles.at}/>
                <Text style={[styles.mp10,{textAlign:'center'}]}>G321</Text>
              </View>
              <View style={styles.point}>
                <Text style={[styles.station, {textAlign:'right'}]}>北京站</Text>
                <Text style={[{textAlign:'right'}, styles.mp10]}>12:35</Text>
              </View>
            </View>
            <View style={styles.mp10}>
              <Text>票价：¥500.0元</Text>
              <Text>乘车人：王**</Text>
              <Text>上海站 2层火车厅 15检票口</Text>
            </View>
            <View style={[styles.mp10,{alignItems:'center'}]}>
              <View style={styles.btn}>
                <Text style={styles.btn_text}>去支付</Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  openModal(){
    this.setState({
      isModalOpen: true
    });
  }
  closeModal(){
    this.setState({
      isModalOpen: false
    });
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 23
  },
  pay: {
    padding: 15,
    backgroundColor: '#fff'
  },
  row: {
    flexDirection: 'row'
  },
  point: {
    flex: 1,
    fontSize: 20,
  },
  at: {
    color: '#3BC1FF',
    borderWidth: 1 / PixelRatio.get() ,
    width: 80,
    borderColor: '#18B7FF',
    height: 1,
    marginTop: 10
  },
  date: {
    textAlign: 'center',
    marginBottom: 5
  },
  station: {
    fontSize: 20
  },
  mp10: {
    marginTop: 5
  },
  btn: {
    width: 60,
    height: 30,
    borderRadius: 3,
    backgroundColor: '#FFBA27',
    padding: 5,
  },
  btn_text: {
    lineHeight: 18,
    textAlign: 'center',
    color: '#fff',
  }
});
