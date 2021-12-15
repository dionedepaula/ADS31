import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UserContext } from '../context/UserContext';

import ConsultaScreen from '../screens/ConsultaScreen';
import HistoricoScreen from '../screens/HistoricoScreen';
import LoginScreen from '../screens/LoginScreen';
import TelainicialScreen from '../screens/TelainicialScreen';
import VendaScreen from '../screens/VendaScreen';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const [usuario] = useContext(UserContext);
  return (
    <Stack.Navigator>
      {usuario.logado ? (
        <>
          <Stack.Screen name="telaInicial" component={TelainicialScreen} />
          <Stack.Screen name="venda" component={VendaScreen} />
          <Stack.Screen name="historico" component={HistoricoScreen} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}