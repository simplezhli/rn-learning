/*************************************************************************************************
 * @author:   weilu
 * @data:     2019-11-22 11:54
 ************************************************************************************************/
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {NavigationBottomTabOptions} from 'react-navigation-tabs';

export class NavigatorDemo extends Component<NavigationStackScreenProps> {

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20}} onPress={this.props.navigation.openDrawer} >{this.props.navigation.getParam('content', '')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
