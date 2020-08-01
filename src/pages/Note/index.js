import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function Note({ route }) {

    const navigation = useNavigation();

    function navigateSair() {
        navigation.navigate('NoteList');
    }

    return (

        <View style={styles.container}>

            <StatusBar backgroundColor="#fff" />

            <View style={styles.header}>
                <TouchableOpacity style={styles.buttonVoltar} onPress={navigateSair}>
                    <Text style={styles.buttonVoltarText}>v</Text>
                </TouchableOpacity>

                <View style={styles.headerText}>
                    <Text style={styles.headerText1}>{route.params.titulo}</Text>
                    <Text style={styles.headerText2}>anotação</Text>
                </View>

            </View>

            <View style={styles.section}>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Título"
                        placeholderTextColor="#04d361"
                    />

                    <TextInput
                        multiline={true}
                        numberOfLines={15}
                        style={styles.textArea}
                        placeholder="Anotação"
                    />
                </View>

            </View>

            <View style={styles.footer}>
                <TouchableOpacity onPress={() => { }}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Note;
