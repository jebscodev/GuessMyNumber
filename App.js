import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [rounds, setRounds] = useState(0);
  const [showScreen, setShowScreen] = useState('startGameScreen');

  const transitionStartGameScreen = () => {
    setShowScreen('startGameScreen');
  };

  const transitionGameScreen = selectedNumber => {
    setUserNumber(selectedNumber);
    setShowScreen('gameScreen');
  };

  const transitionGameOverScreen = guessCount => {
    setRounds(guessCount);
    setShowScreen('gameOverScreen');
  };

  let screen;

  switch (showScreen) {
    case 'startGameScreen':
      screen = <StartGameScreen onGameStart={transitionGameScreen} />;
      break;
    case 'gameScreen':
      screen = <GameScreen numberToGuess={userNumber} onGameOver={transitionGameOverScreen} />;
      break;
    case 'gameOverScreen':
      screen = <GameOverScreen numberToGuess={userNumber} numberOfRounds={rounds} onNewGame={transitionStartGameScreen} />;
      break;
  }


  return (
    <View styles={styles.container}>
      <Header headerText='Guess A Number' />
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
