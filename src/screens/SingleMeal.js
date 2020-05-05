import React, { useState, useContext } from 'react';
import { View, Text, Switch, Image, StyleSheet, Button, Alert  } from 'react-native';
import MealContext from '../context/Context';

const SingleMealScreen = props => {
  const { state, addToOrder } = useContext(MealContext);
  const meal = state.meals.find(meal => meal.id === props.route.params.mealId);
  const [order, setOrder] = useState({ meal: {}, quantity: 1 });

  // add to order
  const orderMeal = () => {
    order.meal = meal;
    addToOrder(order);
  };
// line break
  var totn_string = '*';
  console.log(totn_string.repeat(88));
  console.log(meal)
  return (
    <View style={styles.container}>
      {/* Meal Information and Description */}
      <View style={styles.infoCard}>
      <Image
        style={styles.pic}
        source={{
          uri:
          meal.imageUrl,
        }}
      />
        <Text style={styles.text}>{meal.title}</Text>
        <Text style={styles.text}>{meal.price}</Text>
      </View>

      {/* Order Now button and input for quantity */}
      <View 
        style={styles.actionButtons
        // data={meals}
        }>
        {/* I need a quantity input :/ */}
        <Button 
        title='Order Now!'
        onPress={() => { 
        console.log('heeeeeeeerrrrrrreeeeee')
          props.navigation.navigate('View Orders', {
            mealId: meal.id,
          });
        }}
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  favorite: {
    marginTop: 88,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  infoCard: {
    height: 222,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#999',
    borderRadius: 5,
    marginBottom: 22,
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
  text: {
    marginBottom: 10,
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default SingleMealScreen;