import React, { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image
} from 'react-native';

export default ({ navigation }) => {
  const blue = '#428AF8';
  const light_gray = '#D3D3D3';

  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');
  const [textPassword, settextPassword] = useState('');

  const handleFocus = e => {
    setIsFocused(true);
  };

  const handleBlur = e => {
    setIsFocused(false);
  };

  return (
    <View style={styles.containerView}>
      <Image
        style={{ width: 170, height: 100 }}
        source={require('./../assets/img/sevenet-logo.png')}
      />
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          placeholder="Usuario"
          placeholderTextColor="#696D6C"
          selectionColor={blue}
          underlineColorAndroid={isFocused ? blue : light_gray}
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
          style={styles.textInput}
          onChangeText={data => {
            setText(data);
          }}
        />
        <View style={{ width: 20, height: 20 }}></View>
        <TextInput
          selectionColor={blue}
          underlineColorAndroid={isFocused ? blue : light_gray}
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
          style={styles.textInput}
          secureTextEntry={true}
          placeholder="Contraseña"
          placeholderTextColor="#696D6C"
          onChangeText={data => {
            settextPassword(data);
          }}
        />
      </KeyboardAvoidingView>
      <View style={{ width: 30, height: 30 }}></View>
      <Button
        title="Iniciar sesión"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2
  },
  textInput: {
    height: 40,
    width: 200
  },
  containerView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECEEF1'
  },
  button: {
    flex: 3
  }
});
