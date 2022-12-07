import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import AddButton from './components/AddButton';
import {useSelector, useDispatch} from 'react-redux';
import {deleteGroceryItem, addGroceryItem} from './redux/todos';

// const someGroceries = ['eggs', 'milk', 'bread'];
const App = () => {
  //   const [groceries, setGroceries] = useState(someGroceries);
  const [groceryItem, setGroceryItem] = useState('');
  const {groceries} = useSelector(state => state.todos);
  console.log('groceries are ', groceries);
  const dispatch = useDispatch();

  const renderItem = ({item}) => {
    return (
      <View style={styles.renderViewStyle}>
        <Text>{item}</Text>
        <Button
          onPress={() => {
            deleteFood(item);
          }}
          title="delete"
        />
      </View>
    );
  };
  const deleteFood = itemToBeDeleted => {
    dispatch(deleteGroceryItem(itemToBeDeleted));
  };

  const addFood = () => {
    dispatch(addGroceryItem(groceryItem));
  };

  return (
    <SafeAreaView>
      <View style={styles.fistView}>
        <TextInput
          placeholder="Enter Item"
          style={styles.textInputStyle}
          value={groceryItem}
          spellCheck={true}
          onChangeText={text => setGroceryItem(text)}
        />
        <AddButton addFood={addFood} />
      </View>
      <View>
        <FlatList
          data={groceries}
          renderItem={renderItem}
          style={styles.flatListStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  box1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fistView: {
    // borderWidth: 1,
    // borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    height: 40,
    width: 120,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    alignSelf: 'center',
  },
  flatListStyle: {
    // justifyContent: 'center',
    // alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    alignSelf: 'center',
    fontSize: 16,
    width: 300,
    marginTop: 80,
    padding: 5,
  },
  renderViewStyle: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
