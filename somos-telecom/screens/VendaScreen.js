import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function VendaScreen() {
  return (
    <LinearGradient colors={['#bec4fd', '#f8fafc']}>
        <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>             
      <View style={styles.title}>
        <Text style={styles.title}>Informações Pessoais</Text>
      </View>
      <View style={styles.line}/>
      <View style={styles.textInputTitle}>
        <Text style={styles.corTexto}>Nome</Text>
        <TextInput style={styles.textInput}/>
      </View>
      <View style={styles.doubleTextInputTitle}>
        <View>
          <Text style={styles.corTexto}>CPF</Text>
          <TextInput style={styles.doubleTextInput}/>
        </View>
        <View>
          <Text style={styles.corTexto}>RG</Text>
          <TextInput style={styles.doubleTextInput}/>
        </View>
      </View>
      <View style={styles.textInputTitle}>
        <Text style={styles.corTexto}>Nome da Mãe</Text>
        <TextInput style={styles.textInput}/>
      </View>
      <View style={styles.doubleTextInputTitle}>
        <View>
          <Text style={styles.corTexto}>Data de Nascimento</Text>
          <TextInput style={styles.doubleTextInput}/>
        </View>
        <View>
          <Text style={styles.corTexto}>Sexo</Text>
          <TextInput style={styles.doubleTextInput}/>
        </View>
      </View>
      <View style={styles.textInputTitle}>
        <Text style={styles.corTexto}>E-Mail</Text>
        <TextInput style={styles.textInput}/>
      </View>
      <View style={styles.doubleTextInputTitle}>
        <View>
          <Text style={styles.corTexto}>Tel 1</Text>
          <TextInput style={styles.doubleTextInput}/>
        </View>
        <View>
          <Text style={styles.corTexto}>Tel 2</Text>
          <TextInput style={styles.doubleTextInput}/>
        </View>
      </View>
      <View style={styles.title}>
        <Text style={styles.title}>Endereço</Text>
      </View>
      <View style={styles.line}/>
      <View style={styles.textInputTitle}>
        <Text style={styles.corTexto}>Endereço</Text>
        <TextInput style={styles.textInput}/>
      </View>
      <View style={styles.doubleTextInputTitle}>
        <View>
          <Text style={styles.corTexto}>Número</Text>
          <TextInput style={styles.doubleTextInput}/>
        </View>
        <View>
          <Text style={styles.corTexto}>CEP</Text>
          <TextInput style={styles.doubleTextInput}/>
        </View>
      </View>
      <View style={styles.title}>
        <Text style={styles.title}>Informações Bancárias</Text>
      </View>
      <View style={styles.line}/>
      <View style={styles.textInputTitle}>
        <Text style={styles.corTexto}>Banco</Text>
        <TextInput style={styles.textInput}/>
      </View>
      <View style={styles.doubleTextInputTitle}>
        <View>
          <Text style={styles.corTexto}>Agência</Text>
          <TextInput style={styles.doubleTextInput}/>
        </View>
        <View>
          <Text style={styles.corTexto}>Conta</Text>
          <TextInput style={styles.doubleTextInput}/>
        </View>
      </View>
      <View style={styles.title}>
        <Text style={styles.title}>Informações do Plano</Text>
      </View>
      <View style={styles.line}/>
      <View style={styles.textInputTitle}>
        <Text style={styles.corTexto}>Funcionário</Text>
        <TextInput style={styles.textInput}/>
      </View>
      <View style={styles.textInputTitle}>
        <Text style={styles.corTexto}>Plano</Text>
        <TextInput style={styles.textInput}/>
      </View>
      <View style={styles.textInputTitle}>
        <Text style={styles.corTexto}>Portabilidade</Text>
        <TextInput style={styles.textInput}/>
      </View>
      <View style={styles.textInputTitle}>
        <Text style={styles.corTexto}>Observações</Text>
        <TextInput style={styles.textInput}/>
      </View>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao} >SALVAR DADOS</Text>
      </TouchableOpacity>
          </ScrollView>
    </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  textInputTitle:{
    marginTop: '15px',
    marginLeft: '20px',
    marginRight: '20px',
  },
  doubleTextInputTitle:{
    marginTop: '15px',
    marginLeft: '20px',
    marginRight: '20px',
    flexDirection: 'row',
  },
  doubleTextInput: {
    width: '73%',    
    height: 30,
    borderRadius: 3,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textInput: {
    width: '100%',
    height: 30,
    borderRadius: 3,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  line: {
    borderBottomColor: '#7B7CFA',
    borderBottomWidth: 2,
    marginTop: '-15px',
    marginLeft: '20px',
    marginRight: '20px'
  },
  title: {
  color: '#7b7cfa',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
  },
  botao: {
    padding: 10,
    backgroundColor: "#5D5FEF",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    textAlign: "center"
  },
  textoBotao: {
    color: "#f6f6f6",
    fontSize: 16,
    textAlign: "center",
    fontWeight: 'bold',
  },
  corTexto: {
    color: "#6F7482",
    fontSize: 14,
  },
});