import { ListItem, Layout, Button, Icon, CheckBox } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';


const TodoItem = ({ item }, handleRemoveTodo, handleToggleTodoStatus) => {
  console.log('Remove', handleRemoveTodo);
  console.log('Toggle', handleToggleTodoStatus);
  return (
    <ListItem
      title={`${item.title}`}
      description={`${item.title}`}
      accessoryRight={<RenderAccessory todo={item}
                                       onToggle={handleToggleTodoStatus}
                                       onDelete={handleRemoveTodo} />}
    />
  )
}

const RenderAccessory = ({ todo, onToggle, onDelete }) => {
  const [checked, setChecked] = React.useState(todo.completed);

  const DeleteIcon = (props) => (
    <Icon {...props} name='trash-2-outline' />
  );
  console.log('Remove Me', onDelete);
  console.log('Toggle Me', onToggle);
  return (
    <Layout style={styles.container}>
      <Layout style={styles.layout} level='1'>
        <CheckBox
          checked={checked}
          onChange={nextChecked => {
            setChecked(nextChecked);
            onToggle(todo);
          }} />

      </Layout>
      <Layout style={styles.layout} level='1'>
        <Button size='tiny' accessoryLeft={DeleteIcon}
                onPress={() => onDelete(todo)}/>
      </Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    margin: 2,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  controlContainer: {
    borderRadius: 4,
    margin: 2,
    padding: 6,
    backgroundColor: '#3366FF',
  },
  button: {
  },
  container: {
    flex: .5,
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TodoItem;