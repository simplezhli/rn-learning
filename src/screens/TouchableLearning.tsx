import React, {Component} from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";

class TouchableLearning extends Component {
  show(text: string) {
    Alert.alert(text);
  }
  render() {
    return (
      <View style={styles.flex}>
        <View>
          <TouchableHighlight
            onPress={this.show.bind(this, 'React Native入门与实战')}
            underlayColor={'#e1f6ff'}>
            <Text style={styles.item}>React Native入门与实战</Text>
          </TouchableHighlight>
          <TouchableWithoutFeedback
            onPress={this.show.bind(this, '图灵出版社')}>
            <Text style={styles.item}>图灵出版社</Text>
          </TouchableWithoutFeedback>
          <TouchableOpacity>
            <View style={styles.btn}>
              <Text style={{fontSize: 25, color: '#fff'}}>按钮</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

export default TouchableLearning;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    marginTop: 25
  },
  item: {
    fontSize: 18,
    marginLeft: 5,
    color: '#434343'
  },
  btn: {
    marginLeft: 30,
    marginTop: 30,
    width: 100,
    height: 100,
    backgroundColor: '#18b4ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  }
});
