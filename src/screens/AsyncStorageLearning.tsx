/*************************************************************************************************
 * @author:   weilu
 * @data:     2019-10-29 10:53
 ************************************************************************************************/
import React, {Component} from 'react';
import {
  ImageBackground, ScrollView,
  StyleSheet,
  Text, TouchableOpacity,
  View,
} from 'react-native';
import {NavigationStackScreenProps} from "react-navigation-stack";
import AsyncStorage from '@react-native-community/async-storage';

export class AsyncStorageLearning extends Component<NavigationStackScreenProps> {
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
    this.props.navigation.push('CartPage');
  }

  press(data: Goods) {
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
        <Text onPress={this.goGouWu.bind(this)} style={styles.btn}>去结算{str}</Text>
      </ScrollView>
    );
  }
}

// 列表项组件
interface ItemProps {
  press: () => void;
  url: string;
  title: string;
}

class Item extends Component<ItemProps> {
  render() {
    return (
      <TouchableOpacity onPress={this.props.press} style={styles.item}>
        <View style={{flex: 1}}>
          <ImageBackground
            resizeMode={'cover'}
            style={styles.img}
            source={{uri: this.props.url}}>
            <Text numberOfLines={1} style={styles.item_text}>
              {this.props.title}
            </Text>
          </ImageBackground>

        </View>
      </TouchableOpacity>
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
    height: 110,
  },
  img: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'transparent'
  },
  item_text: {
    backgroundColor: '#000',
    opacity: 0.7,
    color: '#fff',
    height: 25,
    lineHeight: 25,
    textAlign: 'center',
    marginTop: 84,
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
  }
});

export interface Goods {
  id: string;
  title: string;
  desc: string;
  price: number;
  url: string;
}

const Model: Goods[] = [
  {
    id: '1',
    title: '佳沛新西兰进口猕猴桃',
    desc: '12个装',
    price: 99,
    url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1044875965,3822093933&fm=26&gp=0.jpg'
  },
  {
    id:'2',
    title: '墨西哥进口牛油果',
    desc: '6个装',
    price: 59,
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572413214952&di=dee595030cb4bae998927b2e67790ccd&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fedu%2Ftransform%2F20151124%2Fl4l7-fxkwvcp2970110.jpg'
  },
  {
    id:'3',
    title: '美国加州进口车厘子',
    desc: '1000g',
    price: 91.5,
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572413259704&di=1905fc0dc7328aec99d5987e682968cf&imgtype=0&src=http%3A%2F%2Fd3h1lg3ksw6i6b.cloudfront.net%2Fmedia%2Fimage%2F2018%2F02%2F15%2F974041bca7b64cca9808109dd0975476_shutterstock_231199135%2Bcopy.jpg'
  },
  {
    id:'4',
    title: '新疆特产西梅',
    desc: '1000g',
    price: 69,
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572413314920&di=e8286c6ccfdb7fd7949eac4c6826a0c3&imgtype=0&src=http%3A%2F%2Faduersite.oss-cn-hangzhou.aliyuncs.com%2F10759%2Fimage%2F20151227%2F20151227173700_8749.jpg'
  },
  {
    id:'5',
    title: '陕西大荔冬枣',
    desc: '2000g',
    price: 59.9,
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572414501706&di=46643305e6ba5e2c46818ed909140057&imgtype=0&src=http%3A%2F%2Fimage.cnpp.cn%2Fupload%2Fimages%2F20170717%2F1500283200_22346_6.jpg'
  },
  {
    id:'6',
    title: '南非红心西柚',
    desc: '2500g',
    price: 29.9,
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572413364797&di=57c5d284ce6358ea826a4eafd6d67c08&imgtype=0&src=http%3A%2F%2Fwww.tbw-hufu.com%2FtuhfJDEwLmFsaWNkbi5jb20vaTMvMzA1MzAwNjM3My9UQjJ5MmtndGI4a3B1Rmp5MEZjWFhhVWhwWGFfISEzMDUzMDA2MzczJDk.jpg'
  }
];
