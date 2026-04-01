import { useNavigation } from '@react-navigation/native';
import {  View,Text,Button,TouchableOpacity,Modal,TextInput,Alert,StyleSheet } from 'react-native';

export function FotoScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela de Foto</Text>
      {/* Se quiser voltar para a aba de lista: */}
      <Button title="Ir para Lista" onPress={() => navigation.navigate('ItensTab')} />
    </View>
  );
}