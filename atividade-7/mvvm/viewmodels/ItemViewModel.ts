import { useState, useEffect } from 'react'; // pegando ferramenta do react
import { Item } from '../models/Item'; // pegando modelo de item
import ItemService from '../services/ItemService';

//criando a classe
export class ItemViewModel {

  //variaveis privadas
  private _items: Item[] = []; // lista de itens
  private _dialogVisible: boolean = false;  // isso controla se uma janela ta aberta ou fechada | começa fechada
  private _confimarLimpezaVisible: boolean = false;
  private _inputName: string = ''; // texto que a pessoa digitou 
  private _inputDescription: string = ''; // descrição digitada
  
  // callbacks => mensageiros que avisam quando algo da tela muda

  private setItemsCallback: ((items: Item[]) => void) | null = null;  // avisa quando os itens muda
  private setDialogVisibleCallback: ((visible: boolean) => void) | null = null; // avisar quando a janela abre ou fecha
  private setConfirmarLimpezaVisibleCallback: ((visible: boolean) => void) | null = null; // avisar quando a janela abre ou fecha
  private setInputNameCallback: ((text: string) => void) | null = null; // avisa se o texto digitado mudou
  private setInputDescriptionCallback: ((text: string) => void) | null = null; // avisa se a descrição mudou

  // Getters para acessar o estado
  get items(): Item[] {
    return this._items;
  }

  get dialogVisible(): boolean {
    return this._dialogVisible;
  }
  get confirmarLimpezaVisible(): boolean {
    return this._confimarLimpezaVisible;
  }

  get inputName(): string {
    return this._inputName;
  }
  get inputDescription(): string {
    return this._inputDescription;
  }

  // Métodos para definir callbacks da View
  setItemsListener(callback: (items: Item[]) => void) {
    this.setItemsCallback = callback;
  }

  setDialogVisibleListener(callback: (visible: boolean) => void) {
    this.setDialogVisibleCallback = callback;
  }
  setConfirmarLimpezaVisibleListener(callback: (visible: boolean) => void) {
    this.setConfirmarLimpezaVisibleCallback = callback;
  }

  setInputNameListener(callback: (text: string) => void) {
    this.setInputNameCallback = callback;
  }
  setInputDescriptionListener(callback: (text: string) => void) {
    this.setInputDescriptionCallback = callback;
  }

  // Métodos de negócio
  loadItems(): void {
    this._items = ItemService.getAllItems();
    this.setItemsCallback?.(this._items);
  }

  addItem(): boolean {
  const name = this._inputName.trim();
  const description = this._inputDescription.trim();

  if (name) {
    // Passamos os dois argumentos separados por vírgula, sem as chaves {}
    ItemService.addItem(name, description); 

    this.loadItems();
    this.setInputName('');
    this.setInputDescription('');
    this.closeDialog();
    console.log("Item adicionado!");
    return true;
  }
  return false;
}

  openDialog(): void {
    this._dialogVisible = true;
    this.setDialogVisibleCallback?.(this._dialogVisible);
  }
  openConfirmarLimpeza(): void {
    this._confimarLimpezaVisible = true;
    this.setConfirmarLimpezaVisibleCallback?.(this._confimarLimpezaVisible);
  }

  closeDialog(): void {
    this._dialogVisible = false;
    this.setDialogVisibleCallback?.(this._dialogVisible);
  }
  closeConfirmarLimpeza(): void {
    this._confimarLimpezaVisible = false;
    this.setConfirmarLimpezaVisibleCallback?.(this._confimarLimpezaVisible);
  }

  setInputName(text: string): void {
    this._inputName = text;
    this.setInputNameCallback?.(text);
  }
  setInputDescription(text: string): void {
    this._inputDescription = text;
    this.setInputDescriptionCallback?.(text);
  }

  limparLista(): void {
    ItemService.clearAll();
    this._items = [];
    this._confimarLimpezaVisible = false;
    this.setConfirmarLimpezaVisibleCallback?.(this._confimarLimpezaVisible);
    this.setItemsCallback?.(this._items);
    console.log("Lista limpa!");
  }
}



// Hook para conectar ViewModel com View
export const useItemViewModel = () => {
  const [viewModel] = useState(() => new ItemViewModel());
  const [items, setItems] = useState<Item[]>([]);
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const [confimarLimpezaVisible, setConfirmarLimpezaVisible] = useState<boolean>(false);
  const [inputName, setInputName] = useState<string>('');
  const [inputDescription, setInputDescription] = useState<string>('');

  useEffect(() => {
    // Conecta os listeners do ViewModel com os estados da View
    viewModel.setItemsListener(setItems);
    viewModel.setDialogVisibleListener(setDialogVisible);
    viewModel.setConfirmarLimpezaVisibleListener(setConfirmarLimpezaVisible);
    viewModel.setInputNameListener(setInputName);
    viewModel.setInputDescriptionListener(setInputDescription);
    
    // Carrega os dados iniciais
    viewModel.loadItems();
  }, [viewModel]);

  return {
    viewModel,
    items,
    dialogVisible,
    confimarLimpezaVisible,
    inputName,
    inputDescription,
  };
};