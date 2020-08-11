import { StatusBar } from 'expo-status-bar';

import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View, TouchableOpacity, FlatList, Alert } from 'react-native';

import Header from '../../components/Header';
import ButtonAction from '../../components/ButtonAction';

import styles from './styles';

function NoteList({ route }) {

    const [list, setList] = useState([]);

    const navigation = useNavigation();

    const numberGrid = 3

    useEffect(() => {
        handleListarNotas();
    }, [route.params]);

    const handleListarNotas = async () => {
        try {
            const usuarioLogado = await AsyncStorage.getItem('usuarioLogadoSaveNote');
            const chaveAsyncaStorage = `dbSaveNote${usuarioLogado}`.replace(/"/g, '').replace('.', '');

            const dbsavenote = await AsyncStorage.getItem(chaveAsyncaStorage);

            if (dbsavenote === null) {
                Alert.alert('Crie suas Anotações');
            } else {
                setList(JSON.parse(dbsavenote));
            }

        } catch (error) {
            Alert.alert(error);
        }
    }

    const navigateSair = () => {
        navigation.navigate('Login');
    }

    const navigateNoteAdicionar = () => {
        navigation.navigate('Note', { titulo: 'Adicionar' });
    }

    const navigateNoteEditar = (editar) => {
        navigation.navigate('Note', { titulo: 'Editar', editar });
    }

    return (

        <View style={styles.container}>

            <StatusBar style={"auto"} />

            <Header
                titulo={route.params.titulo}
                onPressProps={navigateSair}
            ></Header>

            <View style={styles.section}>
                <FlatList
                    data={list}
                    numColumns={numberGrid}
                    keyExtractor={note => note.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: note }) => (
                        <TouchableOpacity onPress={() => navigateNoteEditar(note)}>
                            <View style={styles.cardContainer}>
                                <View >
                                    <Text style={styles.cardTitle}>{note.titulo}</Text>
                                </View>
                                <View style={styles.cardBody}>
                                    <Text
                                        numberOfLines={4}
                                        style={styles.cardText}>
                                        {note.anotacao}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <View style={styles.footer}>
                <ButtonAction onPressProps={navigateNoteAdicionar} icone="plus" />
            </View>
        </View>
    );
}

export default NoteList;
