import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { Text, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function NoteList() {


    const DATA = [
        {
            id: 'aasdf242354',
            titulo: 'nota 1',
            anotacao: 'descricao 1'
        },
        {
            id: '234523qwfsdf',
            titulo: 'nota 2',
            anotacao: 'descricao 2'
        },
        {
            id: 'asdfs34535',
            titulo: 'nota 3',
            anotacao: 'descricao 3'
        }
    ]

    const anotacoes = [
        {
            id: 'a',
            note: [
                {
                    id: 'aasdf242354',
                    titulo: 'nota 1',
                    anotacao: 'descricao 1'
                },
                {
                    id: '234523qwfsdf',
                    titulo: 'nota 2',
                    anotacao: 'descricao 2'
                },
                {
                    id: 'asdfs34535',
                    titulo: 'nota 3',
                    anotacao: 'descricao 3'
                }
            ],
        },
        {
            id: 'email@email.com',
            note: [
                {
                    id: 'aasdf242354',
                    titulo: 'nota 1',
                    anotacao: 'descricao 1'
                },
                {
                    id: '234523qwfsdf',
                    titulo: 'nota 2',
                    anotacao: 'descricao 2'
                },
                {
                    id: 'asdfs34535',
                    titulo: 'nota 3',
                    anotacao: 'descricao 3'
                }
            ],
        },
        {
            id: 'ciclano@email.com',
            note: [
                {
                    id: 'aasdf242354',
                    titulo: 'nota 1',
                    anotacao: 'descricao 1'
                },
                {
                    id: '234523qwfsdf',
                    titulo: 'nota 2',
                    anotacao: 'descricao 2'
                },
                {
                    id: 'asdfs34535',
                    titulo: 'nota 3',
                    anotacao: 'descricao 3'
                }
            ],
        }
    ];

    const [list, setList] = useState([]);

    useEffect(() => {
        listarNotas();
    }, []);


    const navigation = useNavigation();

    const listarNotas = async () => {
        try {
            const usuarioLogado = await AsyncStorage.getItem('usuarioLogadoSaveNote');

            let minhasAnotacoes = anotacoes.filter(notas => notas.id = JSON.parse(usuarioLogado));

            setList(minhasAnotacoes[0].note);

        } catch (error) {
            Alert.alert(error);
        }
    }

    function navigateSair() {
        navigation.navigate('Login');
    }

    function navigateNoteEditar() {
        navigation.navigate('Note', { titulo: 'Editar' });
    }

    function navigateNoteAdicionar() {
        navigation.navigate('Note', { titulo: 'Adicionar' });
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
                    data={list}
                    numColumns={numberGrid}
                    keyExtractor={note => note.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: note }) => (

                        <TouchableOpacity onPress={navigateNoteEditar}>
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
                <TouchableOpacity onPress={navigateNoteAdicionar}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default NoteList;
