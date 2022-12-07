import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const AddButton = props => {
  const {addFood} = props;
  return (
    <View>
      <TouchableOpacity onPress={addFood}>
        <Text style={styles.textStyle}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    backgroundColor: 'green',
    alignSelf: 'center',
    padding: 5,
    color: 'white',
  },
});
