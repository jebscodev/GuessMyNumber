import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Colors from '../config/Colors';

const InputBox = props => {
    // purpose of this component is just to apply generic reusable style
    // style can also be overwritten by calling component
    return (
        <TextInput {...props} style={{...styles.inputBox, ...props.style}} />
    );
};

const styles = StyleSheet.create({
    inputBox: {
        borderBottomColor: Colors.secondary,
        borderBottomWidth: 1,
        textAlign: 'center',
    },
});

export default InputBox;