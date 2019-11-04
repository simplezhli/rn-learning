/*************************************************************************************************
 * @author:   weilu
 * @data:     2019-11-04 09:38
 ************************************************************************************************/
import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text, TouchableHighlight,
} from 'react-native';
import {client} from '../api/Axios';
import Axios, {AxiosError, Canceler} from 'axios';

interface User {
  id: number;
  avatar_url: string;
  name: string;
  blog: string;
}

const CancelToken = Axios.CancelToken;
let cancel: Canceler;

export class AxiosDemo extends Component {

  state = {
    info: ""
  };

  getUser(){
    client.get<User>('users/simplezhli', {cancelToken: new CancelToken((c => {
        cancel = c;
      }))})
      .then((response) => {
        this.setState({
          info: response.data.name
        })
      })
      .catch((error: AxiosError) => {
        this.setState({
          info: `${ error.code }----${ error.message }----${ Axios.isCancel(error) }`
        })
      })
  }

  componentWillUnmount(): void {
    // 取消请求（message 参数是可选的）
    cancel('Operation canceled by the user.');
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableHighlight
          onPress={this.getUser.bind(this)}
          underlayColor={'#e1f6ff'}>
          <Text>点击请求数据</Text>
        </TouchableHighlight>
        <Text>{this.state.info.toString()}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
