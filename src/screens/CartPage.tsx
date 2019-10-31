/*************************************************************************************************
 * @author:   weilu
 * @data:     2019-10-30 10:04
 ************************************************************************************************/
import React, {Component} from 'react';
import {Alert, AsyncStorage, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Goods} from './AsyncStorageLearning';

interface CartState {
  data: Goods[];
  price: number;
}

export class CartPage extends Component<{}, CartState> {

  constructor(props: Readonly<{}>){
    super(props);
    const data: Goods[] = [];
    this.state = {
      data: data,
      price: 0
    };
  }

  componentDidMount(): void {
    const _that = this;
    AsyncStorage.getAllKeys().then(keys => {
      AsyncStorage.multiGet(keys).then(value => {
        //得到的结果是二维数组
        //value[i][0]表示我们存储的键，value[i][1]表示我们存储的值
        let arr = [];
        for(let i in value){
          arr.push(JSON.parse(value[i][1]));
        }
        _that.setState({
          data: arr
        });
      });
    }).catch(error => {
      if (error){
        // TODO:存储取数据出错,如果发生错误，这里直接返回（return）防止进入下面的逻辑
      }
    });
  }

  clearStorage(){
    const _that = this;
    AsyncStorage.clear().then((_ => {
      _that.setState({
        data: [],
        price: 0
      });
      Alert.alert('购物车已经清空');
    }));
  }

  render() {
    let data = this.state.data;
    let price = this.state.price;
    const list = [];
    for (let i = 0; i < data.length; i++){
      price += data[i].price;
      list.push(
        <View style={[styles.row, styles.list_item]}>
          <Text style={styles.list_item_desc}>
            {data[i].title}
            {data[i].desc}
          </Text>
          <Text style={styles.list_item_price}>¥{data[i].price}</Text>
        </View>
      );
    }
    let str = null;
    if(price){
      str = '，共' + price.toFixed(1) + '元';
    }
    return (
      <ScrollView style={{marginTop:10}}>
        {list}
        <Text style={styles.btn}>支付{str}</Text>
        <Text style={styles.clear} onPress={this.clearStorage.bind(this)}>清空购物车</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  list_item: {
    marginRight: 5,
    marginLeft: 5,
    padding: 5,
    borderWidth: 1,
    height: 32,
    borderRadius: 3,
    borderColor: '#ddd',
    alignItems: 'center'
  },
  list_item_desc: {
    flex: 2,
    fontSize: 15,
  },
  list_item_price: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
  },
  btn: {
    backgroundColor: '#ff7200',
    height: 33,
    textAlign: 'center',
    color: '#fff',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
    lineHeight: 33,
    fontSize: 18,
  },
  clear: {
    marginTop: 10,
    backgroundColor: '#fff',
    color: '#000',
    borderWidth: 1,
    borderColor: '#ddd',
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 33,
    height: 33,
    fontSize: 18,
    textAlign: 'center',
  }
});
