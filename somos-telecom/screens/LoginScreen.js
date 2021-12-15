import * as React from 'react';
import { Image, View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen() {
  return (
    <LinearGradient colors={['#bec4fd', '#f8fafc']}>
    <View style={styles.fundo}>
        <Image style={{ resizeMode: 'contain',height: 100, width: 235,}} source={require('../assets/Logo.png')}/>
        <TextInput
          style={styles.input}
          placeholder="Usúario"
          keyboardType="Text"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          keyboardType="Password"
        />
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>ENTRAR</Text>
        </TouchableOpacity>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F6F6F6",
    width: 250,
    borderRadius: 3,
    height: 45,
    margin: 15,
    paddingLeft: 15,
  },
  botao: {
    backgroundColor: "#5D5FEF",
    width: 250,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    margin: 15,
    paddingTop: 14,
    paddingBottom: 14,
  },
  textoBotao: {
    color: "#F6F6F6",
    alignItems: "center",
    fontSize: 12,
    fontWeight: 'bold',
  },
    fundo:{
    alignItems: "center",
    justifyContent: "center",
    height: 720,
  }
});