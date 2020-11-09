import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
    // purpose of this component is just to apply generic reusable style
    // style can also be overwritten by calling component
    return (
        <View style={{...styles.inputSection, ...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    inputSection: {
      width: '80%',
      elevation: 8, // shadow effect for android
      borderRadius: 10,
      backgroundColor: '#fff',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default Card;