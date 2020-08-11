import React from 'react';

import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

function ButtonAction(props) {
    return (
        <TouchableOpacity onPress={props.onPressProps}>
            <View style={styles.button}>
                {props.children}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#04d361',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 50,
        height: 60,
        width: 60,
    },
})

export default ButtonAction;