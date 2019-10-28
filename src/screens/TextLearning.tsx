import React, {Component} from "react";
import {Alert, PixelRatio, StyleSheet, Text, View} from "react-native";

class TextLearning extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header/>
        <List title='宇航员在太空宣布“三体”获奖'/>
        <List title='NASA发短片纪念火星征程50年'/>
        <List title='男生连续做一周苦瓜吃吐女友'/>
        <List title='女童遭鲨鱼袭击又下海救伙伴'/>
        <ImportantNews news={[
          '1、刘慈欣《三体》获“雨果奖”为中国作家首次',
          '2、京津冀协同发展定位明确：北京无经济中心表述',
          '3、好奇宝宝第一次淋雨，父亲用镜头记录了下来',
          '4、人民邮电出版社即将出版《React Native入门与实战》，读者可以使用JavaScript开发原生应用']}>
        </ImportantNews>
      </View>
    );
  }
}

export default TextLearning;

class Header extends Component {
  render() {
    return (
      <View style={styles.flex}>
        <Text style={styles.font}>
          <Text style={styles.font_1}>網易</Text>
          <Text style={styles.font_2}>新闻</Text>
          <Text>有态度°</Text>
        </Text>
      </View>
    );
  }
}

interface ListProps {
  title: string;
}

class List extends Component<ListProps> {
  render() {
    return (
      <View style={styles.list_item}>
        <Text style={styles.list_item_font}>{this.props.title}</Text>
      </View>
    );
  }
}

interface NewsProps {
  news: any[];
}

class ImportantNews extends Component<NewsProps> {
  show(title: string){
    Alert.alert(title);
  }
  render() {
    const news = [];
    for (const i in this.props.news){
      const text = (
        <Text
          onPress={this.show.bind(this, this.props.news[i])}
          numberOfLines={2}
          style={styles.news_item}>
          {this.props.news[i]}
        </Text>
      );
      news.push(text)
    }
    return (
      <View style={{flex: 1}}>
        <Text style={styles.news_title}>今日要闻</Text>
        {news}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    marginTop: 25,
    height: 50,
    borderBottomWidth: 3/PixelRatio.get(),
    borderBottomColor: '#ef2d36',
    alignItems: 'center',
  },
  font: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  font_1: {
    color: '#cd1d1c'
  },
  font_2: {
    color: '#fff',
    backgroundColor: '#cd1d1c'
  },
  list_item:{
    height:40,
    marginLeft:10,
    marginRight:10,
    borderBottomWidth:1,
    borderBottomColor: '#ddd',
    justifyContent: 'center'
  },
  list_item_font:{
    fontSize:16
  },
  news_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#cd1d1c',
    marginLeft: 10,
    marginTop: 15,
  },
  news_item: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    lineHeight: 20
  }
});
