import * as React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { DataTable } from 'react-native-paper';

export default function ConsultaScreen() {
  return (
        <LinearGradient colors={['#bec4fd', '#f8fafc']}>
            <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
          <View style={styles}>
          <View style={styles.title}>
            <Text style={styles.title}>HISTÓRICO DE VENDAS</Text>
          </View>
          <View style={styles.periodo}>
            <Text style={styles.periodo}>INSIRA UM PERÍODO</Text>
          </View>
          <View style={styles.consulta}>
            <Text style={styles.consulta}>De: </Text>
              <TextInput style={styles.textInput} placeholder="DD/MM/AAAA"/>
            <Text style={styles.consulta}>Até:</Text>
              <TextInput style={styles.textInput} placeholder="DD/MM/AAAA"/>
            <Text style={styles.consulta}>CPF:</Text>
              <TextInput style={styles.textInput} placeholder="000.000.000-00"/>
          </View>
          <View>
                <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>NOVA CONSULTA</Text>
                </TouchableOpacity>
          </View>
                <View style={styles.line}/>
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
          </DataTable>
    </View>
          </ScrollView>
    </SafeAreaView>
        </LinearGradient>
  );
}

const styles = StyleSheet.create({
    title: {
      color: '#7b7cfa',
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
      fontWeight: 'bold',
  },
    periodo: {
      padding: 3,
      color: "#f6f6f6",
      backgroundColor: "#A4AAE3",
      fontSize: 12,
      marginHorizontal: 20,
      borderRadius: 4,
      textAlign: "center"
  },
    consulta: {
      padding: 10,
      color: "#5D5FEF",
      backgroundColor: "#F1F1F1",
      fontSize: 12,
      borderRadius: 5,
      marginHorizontal: 20,
      alignItems: "center",
      textAlign: "center",
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
    textInput: {
      width: "75%",
      height: 40,
      color: "#5D5FEF",
      textAlign: "center",
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
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
      borderBottomWidth: 3,
  },
      container: {
      paddingHorizontal: 15,
  },
      tableHeader: {
      backgroundColor: "#f6f6f6",
      fontSize: 12,
      marginHorizontal: 5,
      marginTop: 20,
      borderRadius: 4,
      textAlign: "center"
  },
});