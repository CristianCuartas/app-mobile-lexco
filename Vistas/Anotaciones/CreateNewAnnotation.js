import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

import {
  Container,
  Header,
  Input,
  Item,
  Content,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Icon,
  Textarea,
  Form
} from 'native-base';

export default ({ navigation }) => {
  const userId = navigation.getParam('UserID');
  const userName = navigation.getParam('UserName');
  return (
    <Container style={styles.container}>
      <Header>
        <Body>
          <Text style={styles.headerTitle}>Agregar anotación</Text>
        </Body>
      </Header>
      <Content style={styles.containerForm}>
        <Form>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Input
              style={styles.inputDestinatario}
              value={userName}
              placeholder="Destinatario"
              disabled
            />
            <Button
              style={styles.buttonSearch}
              iconLeft
              transparent
              primary
              onPress={() => navigation.navigate('SearchUser')}
            >
              <Icon name="beer" />
            </Button>
          </View>
          <View style={{ marginTop: 10 }}>
            <Textarea rowSpan={5} bordered placeholder="Textarea" />
          </View>
        </Form>
      </Content>
      <Footer>
        <FooterTab>
          <Button></Button>
        </FooterTab>
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
    // fontWeight: 'bold',
    fontSize: 20
  },
  inputDestinatario: {
    width: 100
  },
  buttonSearch: {
    width: 50
  }
});

/**
 * <Button
          title="Buscar usuario"
          onPress={() => navigation.navigate('SearchUser')}
        />
 * <Text>{userId}</Text>
        <Text>{userName}</Text> */
