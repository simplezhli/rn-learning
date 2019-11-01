/*************************************************************************************************
 * @author:   weilu
 * @data:     2019-10-31 17:28
 ************************************************************************************************/
import React, {Component} from 'react';
import {
  Alert,
  StyleSheet,
  View,
} from 'react-native';
import {Calendar} from '../components/Calendar';

export class CalendarDemo extends Component {

  render() {

    const holiday = {
      '2019-10-1': '国庆节',
      '2019-9-10': '教师节',
      '2020-1-1': '元旦节',
      '2019-11-11': '双十一'
    };
    const check = {
      '2019-10-1': 'checked',
      '2019-9-1': 'checked',
      '2019-11-7': 'checked',
      '2019-9-10': 'checked'
    };
    const headerStyle ={
      backgroundColor: '#3C9BFD',
      color:'#fff',
      fontSize: 15,
      fontWeight:'500',
    };
    return (
      <View style={styles.container}>
        <Calendar
          touchEvent={this.press}
          headerStyle={headerStyle}
          holiday={holiday}
          check={check}
          num={5}
        />
      </View>
    );
  }
  press(str: string){
    Alert.alert(str);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },
});
