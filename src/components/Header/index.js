import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import styles from './styles';

function Header(props) {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.buttonVoltar} onPress={props.onPressProps}>
                <FontAwesome5 name="chevron-left" size={16} color="#04d361" />
            </TouchableOpacity>

            <View style={styles.headerContainer}>
                <Text style={styles.headerPage}>{props.titulo}</Text>
                <Text style={styles.headerTitulo}>anotação</Text>
            </View>
        </View>
    )
}

export default Header;