import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [usuario, setUsuario] = useState('');
  const handlePress = () => { alert("Usuario criado") };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Qual o seu usuario:</Text>
      <TextInput
        placeholder= "Digite seu usuário"
        value={usuario}
        onChangeText={setUsuario} 
      />
      <Button title="Salvar" onPress={handlePress}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
