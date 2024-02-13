import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Header } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';

export default function App() {
  // Données par défaut //
  const todosDefault = [
    { id: 1, title: 'Faire les courses' },
    { id: 2, title: 'Aller à la gym' },
    { id: 3, title: 'Finir le projet' },
  ];

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(todosDefault);

  // Fonctions //
  const handleAddTodo = () => { 
    if (todo) { 
      setTodos([...todos, todo]); 
      setTodo(""); 
    } 
  };  

  const handleNewTodo = (text) => {
    setTodo({title: text, id: todos.length + 1});
  }
  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    const id = updatedTodos.findIndex(item => item.id === index);
    if (id !== -1) {
      updatedTodos.splice(id, 1);
      setTodos(updatedTodos);
    }
    setTodos(updatedTodos); 
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <Header centerComponent={{ text: 'Liste des objectifs', style: styles.heading }}/>
      <TodoAdd handleAddTodo={handleAddTodo} todo={todo} handleNewTodo={handleNewTodo}/>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo}/>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
