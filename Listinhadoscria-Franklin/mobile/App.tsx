import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import axios from 'axios';

import { FontAwesome } from '@expo/vector-icons';

import Task from './src/Task';

import { api } from './services/api';

export default function App() {
  const [tarefa, setTarefa] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function handleAdd() {
    if (tarefa === '') {
      return;
    }

    const dados = {
      nome: tarefa
    };

    api.post('/tarefa/criar', dados)
      .then(response => {
        fetchData();
      })
      .catch(error => {
        console.error(error);
      });

    setTarefa('');
  }

  function fetchData() {
    api.get('/tarefas')
      .then(response => {
        setList(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  async function handleDeleteTask(id) {
    try {
      await api.delete('/tarefa/remover', {
        params: {
          id: id,
        },
      });
  
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>

      <View style={styles.containerInput}>
        <TextInput
          placeholder="Digite o nome da sua tarefa..."
          value={tarefa}
          onChangeText={(text) => setTarefa(text)}
          style={styles.input}
        />

        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <FontAwesome name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Task data={item} deleteItem={() => handleDeleteTask(item.item)} />}
        style={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 35
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#222222',
    marginTop: '5%',
    paddingHorizontal: '5%',
    marginBottom: 12
  },
  containerInput: {
    flexDirection: 'row',
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 10
  },
  buttonAdd: {
    width: 44,
    height: 44,
    backgroundColor: '#62F353',
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  lista: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: '4%'
  }
});