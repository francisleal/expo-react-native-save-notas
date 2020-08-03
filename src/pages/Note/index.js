import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

import IconVoltar from '../../assets/icon/icone.png'

import styles from './styles';

function Note({ route }) {

    const navigation = useNavigation();

    function navigateSair() {
        navigation.navigate('NoteList');
    }

    return (

        <View style={styles.container}>

            <StatusBar style={"auto"} />

            <View style={styles.header}>
                <TouchableOpacity style={styles.buttonVoltar} onPress={navigateSair}>
                    <Image source={IconVoltar} style={styles.iconVoltar}></Image>
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
