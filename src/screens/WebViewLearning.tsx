import React, {Component} from "react";
import WebView from 'react-native-webview';

class WebViewLearning extends Component {
  render() {
    return (
      <WebView style={{flex: 1}}
               source={{uri: 'https://weilu.blog.csdn.net/'}}>
      </WebView>
    );
  }
}

export default WebViewLearning;
