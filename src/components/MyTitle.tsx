/*************************************************************************************************
 * @author:   weilu
 * @data:     2019-11-06 10:02
 ************************************************************************************************/
import React, {Component} from 'react';
import {HeaderProps} from 'react-navigation-stack/src/types';
import {Scene} from 'react-navigation-stack/lib/typescript/types';
import {colors} from '../styles/Colors';
import {Button, Header, Icon, Left, Right, Title, Body} from 'native-base';
import {View} from 'react-native';

export class MyTitle extends Component<HeaderProps> {

  render() {

    const titleString = MyTitle.getHeaderTitleString(this.props.scene);

    return (
      <Header
        style={{ backgroundColor: colors.primary }}
        androidStatusBarColor="#30a9f4"
        iosBarStyle="light-content">
        {this.renderLeftComponent(this.props)}
        <Body>
          <Title style={{ color: "#FFF" }}>{titleString}</Title>
        </Body>
        <Right />
      </Header>
    );
  }

  private renderLeftComponent = (props: HeaderProps) => {
    if (props.scene.index === 0) {
      return(
        <View style={{width: 10}}/>
      );
    }
    const goBack = () => {
      // Go back on next tick because button ripple effect needs to happen on Android
      requestAnimationFrame(() => {
        this.props.scene.descriptor.navigation.goBack(this.props.scene.descriptor.key);
      });
    };
    return(
      <Left>
        <Button transparent onPress={goBack}>
          <Icon name="arrow-back" style={{ color: "#FFF" }}/>
        </Button>
      </Left>
    );
  };

  private static getHeaderTitleString(scene: Scene) {
    const options = scene.descriptor.options;
    if (typeof options.headerTitle === 'string') {
      return options.headerTitle;
    }

    if (options.title && typeof options.title !== 'string' && __DEV__) {
      throw new Error(
        `Invalid title for route "${
          scene.route.routeName
        }" - title must be string or null, instead it was of type ${typeof options.title}`
      );
    }

    return options.title;
  }

}
