import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const FavoritesScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Yassss my Favorites Screen Hunnyy!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;