/*************************************************************************************************
 * @author:   weilu
 * @data:     2019-11-12 15:19
 ************************************************************************************************/
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {AppState} from '../redux/configureStore';
import {connect} from 'react-redux';
import {testActions} from '../redux/testActions';
import {StackScreenComponent} from '../utils/types';
import {Button, Container, Text} from 'native-base';

const Count: StackScreenComponent<CountProps> = (
  {
    value,
    onDecrement,
    onIncrement,
  }) => {
  return (
    <Container style={styles.container}>
      <Button warning onPress={onDecrement}>
        <Text>减</Text>
      </Button>
      <Text style={{padding: 10}}>{value}</Text>
      <Button success onPress={onIncrement}>
        <Text>加</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },
});

const mapStateToProps = (state: AppState) => {
  const { value } = state.testState;
  return {
    value
  }
};

const mapDispatchToProps = {
  onDecrement: testActions.decrement,
  onIncrement: testActions.increment
};

export type CountProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

export const ReduxLearning: React.ElementType = connect(mapStateToProps, mapDispatchToProps)(Count);
