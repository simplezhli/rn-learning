import React, {Component} from "react";
import {PixelRatio, StyleSheet, Text, TextInput, View} from "react-native";

class TextInputLearning extends Component{
  render() {
    return (
      <View style={[styles.flex, styles.topStatus]}>
        <Search/>
      </View>
    );
  }
}

export default TextInputLearning;

const onePT = 1/ PixelRatio.get();

class Search extends Component {
  state = {
    show: false,
    value: ''
  };

  getValue(text: string){
    this.setState({
      show: true,
      value: text
    })
  }
  hide(val: string){
    this.setState({
      show: false,
      value: val
    })
  }
  render() {
    return (
      <View style={styles.flex}>
        <View style={[styles.inputHeight, styles.flexDirection]}>
          <View style={styles.flex}>
            <TextInput
              style={styles.input}
              returnKeyType={"search"}
              placeholder={"请输入关键字"}
              onEndEditing={this.hide.bind(this, this.state.value)}
              value={this.state.value}
              onChangeText={text => this.getValue(text)}
            />
          </View>
          <View style={styles.btn}>
            <Text
              onPress={this.hide.bind(this, this.state.value)}
              style={styles.search}>搜索
            </Text>
          </View>
        </View>
        {this.state.show && this.state.value.length != 0 ?
          <View style={styles.result}>
            <Text onPress={this.hide.bind(this, this.state.value + '庄')}
                  style={styles.item} numberOfLines={1}>{this.state.value + '庄'}</Text>
            <Text onPress={this.hide.bind(this, this.state.value + '园街')}
                  style={styles.item} numberOfLines={1}>{this.state.value + '园街'}</Text>
            <Text onPress={this.hide.bind(this, this.state.value + '综合商店')}
                  style={styles.item} numberOfLines={1}>{this.state.value + '综合商店'}</Text>
            <Text onPress={this.hide.bind(this, this.state.value + '桃')}
                  style={styles.item} numberOfLines={1}>{this.state.value + '桃'}</Text>
            <Text onPress={this.hide.bind(this,  '杨林' + this.state.value + '园')}
                  style={styles.item} numberOfLines={1}>{ '杨林' + this.state.value + '园'}</Text>
          </View>
          : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  flexDirection: {
    flexDirection: 'row'
  },
  topStatus: {
    marginTop: 25
  },
  inputHeight: {
    height: 45
  },
  input: {
    height: 45,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  btn: {
    width: 55,
    marginLeft: -5,
    marginRight: 5,
    backgroundColor: '#23beff',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  result: {
    marginTop: onePT,
    marginLeft: 5,
    marginRight: 5,
    height: 200,
    borderColor: '#ccc',
    borderTopWidth: onePT
  },
  item: {
    fontSize: 16,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: onePT,
    borderColor: '#ddd',
    borderTopWidth: 0,
  }
});
