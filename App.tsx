/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
} from 'react-native';

export default class App extends Component {
  state = {
    text: '',
  };
  _onPressButton() {
    Alert.alert('You tapped the button!');
  }
  render() {
    return (
      <ScrollView>
        <Greeting name="Rexxar" />
        <Greeting name="Jaina" />
        <Greeting name="Valeera" />
        {/*flexDirection 决定布局的主轴, 水平轴(row) 竖直轴(column).*/}
        {/*justifyContent 决定其子元素沿着主轴的排列方式, flex-start、center、flex-end、space-around、space-between以及space-evenly*/}
        {/*alignItems 决定其子元素沿着次轴, flex-start、center、flex-end以及stretch*/}
        <View
          style={{
            flex: 1,
            margin: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{width: 50, height: 50, backgroundColor: 'powderblue'}}
          />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
        <TextInput
          style={{height: 50, marginLeft: 20}}
          placeholder="请输入"
          onChangeText={text => this.setState({text})}
          value={this.state.text}
        />
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title={'Press Me'}
              color={'#841584'}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
interface IProps {
  name: string;
}

interface IState {
  name: string;
}

class Greeting extends Component<IProps, IState> {
  render() {
    return (
      <View style={{alignItems: 'center', marginTop: 50}}>
        <Text style={styles.red}>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
