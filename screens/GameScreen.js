import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Colors from '../config/Colors';
import Card from '../components/Card';

// only called ONCE during initialization of useState variable
const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const num = Math.floor(Math.random() * (max-min)) + min;
    // prevent correct guess on first attempt
    if (num === exclude) 
        generateRandomBetween(min, max, exclude);
    else 
        return num;
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.numberToGuess));
    const [guessCount, setGuessCount] = useState(0);

    // useRef() persists althroughout the component cyle
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    // object destructuring
    const { numberToGuess, onGameOver } = props;
    
    // runs AFTER component cycle is rendered
    useEffect(() => {
        if (currentGuess == numberToGuess) {
            onGameOver(guessCount);
        }
    }, [currentGuess]);

    const nextGuess = direction => {
        if ((direction == 'lower' && currentGuess < props.numberToGuess) || 
            (direction == 'higher' && currentGuess > props.numberToGuess)) {
                Alert.alert("Don't Lie!", 'Please choose the correct direction');
                return;
        }
        
        if (direction == 'lower')
            currentHigh.current = currentGuess;
        else
            currentLow.current = currentGuess;

        let newGuess = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(newGuess);
        setGuessCount(newCount => newCount + 1);
    }

    return (
        <View style={styles.screen}>
            <Card>
                <Text style={styles.header}>Computer's guess: {currentGuess}</Text>
                <View style={styles.buttonSection}>
                    <View style={styles.button}><Button title='LOWER' color={Colors.primary} onPress={nextGuess.bind(this, 'lower')} /></View>
                    <View style={styles.button}><Button title='HIGHER' color={Colors.primary} onPress={nextGuess.bind(this, 'higher')} /></View>
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
      width: 80,
    },
});

export default GameScreen;