import React from 'react';

import { FontAwesome5 } from '@expo/vector-icons';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

function ButtonAction(props) {
    return (
        <TouchableOpacity onPress={props.onPressProps}>
            <View style={styles.button}>
                <FontAwesome5 name={props.icone} size={16} color="#ffffff" />
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