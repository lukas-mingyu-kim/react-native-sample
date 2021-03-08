import React from 'react';
import {Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    console.log('Component')

    const name = 'Lukas';

    return (
        <View>
            <Text style={styles.h1Style}>Getting started with react native!</Text>
            <Text style={styles.h2Style}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    h1Style: {
        fontSize: 45
    },
    h2Style: {
        fontSize: 20
    }
});

export default ComponentsScreen;