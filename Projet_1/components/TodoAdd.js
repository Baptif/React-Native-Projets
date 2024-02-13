import { Input, Icon, Button } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';

const TodoAdd = ({handleAddTodo, todo, handleNewTodo}) => {
    return (
        <View style={styles.viewContainer}>
            <Input 
                placeholder="Tâche à ajouter.."
                value={todo.title}
                onChangeText={(text) => handleNewTodo(text)} 
            /> 
            <Button
                title={'Ajouter une tâche'}
                icon={
                    <Icon
                    name="add"
                    type="material"
                    size={15}
                    color="white"
                    />
                }
                color={'green'}
                type="solid"
                onPress={handleAddTodo}
            /> 
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        padding: 6,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
});

export default TodoAdd;