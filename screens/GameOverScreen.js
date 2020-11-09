import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';
import Colors from '../config/Colors';

const GameOverScreen = props => {
    const loadNewGame = () => {
        props.onNewGame();
    };

    return (
        <View style={styles.screen}>
            <Card>
                <Text style={styles.header}>Game Over!</Text>
                <Text style={styles.header}>The Number was {props.numberToGuess}. </Text>
                <Text style={styles.header}>Guessed in {props.numberOfRounds} rounds.</Text>
                <View style={styles.buttonSection}>
                    <View style={styles.button}><Button title='NEW GAME' color={Colors.primary} onPress={loadNewGame} /></View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    header: {
      marginBottom: 20,
    },
    buttonSection: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    button: {
      width: 120,
    },
});

export default GameOverScreen;