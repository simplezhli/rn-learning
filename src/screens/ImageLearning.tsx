import React, {Component} from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const imgs = [
  {uri: 'http://www.ituring.com.cn/bookcover/1442.796.jpg'},
  {uri: 'http://www.ituring.com.cn/bookcover/1668.553.jpg'},
  {uri: 'http://www.ituring.com.cn/bookcover/1521.260.jpg'}
];

const imgs_ = [
  require('../img/book_1.jpg'),
  require('../img/book_2.jpg'),
  require('../img/book_3.jpg')
];

class ImageLearning extends Component{

  render() {
    return (
      <View style={[styles.flex, {marginTop:40}]}>
        {/*网络图片*/}
        <MyImage imgs={imgs}/>
        {/*本地图片*/}
        <MyImage imgs={imgs_}/>
      </View>
    );
  }
}

export default ImageLearning;

interface MyImageProps {
  imgs: any[];
}

class MyImage extends Component<MyImageProps> {
  state = {
    imgs : this.props.imgs,
    count: 0
  };
  goNext(){
    let count = this.state.count;
    count ++;
    if(count < imgs.length){
      this.setState({
        count: count
      });
    }
  }
  goPreview(){
    let count = this.state.count;
    count --;
    if(count >= 0){
      this.setState({
        count: count
      });
    }
  }

  render() {
    return (
      <View style={styles.flex}>
        <View style={styles.image}>
          <Image style={styles.img} source={this.state.imgs[this.state.count]} resizeMode={'contain'}/>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity onPress={this.goPreview.bind(this)}>
            <View style={styles.btn}>
              <Text>上一张</Text>
            </View>
          </TouchableOpacity>
          <View style={{width: 30}}/>
          <TouchableOpacity onPress={this.goNext.bind(this)}>
            <View style={styles.btn}>
              <Text>下一张</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    borderWidth: 1,
    width: 300,
    height: 200,
    borderRadius: 5,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    height: 150,
    width: 200
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  btn: {
    width: 60,
    height: 30,
    borderWidth: 1,
    borderColor: '#0089ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  }

});
