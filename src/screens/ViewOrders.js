import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MealContext from '../context/Context';

const ViewOrdersScreen = props => {
  const { state, removeOrder } = useContext(MealContext);
  const meal = state.meals.find(meal => meal.id === props.route.params.mealId);
  const orders = state.orders;
  // line break
  var totn_string = '#';
  console.log(totn_string.repeat(88));
  console.log(orders)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is Orders</Text>
      <Text style={styles.title}>{meal.title}</Text>
      <Text style={styles.title}>{meal.price}</Text>
      <Image
        style={styles.pic}
        source={{
          uri:
          meal.imageUrl,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 10,
  },
  pic: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#ffa',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginBottom: 10,
  },
});

export default ViewOrdersScreen;

