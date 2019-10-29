/*************************************************************************************************
 * @author:   weilu
 * @data:     2019-10-29 10:53
 ************************************************************************************************/
import React, {Component} from 'react';
import {
  AsyncStorage,
  Image, ScrollView,
  StyleSheet,
  Text, TouchableOpacity,
  View,
} from 'react-native';
import {NavigationStackScreenProps} from "react-navigation-stack";

export class AsyncStorageLearning extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>AsyncStorage</Text>
      </View>
    );
  }
}

// 列表项组件
interface ItemProps {
  press: any;
  url: string;
  title: string;
}

class Item extends Component<ItemProps> {
  render() {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={this.props.press}>
          <Image
            resizeMode={'contain'}
            style={styles.img}
            source={{uri: this.props.url}}>
            <Text numberOfLines={1} style={styles.item_text}>
              {this.props.title}
            </Text>
          </Image>
        </TouchableOpacity>
      </View>
    );
  }
}

//列表组件
class List extends Component<NavigationStackScreenProps> {
  state = {
    count: 0,
  };
  componentDidMount(): void {
    const _that = this;
    AsyncStorage.getAllKeys().then(keys => {
      //将存储的商品条数反应到按钮上
      _that.setState({
        count: keys.length
      });
    }).catch(error => {
      if (error){
        //TODO：存储取数据出错,给用户提示错误信息
      }
    });
  }

  goGouWu(){
    // this.props.navigation.push({
    //   component: GouWu,
    //   title:'购物车'
    // });
  }

  press(data: any) {
    let count = this.state.count;
    count++;
    // 改变数字状态
    this.setState({
      count: count
    });
    //AsyncStorage存储
    AsyncStorage.setItem('SP-' + this.genId() + '-SP', JSON.stringify(data)).catch(error => {
      if (error){
        //TODO：存储出错
      }
    });
  }
  // 生成随机ID：GUID
  // GUID生成的代码来自于Stoyan Stefanov
  genId(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    }).toUpperCase();
  }

  render() {
    const list = [];
    for (let i = 0; i < Model.length; i++){
      if (i % 2 == 0){
        const row = (
          <View style={styles.row} key={i}>
            <Item press={this.press.bind(this, Model[i])} url={Model[i].url} title={Model[i].title}/>
            <Item press={this.press.bind(this, Model[i+1])} url={Model[i+1].url} title={Model[i+1].title}/>
          </View>
        );
        list.push(row);
      }
    }
    const count = this.state.count;
    let str = null;
    if(count){
      str = '，共'+ count + '件商品';
    }

    return (
      <ScrollView style={{marginTop:10}}>
        {list}
        <Text onPress={this.goGouWu} style={styles.btn}>去结算{str}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  item: {
    flex: 1,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 5,
    height: 100,
  },
  img: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  item_text: {
    backgroundColor: '#000',
    opacity: 0.7,
    color: '#fff',
    height: 25,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 74,
  },
  btn: {
    backgroundColor: '#ff7200',
    height: 33,
    textAlign: 'center',
    color: '#fff',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
    lineHeight: 24,
    fontSize: 18,
  },
  list_item: {
    marginRight: 5,
    marginLeft: 5,
    padding: 5,
    borderWidth: 1,
    height: 30,
    borderRadius: 3,
    borderColor: '#ddd',
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
  clear: {
    marginTop: 10,
    backgroundColor: '#fff',
    color: '#000',
    borderWidth: 1,
    borderColor: '#ddd',
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 24,
    height: 33,
    fontSize: 18,
    textAlign: 'center',
  }
});


const Model = [
  {
    id: '1',
    title: '佳沛新西兰进口猕猴桃',
    desc: '12个装',
    price: 99,
    url: 'http://vczero.github.io/ctrip/guo_1.jpg'
  },
  {
    id:'2',
    title: '墨西哥进口牛油果',
    desc: '6个装',
    price: 59,
    url: 'http://vczero.github.io/ctrip/guo_2.jpg'
  },
  {
    id:'3',
    title: '美国加州进口车厘子',
    desc: '1000g',
    price: 91.5,
    url: 'http://vczero.github.io/ctrip/guo_3.jpg'
  },
  {
    id:'4',
    title: '新疆特产西梅',
    desc: '1000g',
    price: 69,
    url: 'http://vczero.github.io/ctrip/guo_4.jpg'
  },
  {
    id:'5',
    title: '陕西大荔冬枣',
    desc: '2000g',
    price: 59.9,
    url: 'http://vczero.github.io/ctrip/guo_5.jpg'
  },
  {
    id:'6',
    title: '南非红心西柚',
    desc: '2500g',
    price: 29.9,
    url: 'http://vczero.github.io/ctrip/guo_6.jpg'
  }
];
