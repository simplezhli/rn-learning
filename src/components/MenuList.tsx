/*************************************************************************************************
 * @author:   weilu
 * @data:     2019-10-30 17:42
 ************************************************************************************************/
import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text, TouchableOpacity,
  View,
} from 'react-native';

export interface MenuData {
  title: string;
  child: ChildData[];
}

interface ChildData {
  title: string;
  content: string[];
}

interface MenuListProps {
  data: MenuData[];
  nSelected: number;
  tabSelected: number;
  click: (s: string) => void
}

interface MenuListState {
  nSelected: number;
  tabSelected: number;
}

export class MenuList extends Component<MenuListProps, MenuListState> {

  constructor(props: Readonly<MenuListProps>){
    super(props);
    //左侧选择的index
    let nSelected = props.nSelected;
    //头部选择的index
    let tabSelected = props.tabSelected;

    this.state = {
      nSelected: nSelected,
      tabSelected: tabSelected,
    };
  }

  render() {
    let header = this.renderHeader();
    let left = this.renderLeft();
    let right = this.renderRight();
    return (
      <View style={styles.container}>
        <View style={[styles.row, styles.header]}>
          {header}
        </View>
        <View style={[styles.row, styles.flex_1]}>
          <ScrollView style={[styles.flex_1, styles.left_panel]}>
            {left}
          </ScrollView>
          <ScrollView style={[styles.flex_1, styles.right_panel]}>
            {right}
          </ScrollView>
        </View>
      </View>
    );
  }
  // 渲染头部TabBar
  renderHeader(){
    const data = this.props.data;
    const tabSelected = this.state.tabSelected;
    let header = [];
    for (let i = 0; i < data.length; i ++){
      let tabStyle = null;
      if(i == tabSelected){
        tabStyle = [styles.header_text, styles.active_blue];
      }else{
        tabStyle = [styles.header_text];
      }
      header.push(
        <TouchableOpacity style={[styles.flex_1, styles.center]}
                          onPress={this.headerPress.bind(this, i)}
                          key={data[i].title}>
          <Text style={tabStyle}>{data[i].title}</Text>
        </TouchableOpacity>
      );
    }
    return header;
  }

  //渲染左侧
  renderLeft(){
    const data = this.props.data;
    const nSelected = this.state.nSelected;
    const tabSelected = this.state.tabSelected;
    let leftPanel = [];
    for (let i = 0; i < data.length; i ++) {
      if (i == tabSelected){
        for(let k = 0; k < data[i].child.length; k ++){
          const style = (k == nSelected) ? styles.select_color : {};
          leftPanel.push(
            <Text onPress={this.leftPress.bind(this, i, k)}
                  key={data[i].child[k].title}
                  // 点击不高亮， ios默认点击高亮
                  suppressHighlighting={true}
                  style={[styles.left_row, style]}>
              {data[i].child[k].title}
            </Text>);
        }
        break;
      }
    }
    return leftPanel;
  }

  //渲染右边，二级菜单
  renderRight(){
    const data = this.props.data;
    const tabSelected = this.state.tabSelected;
    const nSelected = this.state.nSelected;
    let rightPanel = [];
    for(let i = 0; i < data.length; i ++){
      if(tabSelected == i){
        for(let k = 0; k < data[i].child.length; k ++){
          if (k == nSelected){
            for(let j = 0; j < data[i].child[k].content.length; j ++){
              rightPanel.push(
                <Text onPress={this.props.click.bind(this, data[i].child[k].content[j])}
                      key={data[i].child[k].content[j]}
                      suppressHighlighting={true}
                      style={styles.left_row}>
                  {data[i].child[k].content[j]}
                </Text>);
            }
            break;
          }
        }
      }
    }
    return rightPanel;
  }

  //头部点击事件即Tab切换事件
  headerPress(index: number){
    this.setState({
      tabSelected: index,
      nSelected: 0
    });
  }

  //点击左侧，展示右侧二级菜单
  leftPress(tabIndex: number, nIndex: number){
    this.setState({
      tabSelected: tabIndex,
      nSelected: nIndex
    });
  }
}

const styles = StyleSheet.create({
  container: {
    height: 240,
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  row: {
    flexDirection: 'row'
  },
  flex_1: {
    flex: 1
  },
  header: {
    height: 35,
    borderBottomWidth: 1,
    borderColor: '#DFDFDF',
    backgroundColor: '#F5F5F5'
  },
  header_text: {
    color: '#7B7B7B',
    fontSize: 15
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  left_panel: {
    backgroundColor: '#F2F2F2',
    height: 205,
  },
  select_color:{
    backgroundColor: '#fff'
  },
  left_row: {
    height: 40,
    lineHeight: 40,
    fontSize: 14,
    color: '#7C7C7C',
    paddingLeft: 10
  },
  right_panel: {
    height: 205
  },
  active_blue:{
    color: '#00B7EB'
  },
  active_fff: {
    backgroundColor: '#fff'
  }
});

