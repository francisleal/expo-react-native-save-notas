import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function NoteList() {

    const navigation = useNavigation();

    function navigateSair() {
        navigation.navigate('Login');
    }

    function navigateNote() {
        navigation.navigate('Note');
    }

    let numberGrid = 3


    return (

        <View style={styles.container}>

            <StatusBar backgroundColor="#fff" />

            <View style={styles.header}>
                <TouchableOpacity style={styles.buttonVoltar} onPress={navigateSair}>
                    <Text style={styles.buttonVoltarText}>v</Text>
                </TouchableOpacity>

                <Text style={styles.headerText}>Anotações</Text>
            </View>

            <View style={styles.section}>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]}

                    numColumns={numberGrid}
                    keyExtractor={note => String(note)}
                    showsVerticalScrollIndicator={false}
                    renderItem={() => (

                        <TouchableOpacity onPress={navigateNote}>
                            <View style={styles.cardContainer}>
                                <View >
                                    <Text style={styles.cardTitle}>Minha anotação do dia</Text>
                                </View>
                                <View style={styles.cardBody}>
                                    <Text style={styles.cardText}>Lorem ipsum sit amet dolor conserctetur</Text>

                                </View>
                            </View>
                        </TouchableOpacity>

                    )}
                />
            </View>

            <View style={styles.footer}>
                <TouchableOpacity onPress={navigateNote}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default NoteList;
