import React, { Fragment, useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  ToastAndroid
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Body,
  Card,
  CardItem
} from 'native-base';

export default ({ navigation }) => {
  /* POST */
  const UserLogin = navigation.getParam('UserLogin');
  const userName = navigation.getParam('UserName');
  /* Toast */
  const [visible, setvisible] = useState(false);
  /* initialValues */
  const [idCorrespondence, setidCorrespondence] = useState('1');
  const [description, setDescription] = useState('');
  const [login, setLogin] = useState(userName);
  const [login_login, setlogin_login] = useState(UserLogin);
  const [send, setSend] = useState('');
  /* clear inputSearch*/
  const [cleanInput, setcleanInput] = useState('');
  const [clearInput, setclearInput] = useState(false);

  useEffect(() => {
    console.log('UserName = ' + userName);
  }, []);

  const Toast = props => {
    if (props.visible) {
      ToastAndroid.showWithGravityAndOffset(
        props.message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      return null;
    }
    return null;
  };

  const handleButtonPress = () => {
    setvisible(true),
      setTimeout(() => {
        hideToast();
      }, 3000);
  };

  const hideToast = () => {
    setvisible(false);
  };

  return (
    <Container style={styles.container}>
      <Header>
        <Body>
          <Text style={styles.headerTitle}>Agregar anotación</Text>
        </Body>
      </Header>
      <Content style={styles.containerForm}>
        <Card>
          <CardItem
            header
            bordered
            style={{
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image
              style={{ marginLeft: 15, width: 20, height: 20 }}
              source={require('./../../assets/img/text-document.png')}
            />
            <Text> </Text>
            <Text style={styles.titleCard}>Nueva anotación</Text>
          </CardItem>
          <Formik
            initialValues={{
              idCorrespondence: idCorrespondence,
              description: description,
              login_userLogin: login_login,
              login: login,
              send: 'auxadmisiones'
            }}
            enableReinitialize={true}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              const token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImF1eGFkbWlzaW9uZXMiLCJub21icmUiOiJEQU5JRUxBIFFVSU5URVJPIFNBTENFRE8iLCJlbWFpbCI6ImF1eGFkbWlzaW9uZXNAdW5pdi5jb20iLCJpYXQiOjE1NzIyNzE0MzB9.3jTz3_-B3qVc8TVqomxLPeBC_9pIx9p_H03dox3U3y8';
              setTimeout(() => {
                fetch(`http://192.168.10.180:3000/api/annotations`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: token
                  },
                  body: JSON.stringify({
                    id_correspondence: idCorrespondence,
                    description: values.description,
                    login: values.login_userLogin,
                    send: 'auxadmisiones'
                  })
                })
                  .then(response => {
                    if (response.status === 200) {
                      // textInput1.current.clear();
                      setLogin(undefined);
                      handleButtonPress();
                    }
                  })
                  .catch(error => console.log('', error));
                setSubmitting(false);
                resetForm({
                  login: undefined
                });
                console.log('User: ' + login);
                console.log('Description: ' + description);
              }, 500);
            }}
            validationSchema={Yup.object().shape({
              login: Yup.string().required(
                'Por favor seleccione un destinatarío.'
              ),
              description: Yup.string().required(
                'Por favor introduzca la anotación.'
              )
            })}
          >
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              setFieldTouched,
              touched
            }) => (
              <Fragment>
                <CardItem>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TextInput
                      defaultValue={''}
                      value={values.login}
                      onChangeText={handleChange('login')}
                      onBlur={() => setFieldTouched('login')}
                      style={styles.inputDestinatario}
                      placeholder="Destinatario"
                      editable={false}
                    />
                    <Button
                      style={styles.buttonSearch}
                      iconLeft
                      transparent
                      primary
                      onPress={() => navigation.navigate('SearchUser')}
                    >
                      <Image
                        style={{ marginLeft: 15, width: 20, height: 20 }}
                        source={require('./../../assets/img/search.png')}
                      />
                    </Button>
                  </View>
                </CardItem>
                {touched.login && errors.login && (
                  <Text
                    style={{ fontSize: 15, color: 'red', textAlign: 'center' }}
                  >
                    {errors.login}
                  </Text>
                )}
                <CardItem>
                  <View
                    style={{
                      marginTop: 10,
                      flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'stretch'
                    }}
                  >
                    <TextInput
                      value={values.description}
                      // ref={textInput2}
                      onChangeText={handleChange('description')}
                      onBlur={() => setFieldTouched('description')}
                      style={styles.textarea}
                      underlineColorAndroid="transparent"
                      placeholderTextColor={'#9E9E9E'}
                      numberOfLines={10}
                      multiline={true}
                      placeholder=" Introduzca la anotación."
                    />
                  </View>
                </CardItem>
                {touched.description && errors.description && (
                  <Text
                    style={{ fontSize: 15, color: 'red', textAlign: 'center' }}
                  >
                    {errors.description}
                  </Text>
                )}
                <View>
                  <Text> </Text>
                </View>
                <CardItem
                  footer
                  bordered
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Button
                    style={styles.buttonAdd}
                    transparent
                    primary
                    onPress={handleSubmit}
                  >
                    <Image
                      style={{
                        marginLeft: 15,
                        width: 20,
                        height: 20
                      }}
                      source={require('./../../assets/img/plus.png')}
                    />
                    <Text> </Text>
                    <Text style={{ color: 'white' }}>Agregar anotación</Text>
                  </Button>
                </CardItem>
                <Toast
                  visible={visible}
                  message={'Anotación realizada con éxito.'}
                />
              </Fragment>
            )}
          </Formik>
        </Card>
      </Content>
      <Footer>
        <FooterTab></FooterTab>
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24
  },
  containerForm: {
    marginTop: 20
  },
  headerTitle: {
    color: 'white',
    fontSize: 20
  },
  inputDestinatario: {
    borderBottomWidth: 1,
    borderBottomColor: '#9E9E9E',
    alignItems: 'stretch',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#9E9E9E',
    borderRadius: 5,
    height: 150
  },
  buttonSearch: {
    width: 50
  },
  buttonAdd: {
    width: 300,
    justifyContent: 'center'
  },
  titleCard: {
    fontWeight: 'bold',
    fontSize: 15
  }
});
