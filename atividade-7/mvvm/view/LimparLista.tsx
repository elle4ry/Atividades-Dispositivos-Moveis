import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { useItemViewModel } from '../viewmodels/ItemViewModel';

export default function LimparListaModal() {
  // Verifique se no seu ItemViewModel.ts o retorno é 'confirmarLimpezaVisible'
  const { viewModel, confimarLimpezaVisible } = useItemViewModel();

  return (
    <Modal 
      animationType="fade"
      transparent={true}
      visible={confimarLimpezaVisible}
      onRequestClose={() => viewModel.closeConfirmarLimpeza()}
    >
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
          <Text style={{ fontSize: 18, marginBottom: 16 }}>Certeza que você quer apagar a lista?</Text>
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
  );
} // Verifique se fechou essa chave!