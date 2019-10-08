import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default ({ navigation }) => {
  const [InfoUser, setInfoUser] = useState([]);

  useEffect(() => {
    dataUser();
  }, []);

  const dataUser = data => {
    fetch('http://192.168.0.136:3000/api/user/profile/ybenitezp', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setInfoUser(data);
      })
      .catch(Error => console.log('Error', Error));
  };
  const dataUsuario = InfoUser;
  // const mapDataUsuario = InfoUser.map((aux, id) => {
  //   return (
  //     <View style={styles.containerViewData}>
  //       <Text style={styles.titleText}>Datos del usuario</Text>
  //       <View style={styles.line} />
  //       <View style={{ height: 10 }} />
  //       <View>
  //         <Text style={styles.tituloInfo}>
  //           Nombre: <Text style={styles.infoUser}>{aux.name}</Text>
  //         </Text>
  //         <View style={{ height: 5 }} />
  //         <Text style={styles.tituloInfo}>
  //           Username:<Text style={styles.infoUser}> {aux.username}</Text>
  //         </Text>
  //         <View style={{ height: 5 }} />
  //         <Text style={styles.tituloInfo}>
  //           Email: <Text style={styles.infoUser}>{aux.email}</Text>
  //         </Text>
  //       </View>
  //     </View>
  //   );
  // });
  return (
    <View style={styles.containerView}>
      <View style={styles.fondoPerfil}>
        <View style={styles.viewDatosContainer}>
          <Image
            source={require('./../assets/img/userIcon.png')}
            style={{ top: 115 }}
          />
        </View>
      </View>
      <View style={{ height: 70 }} />
      <View style={styles.containerViewData}>
        <Text style={styles.titleText}>Datos del usuario</Text>
        <View style={styles.line} />
        <View style={{ height: 10 }} />
        <View>
          <Text style={styles.tituloInfo}>
            Nombre: <Text style={styles.infoUser}>{dataUsuario.nombre}</Text>
          </Text>
          <View style={{ height: 5 }} />
          <Text style={styles.tituloInfo}>
            Nombre de usuario:
            <Text style={styles.infoUser}> {dataUsuario.login}</Text>
          </Text>
          <View style={{ height: 5 }} />
          <Text style={styles.tituloInfo}>
            Email: <Text style={styles.infoUser}>{dataUsuario.email}</Text>
          </Text>
        </View>
      </View>
      {/* {mapDataUsuario} */}
      <View style={{ height: 100 }} />
      <View style={styles.buttonBack}>
        <Button
          style={styles.buttonBack}
          title="Volver"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  line: {
    height: 1,
    width: 200,
    backgroundColor: 'black'
  },
  containerViewData: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerView: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column'
  },
  tituloInfo: {
    fontWeight: 'bold'
  },
  infoUser: {
    fontWeight: 'normal'
  },
  fondoPerfil: {
    height: 200,
    backgroundColor: '#428AF8'
  },
  viewDatosContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonBack: {
    alignItems: 'center'
  }
});

// const usuario = [
//   {
//     name: 'Cristian Cuartas',
//     username: 'ccuartas',
//     email: 'cristianhz1109@gmail.com'
//   }
// ];
