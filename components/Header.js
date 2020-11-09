import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../config/Colors';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
    },
    headerText: {
        color: Colors.primaryText,
    }
});

export default Header;