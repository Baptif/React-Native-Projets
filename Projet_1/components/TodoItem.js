import React, { useState } from 'react';
import { CheckBox, Card, Button, Icon } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';

const TodoItem = ({ item, handleDeleteTodo }) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Card containerStyle={styles.card}>
        <View style={styles.cardContent}>
          <CheckBox
            center
            title={item.title}
            checked={checked}
            onPress={() => setChecked(!checked)}
          />
          <View style={styles.buttonContainer}>
            <Button
              icon={
                <Icon
                  name="info"
                  type="material"
                  size={15}
                  color="white"
                />
              }
              type="solid"
              onPress={() => alert("Tâche : "+item.title+".\nFINI CET OBJECTIF !")}
            />
            <View style={styles.separator} />
            <Button
              icon={
                <Icon
                  name="delete"
                  type="material"
                  size={15}
                  color="white"
                />
              }
              color={'red'}
              type="solid"
              onPress={() => handleDeleteTodo(item.id)}
            />
          </View>
        </View>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 6,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginRight: 15,
  },
  separator: {
    width: 10,
  },
});

export default TodoItem;
