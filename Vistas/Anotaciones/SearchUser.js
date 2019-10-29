import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import { Container, Header, Content } from 'native-base';
import SearchInput, { createFilter } from 'react-native-search-filter';
const KEYS_TO_FILTERS = ['nombre', 'login'];

export default ({ navigation }) => {
  const [usersApp, setUsersApp] = useState([]);
  const getUsers = () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImF1eGFkbWlzaW9uZXMiLCJub21icmUiOiJEQU5JRUxBIFFVSU5URVJPIFNBTENFRE8iLCJlbWFpbCI6ImF1eGFkbWlzaW9uZXNAdW5pdi5jb20iLCJpYXQiOjE1NzIyNzE0MzB9.3jTz3_-B3qVc8TVqomxLPeBC_9pIx9p_H03dox3U3y8';
    fetch(`http://192.168.10.180:3000/api/users/list?name=car`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
        'Accept-Language': 'es'
      }
    })
      .then(response => response.json())
      .then(data => {
        setUsersApp(data);
      })
      .catch(error => console.log(error));
  };
  useEffect(() => {
    getUsers();
  }, []);

  const [resultSearch, setResultSearch] = useState('');
  const searchUpdated = term => {
    setResultSearch(term);
  };
  const filterUsers = usersApp.filter(
    createFilter(resultSearch, KEYS_TO_FILTERS)
  );
  return (
    <Container>
      <Header style={styles.headerStyle}></Header>
      <Content>
        <View style={styles.container}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Image
              style={{
                marginLeft: 15,
                marginTop: 20,
                marginRight: 10,
                width: 20,
                height: 20
              }}
              source={require('./../../assets/img/search.png')}
            />
            <SearchInput
              onChangeText={term => {
                searchUpdated(term);
              }}
              style={styles.searchInput}
              placeholder={'Type a user to search'}
            />
          </View>
          <ScrollView>
            {filterUsers.map(user => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('CreateNewAnnotation', {
                      UserLogin: user.login,
                      UserName: user.nombre
                    });
                  }}
                  key={user.login}
                  style={styles.emailItem}
                >
                  <View>
                    <Text>{user.nombre}</Text>
                    <Text style={styles.emailSubject}>{user.nombre}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonBack: {
    width: 50
  },
  headerStyle: {
    marginTop: 24
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  emailItem: {
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput: {
    width: 500,
    padding: 15,
    borderColor: '#CCC',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});
