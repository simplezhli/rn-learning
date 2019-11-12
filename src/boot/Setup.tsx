/*************************************************************************************************
 * @author:   weilu
 * @data:     2019-11-05 14:03
 ************************************************************************************************/
import React, {Component} from 'react';
import {StyleProvider} from "native-base";
import App from '../../App';
import getTheme from "../../native-base-theme/components";
import variables from "../../native-base-theme/variables/commonColor";
import configureStore from '../redux/configureStore';
import { Provider } from 'react-redux'

const store = configureStore();

export class Setup extends Component {

  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(variables)}>
          <App/>
        </StyleProvider>
      </Provider>
    );
  }
}

