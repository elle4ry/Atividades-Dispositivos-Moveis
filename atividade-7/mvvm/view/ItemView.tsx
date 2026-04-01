import React from 'react';
import {  View,Text,FlatList,TouchableOpacity,Modal,TextInput,Alert,StyleSheet } from 'react-native';
import { Item } from '../models/Item';
import { useItemViewModel } from '../viewmodels/ItemViewModel';

export const ItemView: React.FC = () => {
  const { viewModel, items, dialogVisible, inputName, inputDescription, confimarLimpezaVisible } = useItemViewModel();

  const handleAddItem = () => {
    const success = viewModel.addItem();
    if (!success) {
      Alert.alert('Erro', 'Digite um nome para o item');
    }
  }

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.cardItems}>
      <Text style={styles.tituloItem}>{item.name}</Text>
      <Text style={styles.descricaoItem}>{item.description}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={styles.viewBotoes}>
      <TouchableOpacity
        onPress={() => viewModel.openDialog()}
        style={styles.botaoAdd}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Adicionar Item</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => viewModel.openConfirmarLimpeza()}
        style={styles.botaoLimpar}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Limpar Lista</Text>
      </TouchableOpacity>
      </View>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item: { id: any; }) => item.id}
      />

      <Modal visible={dialogVisible} transparent animationType="slide">
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
          <View style={{
            width: 300,
            padding: 20,
            backgroundColor: 'white',
            borderRadius: 8,
          }}>
            <Text style={{ fontSize: 18, marginBottom: 16 }}>Adicionar Item</Text>
            
            <TextInput
              value={inputName}
              onChangeText={(text: string) => viewModel.setInputName(text)}
              placeholder="Nome do item"
              style={styles.camposDoPopUP}
            />
            <TextInput
              value={inputDescription}
              onChangeText={(text: string) => viewModel.setInputDescription(text)}
              placeholder="Descrição do item"
              style={styles.camposDoPopUP}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                onPress={() => viewModel.closeDialog()}
                style={{ padding: 12, backgroundColor: '#ccc', borderRadius: 4, flex: 0.45 }}
              >
                <Text style={{ textAlign: 'center' }}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleAddItem}
                style={{ padding: 12, backgroundColor: '#007bff', borderRadius: 4, flex: 0.45 }}
              >
                <Text style={{ color: 'white', textAlign: 'center' }}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal visible={confimarLimpezaVisible} transparent animationType="slide">
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
          <View style={{
            width: 300,
            padding: 20,
            backgroundColor: 'white',
            borderRadius: 8,
          }}>
            <Text style={{ fontSize: 18, marginBottom: 16 }}>Certeza que voce quer apagar a lista?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                onPress={() => viewModel.closeConfirmarLimpeza()}
                style={{ padding: 12, backgroundColor: '#ccc', borderRadius: 4, flex: 0.45 }}
              >
                <Text style={{ textAlign: 'center' }}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => viewModel.limparLista()}
                style={{ padding: 12, backgroundColor: '#007bff', borderRadius: 4, flex: 0.45 }}
              >
                <Text style={{ color: 'white', textAlign: 'center' }}>Sim</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  viewBotoes: {
    width: 250,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  botaoAdd: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 5
  },
  botaoLimpar: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 5
  },
  tituloItem: {
    fontSize: 20,
    fontWeight: 'bold',
    flexWrap: 'wrap'
  },
  descricaoItem: {
    fontSize: 15,
    flexWrap: 'wrap'
  },
  cardItems: {
    padding: 16,
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc'
  },
  camposDoPopUP: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  }
});