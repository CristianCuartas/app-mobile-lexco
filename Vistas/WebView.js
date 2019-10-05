import React from 'react';
import { StyleSheet, View, WebView } from 'react-native';
import { Constants } from 'expo';

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <WebView
        bounces={false}
        scrollEnabled={false}
        source={{ uri: 'http://www.africau.edu/images/default/sample.pdf' }}
      />
    </View>
    // <WebView
    //   source={{
    //     uri: 'http://192.168.0.136:3000/Static/Prueba1.png'
    //   }}
    //   style={{ marginTop: 20 }}
    // />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
    // paddingTop: Constants.statusBarHeight
  }
});
