import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ItemView } from './view/ItemView';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator, NativesStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Lista: undefined;
  Adicionar: undefined;
}

import Lista from './view/Lista';
import Adicionar from './view/Adicionar';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista">
        <Stack.Screen name="Lista" component={Lista}/>
        <Stack.Screen name="Adicionar" component={Adicionar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// <NavigationContainer>
//       <SafeAreaView style={{ flex: 1 }}>
//         <View style={styles.container}>
//           <ItemView />
//         </View>
//       </SafeAreaView>
//       </NavigationContainer>