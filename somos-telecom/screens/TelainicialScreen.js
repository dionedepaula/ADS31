import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { DataTable } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen.js'

export default function TelainicialScreen() {
  return (
    <LinearGradient colors={['#bec4fd', '#f8fafc']}>
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <View style={styles.fundo}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text style={styles.textoNome}>Marcos Gomes</Text>
          <Text style={styles.textoWelcome}>Bem Vindo!</Text>
        </View>
        <View style={styles.title}>
          <Image
            style={styles.logo}
            source={require('../assets/Logo.png')}
          />
          <TouchableOpacity style={styles.botaoSair}>
            <Text style={styles.textoBotaoSair}>SAIR</Text>
          </TouchableOpacity>
        </View>
      </View>                
        <View style={styles.line}/>
        <View style={styles.title}>
          <Text style={styles.textoTitle}>ÚLTIMAS VENDAS</Text>
        </View>
        <View style={styles.container}>
          <DataTable>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title>Nome</DataTable.Title>
              <DataTable.Title>Plano</DataTable.Title>
              <DataTable.Title>Status</DataTable.Title>
              <DataTable.Title>Data</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>John</DataTable.Cell>
              <DataTable.Cell>200 MB</DataTable.Cell>
              <DataTable.Cell>Finalizado</DataTable.Cell>
              <DataTable.Cell>10/10/2020</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>John</DataTable.Cell>
              <DataTable.Cell>200 MB</DataTable.Cell>
              <DataTable.Cell>Finalizado</DataTable.Cell>
              <DataTable.Cell>10/10/2020</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>John</DataTable.Cell>
              <DataTable.Cell>200 MB</DataTable.Cell>
              <DataTable.Cell>Finalizado</DataTable.Cell>
              <DataTable.Cell>10/10/2020</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>John</DataTable.Cell>
              <DataTable.Cell>200 MB</DataTable.Cell>
              <DataTable.Cell>Finalizado</DataTable.Cell>
              <DataTable.Cell>10/10/2020</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>John</DataTable.Cell>
              <DataTable.Cell>200 MB</DataTable.Cell>
              <DataTable.Cell>Finalizado</DataTable.Cell>
              <DataTable.Cell>10/10/2020</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>John</DataTable.Cell>
              <DataTable.Cell>200 MB</DataTable.Cell>
              <DataTable.Cell>Finalizado</DataTable.Cell>
              <DataTable.Cell>10/10/2020</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
      </View>
      </View>
    </ScrollView>
    </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    header:{
      display: 'flex',                  
      flexDirection: 'row',
      justifyContent: 'space-around'
  },
    logo:{
      width: '120px',
      height: '24px',
      resizeMode: 'cover',
      borderStyle: 'solid'
  },
    tableHeader: {
      backgroundColor: "#f6f6f6",
      fontSize: 12,
      marginHorizontal: 0,
      marginTop: 0,
      borderRadius: 4,
      textAlign: "center"
  },
    container: {
      paddingHorizontal: 15,
  },
    line: {
      borderBottomColor: '#7B7CFA',
      borderBottomWidth: 2,
      marginTop: '-15px',
      marginLeft: '20px',
      marginRight: '20px'
  },
    title: {
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10
  },
    botaoSair: {
      left: 15,
      width: '90%',
      height: '25%',
      padding: 12,
      backgroundColor: "#5D5FEF",
      borderRadius: 2,
      alignItems: "center",
      justifyContent: "center",
      margin: 20,
      textAlign: "center"
  },
    textoNome: {
      color: "#f6f6f6",
      fontSize: 12,
      textAlign: "center",
      fontWeight: 'bold',
  },
    textoWelcome: {
      color: "#5D5FEF",
      fontSize: 12,
      textAlign: "center",
      fontWeight: 'bold',
  },
    textoBotaoSair: {
      color: "#f6f6f6",
      fontSize: 10,
      textAlign: "center",
  },
    textoTitle: {
      color: '#7b7cfa',
      fontSize: 20,
      margin: 5,
      fontWeight: 'bold',
  },
    fundo:{
      height: 720,
  },
});