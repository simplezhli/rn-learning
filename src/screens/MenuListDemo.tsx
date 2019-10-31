/*************************************************************************************************
 * @author:   weilu
 * @data:     2019-10-31 10:23
 ************************************************************************************************/
import React, {Component} from 'react';
import {
  Alert,
  View,
} from 'react-native';
import {MenuData, MenuList} from '../components/MenuList';

export class MenuListDemo extends Component {

  onPress(val: string){
    Alert.alert(val);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <MenuList data={data} nSelected={1} tabSelected={0} click={this.onPress}/>
      </View>
    );
  }
}

const data : MenuData[] = [
  {
    title: "全部区域",
    child: [
      {
        title: "全部区域",
        content: ["全部区域"]
      },
      {
        title: "热门商圈",
        content: ["虹桥地区", "徐家汇地区", "淮海路商业区", "静安寺地区", "上海火车站地区", "浦东陆家嘴金融贸易区", "四川北路商业区", "人民广场地区", "南翔、安亭汽车城"]
      },
      {
        title: "热门行政区",
        content: ["静安区", "徐汇区", "长宁区", "黄埔区", "虹口区", "宝山区", "闸北区"]
      }
    ]
  },
  {
    title: "地铁沿线",
    child: [
      {
        title: "地铁全线",
        content: ["地铁全线"]
      },
      {
        title: "一号线",
        content: ["莘庄站", "外环路站", "莲花路站", "锦江乐园站", "上海南站站", "漕宝路站"]
      },
      {
        title: "二号线",
        content: ["浦东国际机场站", "海天三路站", "远东大道站", "凌空路站"]
      }
    ]
  }
];

