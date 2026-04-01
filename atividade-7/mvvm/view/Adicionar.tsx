import React from 'react';
import {  View,Text,FlatList,TouchableOpacity,Modal,TextInput,Alert,StyleSheet } from 'react-native';
import { Item } from '../models/Item';
import { useItemViewModel } from '../viewmodels/ItemViewModel';

export default function Adicionar() {
  // Verifique se o nome da variável no hook está igual ao da ViewModel (confirmarLimpezaVisible)
  const { viewModel, confimarLimpezaVisible } = useItemViewModel();

  return (
    <Modal
      visible={confimarLimpezaVisible}
      transparent={true} // Isso impede a tela branca de fundo
      animationType="fade"
      onRequestClose={() => viewModel.closeConfirmarLimpeza()}
    >
      {/* Esta View de fundo precisa ocupar a tela toda para centralizar o card */}
      <View style={styles.overlay}>
        <View style={styles.modalCard}>
          <Text style={styles.texto}>Certeza que você quer apagar a lista?</Text>
          
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => viewModel.closeConfirmarLimpeza()}
              style={[styles.botao, { backgroundColor: '#ccc' }]}
            >
              <Text>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => viewModel.limparLista()}
              style={[styles.botao, { backgroundColor: '#007bff' }]}
            >
              <Text style={{ color: 'white' }}>Sim</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Fundo escuro transparente
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5,
  },
  texto: { fontSize: 18, marginBottom: 16, textAlign: 'center' },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  botao: { padding: 12, borderRadius: 4, flex: 0.45, alignItems: 'center' }
});