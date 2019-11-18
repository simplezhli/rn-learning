/*************************************************************************************************
 * @author:   weilu
 * @data:     2019-11-12 15:19
 ************************************************************************************************/
import React, {useCallback} from 'react';
import {
  StyleSheet,
} from 'react-native';
import {AppState} from '../redux/configureStore';
import {connect} from 'react-redux';
import {testActions} from '../redux/testActions';
import {StackScreenComponent} from '../utils/types';
import {Button, Container, Text} from 'native-base';
import {userActions} from '../redux/userActions';

const Count: StackScreenComponent<CountProps> = (
  {
    value,
    name,
    error,
    onDecrement,
    onIncrement,
    fetchUser
  }) => {
  return (
    <Container style={styles.container}>
      <Button warning onPress={ onDecrement }>
        <Text>减</Text>
      </Button>
      <Text style={{padding: 10}}>{value}</Text>
      <Button success onPress={ onIncrement}>
        <Text>加</Text>
      </Button>
      <Container style={{paddingLeft: 20}}>
        <Button primary onPress={ fetchUser }>
          <Text>点击请求数据</Text>
        </Button>
        <Text>{name + error}</Text>
      </Container>
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
  const { name, error } = state.userState;
  return {
    value,
    name,
    error
  }
};

const mapDispatchToProps = {
  onDecrement: testActions.decrement,
  onIncrement: testActions.increment,
  fetchUser: userActions.fetchUser
};

export type CountProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Count);

// export const ReduxLearning: React.ElementType = connect(mapStateToProps, mapDispatchToProps)(Count);
