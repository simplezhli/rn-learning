/*************************************************************************************************
 * @author:   weilu
 * @data:     2019-11-04 09:38
 ************************************************************************************************/
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {client} from '../api/Axios';
import Axios, {AxiosError, Canceler} from 'axios';
import {Button, Container, Text} from 'native-base';

export interface User {
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
        console.log(response);
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
    if (cancel){
      cancel('Operation canceled by the user.');
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Button success onPress={this.getUser.bind(this)}>
          <Text>点击请求数据</Text>
        </Button>
        <Text>{this.state.info.toString()}</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
});
