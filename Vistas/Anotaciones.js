import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import SearchInput, { createFilter } from 'react-native-search-filter';
const KEYS_TO_FILTERS = ['nombre', 'value'];
const users = [
  { nombre: 'DANIELA QUINTERO SALCEDO', value: 1 },
  { nombre: 'ANGELA RUEDA', value: 2 },
  { nombre: 'SOL RINCON', value: 3 },
  { nombre: 'CARLOS GONZALEZ MOYA', value: 4 },
  { nombre: 'HERNANDO CADENA B', value: 5 },
  { nombre: 'LUZ STELLA CABRERA T', value: 6 },
  { nombre: 'LUIS ALIRIO HERNANDEZ', value: 7 },
  { nombre: 'LEYDI HERRERA M', value: 8 },
  { nombre: 'LUZ ELENA QUINTERO', value: 9 },
  { nombre: 'LINA VEGA DELGADO', value: 10 },
  { nombre: 'OSCAR POVEDA TRUJILLO', value: 11 },
  { nombre: 'TATIANA CORTES ACOSTA', value: 12 },
  { nombre: 'CRISTIAN DAVID CUARTAS', value: 13 }
];

export default ({ navigation }) => {
  const [resultSearch, setResultSearch] = useState('');
  const searchUpdated = term => {
    setResultSearch(term);
  };
  const filterUsers = users.filter(createFilter(resultSearch, KEYS_TO_FILTERS));
  console.log(filterUsers);
  return (
    <Container>
      <Header />
      <Content>
        <View style={styles.container}>
          <SearchInput
            onChangeText={term => {
              searchUpdated(term);
            }}
            style={styles.searchInput}
            placeholder="Type a user to search"
          />
          <ScrollView>
            {filterUsers.map(user => {
              console.log(user.value);
              return (
                <TouchableOpacity
                  //   onPress={() => alert(user.nombre)}
                  onPress={() => {
                    navigation.navigate('Test', {
                      UserID: user.value,
                      UserName: user.nombre
                    });
                  }}
                  key={user.value}
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
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  }
});
