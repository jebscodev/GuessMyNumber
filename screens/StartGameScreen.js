import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert, Modal } from 'react-native';
import Card from '../components/Card';
import InputBox from '../components/InputBox';
import Colors from '../config/Colors';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [selectedNumber, setSelectedNumber] = useState();
    const [confirmed, setConfirmed] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleEnteredValue = userInput => {
        setEnteredValue(userInput.replace(/[^0-9]/g, ''));
    };

    const dismissKeyboard = () => {
      Keyboard.dismiss();
    };

    const handleClickReset = () => {
      setEnteredValue('');
      setConfirmed(false);
    };

    const handleClickConfirm = () => {
      const value = parseInt(enteredValue);
      if (isNaN(value) || value <= 0 || value > 99) {
        Alert.alert('Invalid Number', 'Please input numbers between 1 and 99.', [
          {text:'Okay', style:'destructive', onPress:handleClickReset}
        ])
      } else {
        setConfirmed(true);
        setSelectedNumber(value);
        setEnteredValue('');
        setModalVisible(true);
      }
    }

    const loadGame = () => {
      props.onGameStart(selectedNumber)
    }

    return(
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.screen}>
          <Text style={styles.screenHeader}>Start A New Game!</Text>
          
          <Card style={styles.inputSection}>
              <Text>Select A Number</Text>
              <InputBox style={styles.inputBox} 
                  blurOnSubmit 
                  keyboardType='number-pad' 
                  maxLength={2}                     
                  onChangeText={handleEnteredValue}
                  value={enteredValue}
              />
              <View style={styles.buttonSection}>
                  <View style={styles.button}><Button title='RESET' color={Colors.secondary} onPress={handleClickReset} /></View>
                  <View style={styles.button}><Button title='CONFIRM' color={Colors.primary} onPress={handleClickConfirm} /></View>
              </View>
          </Card>

          <Modal animationType='slide' transparent={false} visible={modalVisible}>
            <View style={modal.container}>
              <Text style={modal.text}>Chosen Number: {selectedNumber}</Text>
              <Button style={modal.btn} title='START THE GAME!' color={Colors.primary} onPress={loadGame} />
            </View>
          </Modal>

        </View>
      </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10
    },
    screenHeader: {
      fontSize: 20,
      paddingVertical: 10,
    },
    inputSection: {
    },
    inputBox: {
      width: 50,
      marginBottom: 20,
    },
    buttonSection: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    button: {
      width: 100,
    },
});

const modal = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    paddingVertical: 10 
  },
  btn: {
    width: 100
  }
});

export default StartGameScreen;