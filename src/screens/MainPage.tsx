/*************************************************************************************************
 * @author:   weilu
 * @data:     2019-10-29 13:58
 ************************************************************************************************/
import React, {Component} from 'react';
import {FlatList, Text, TouchableHighlight, View,} from 'react-native';
import {NavigationStackScreenProps} from 'react-navigation-stack';

export class MainPage extends Component<NavigationStackScreenProps> {

  render() {
    return (
      <FlatList
        data={['View', 'Text', 'TextInput', 'Touchable', 'Image', 'AsyncStorage']}
        renderItem={({item}) =>
          <TouchableHighlight
            underlayColor={'#e1f6ff'}
            onPress={() => this.props.navigation.push(item)}
            style={{height: 50, paddingLeft: 10, paddingRight: 10, flex: 1, justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#ddd'}}>
            <Text>{item}</Text>
          </TouchableHighlight>
         }
      />
    );
  }
}

