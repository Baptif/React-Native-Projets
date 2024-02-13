import { StyleSheet, View, FlatList } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleDeleteTodo }) => {
  return (
      <View style={styles.container}>
        <FlatList
          data={todos}
          renderItem={({item}) => <TodoItem item={item} handleDeleteTodo={handleDeleteTodo}/>}
          keyExtractor={item => item.id}
        />
      </View>
  );
};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TodoList;
