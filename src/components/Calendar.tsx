/*************************************************************************************************
 * @author:   weilu
 * @data:     2019-10-31 16:03
 ************************************************************************************************/
import React, {Component} from 'react';
import {
  PixelRatio, ScrollView,
  StyleSheet,
  Text, TouchableHighlight,
  View,
} from 'react-native';

interface CalendarProps {
  startTime?: Date;
  holiday?: any;
  check?: any;
  headerStyle?: any;
  num?: number;
  touchEvent?: (s: string) => void
}

interface CalendarState {
  startTime: Date;
  holiday: any;
  check : any;
  headerStyle: any;
  num: number;
}

export class Calendar extends Component<CalendarProps, CalendarState> {

  constructor(props: Readonly<CalendarProps>) {
    super(props);
    const startTime = this.props.startTime || new Date();
    const holiday = this.props.holiday || {};
    const check = this.props.check || {};
    const headerStyle = this.props.headerStyle || {};
    //显示月份的个数
    const num = this.props.num || 3;
    this.state = {
      startTime: startTime,
      num: num,
      holiday: holiday,
      check: check,
      headerStyle: headerStyle
    }
  }

  render() {
    const date = this.state.startTime;
    const num = this.state.num;
    const holiday = this.state.holiday;
    const check = this.state.check;

    let items = [];
    const dateNow = new Date();

    for (let n = 0; n < num; n++) {
      /*循环完成一个月*/
      let rows = [];
      const newDate = new Date(date.getFullYear(), date.getMonth() + 1 + n, 0); //天数
      const counts = newDate.getDate(); //天数
      let week = new Date(date.getFullYear(), date.getMonth() + n, 1).getDay(); //月份开始的星期

      if (week == 0){
        week = 7;
      }
      const rowCounts = Math.ceil((counts + week - 1) / 7); //本月行数
      for (let i = 0; i < rowCounts; i++){
        let days = [];
        for (let j = (i * 7) + 1; j < ((i+1) * 7) + 1; j++){
          //根据每个月开始的［星期］往后推
          let dayNum = j - week + 1;
          if(dayNum > 0 && j < counts + week){
            //如果当前日期小于今天，则变灰
            const dateObj = new Date(date.getFullYear(), date.getMonth() + n, dayNum);
            const dateStr = dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1) + '-' + dayNum;
            let grayStyle = {};
            let bk = {};
            if(dateNow >= new Date(date.getFullYear(), date.getMonth() + n, dayNum + 1)){
              grayStyle = {
                color: '#ccc'
              };
            }
            if(holiday[dateStr]){
              dayNum = holiday[dateStr];
            }
            if(check[dateStr]){
              bk = {
                backgroundColor: '#1EB7FF',
                width: 46,
                height: 35,
                alignItems: 'center',
                justifyContent: 'center'
              };
              grayStyle = {
                color: '#fff'
              };
            }
            days.push(
              <TouchableHighlight style={[styles.flex_1]} underlayColor="#fff"
                                  onPress={() => this.props.touchEvent ? this.props.touchEvent.bind(this, dateStr) : null}>
                <View style={bk}>
                  <Text style={grayStyle}>{dayNum}</Text>
                </View>
              </TouchableHighlight>
            );
          }else{
            days.push(
              <View style={[styles.flex_1]}>
                <Text/>
              </View>
            );
          }
        }
        rows.push(
          <View style={styles.row}>{days}</View>
        );
      }
      items.push(
        <View style={[styles.cm_bottom]}>
          <View style={styles.month}>
            <Text style={styles.month_text}>{newDate.getFullYear()}年{newDate.getMonth() + 1}月</Text>
          </View>
          {rows}
        </View>
      );
    }

    return (
      <View style={styles.calendar_container}>

        <View style={[styles.row, styles.row_header, this.props.headerStyle]}>
          <View style={[styles.flex_1]}>
            <Text style={this.props.headerStyle}>一</Text>
          </View>
          <View style={[styles.flex_1]}>
            <Text style={this.props.headerStyle}>二</Text>
          </View>
          <View style={[styles.flex_1]}>
            <Text style={this.props.headerStyle}>三</Text>
          </View>
          <View style={[styles.flex_1]}>
            <Text style={this.props.headerStyle}>四</Text>
          </View>
          <View style={[styles.flex_1]}>
            <Text style={this.props.headerStyle}>五</Text>
          </View>
          <View style={[styles.flex_1]}>
            <Text style={[styles.week_highlight,  this.props.headerStyle]}>六</Text>
          </View>
          <View style={[styles.flex_1]}>
            <Text style={[styles.week_highlight,  this.props.headerStyle]}>日</Text>
          </View>
        </View>

        <ScrollView style={{flex:1,}}>
          {items}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },
  flex_1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendar_container: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopWidth: 1/PixelRatio.get(),
    borderBottomWidth: 1/PixelRatio.get(),
    borderColor: '#ccc'
  },
  row_header: {
    backgroundColor: '#F5F5F5',
    borderBottomWidth: 1/PixelRatio.get(),
    borderBottomColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    height: 35,
  },
  month: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  month_text: {
    fontSize: 18,
    fontWeight: '400',
  },
  week_highlight: {
    color: '#23B8FC'
  },
  cm_bottom: {
    borderBottomWidth: 1/PixelRatio.get(),
    borderBottomColor: '#ccc',
  }
});
