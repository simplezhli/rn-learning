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
    Text, Image, TextInputProps, Picker, Slider, FlatList,
} from 'react-native';

export default class App extends Component {
  state = {
    text: '',
    language: ""
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
        <UselessTextInput
          style={{height: 40, marginLeft: 20, marginRight: 20, borderColor: 'gray', borderWidth: 1, paddingLeft: 10}}
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
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
        <Image
          style={{width: 50, height: 50, marginLeft: 20}}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
        <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 200}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={'#ff0000'}
          maximumTrackTintColor={'#000000'}
        />
        <FlatList
          style={{marginLeft: 20}}
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) =>
            <Text>{item.key}</Text>
          }
        />
      </ScrollView>
    );
  }
}

function UselessTextInput(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      maxLength={20}
      secureTextEntry={true}
      returnKeyType={'search'}
      keyboardType={'numeric'}
    />
  );
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
        <Text style={styles.red}>
          Hello
          <Text style={{fontWeight: 'bold'}}>
            {this.props.name}!
          </Text>
        </Text>
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
