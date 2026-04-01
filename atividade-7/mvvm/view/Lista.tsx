import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Item } from '../models/Item';
import { useItemViewModel } from '../viewmodels/ItemViewModel';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './TabNav'; // Ajuste o caminho conforme sua pasta
import LimparListaModal from './LimparLista';
import Adicionar from './Adicionar';
import { useNavigation } from '@react-navigation/native';

export default function Lista() {
  // Pegamos o navigation tipado com o Stack que criamos
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // No seu Hook, os dados estão dentro de 'state'
  const { viewModel, state } = useItemViewModel();
  const { items } = state;

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
          onPress={() => navigation.navigate('Adicionar')}
          style={styles.botaoAdd}>
          <Text style={{ color: 'white', fontWeight: '600' }}>Novo Item</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => viewModel.openConfirmarLimpeza()}
          style={styles.botaoLimpar}>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            Limpar Lista
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Adicionar/>
      <LimparListaModal />
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
    borderRadius: 5,
  },
  botaoLimpar: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 5,
  },
  tituloItem: {
    fontSize: 20,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  descricaoItem: {
    fontSize: 15,
    flexWrap: 'wrap',
  },
  cardItems: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

