import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [itens, setItens] = useState([]);
  const [palavra, setPalavra] = useState('');

  function salvarPalavra() {
    if (palavra == '') {
      Alert.alert(
        "Valor vazio",
        "Você está inserindo um valor vazio",
        [
          {
            text: "OK",
          }
        ],
      );
    } else {
      setItens([...itens, palavra])
    }
    setPalavra('')
  }

  function apagarPalavra() {
    if (setItens == []) {
      Alert.alert(
        "Valor vazio",
        "Você está inserindo um valor vazio",
        [
          {
            text: "OK",
          }
        ],
      );
    } else {
      setItens([])
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Digite uma palavra:</Text>
        <TextInput
          placeholder="Digite aqui"
          value={palavra}
          onChangeText={setPalavra}
        />
        <Button title="Salvar" onPress={salvarPalavra} />
        <View style={styles.lista}>
          <View>
            {itens.map((itens) => (
              <Text key={palavra}>{itens}</Text>
            ))}
          </View>
          <Button title="Limpar lista" onPress={apagarPalavra} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  lista: {
    border: 2,
    borderColor: 'black'
  }
});
