import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Telas
import Lista from "../view/Lista";
import Adicionar from "../view/Adicionar";
import { FotoScreen } from "../view/Foto";

// Tipos para as rotas
export type RootStackParamList = {
  ListaPrincipal: undefined;
  Adicionar: undefined;
};

export type RootTabParamList = {
  ItensTab: undefined;
  Foto: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

// Stack para a parte de Itens
function ItensStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListaPrincipal" component={Lista} options={{ title: 'Minha Lista' }} />
      <Stack.Screen name="Adicionar" component={Adicionar} />
    </Stack.Navigator>
  );
}

export default function TabNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="ItensTab" component={ItensStack} options={{ title: 'Itens' }} />
        <Tab.Screen name="Foto" component={FotoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}