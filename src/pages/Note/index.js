import { StatusBar } from 'expo-status-bar';

import React, { useState, useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';

import Header from '../../components/Header';
import ButtonAction from '../../components/ButtonAction';

import styles from './styles';

function Note({ route }) {

    const [titulo, setTitulo] = useState('');
    const [anotacao, setAnotacao] = useState('');

    const [dbAsyncStorage, setDBAsyncStorage] = useState([]);
    const [dbChaveUsuarioLogado, setChaveDBUsuarioLogado] = useState('');

    const navigation = useNavigation();

    const input = { titulo, anotacao, id: Date.now() };

    useEffect(() => {

        editar();

        creatdbsavenote();

    }, [route.params]);

    const creatdbsavenote = async () => {
        try {

            const usuarioLogado = await AsyncStorage.getItem('usuarioLogadoSaveNote');
            const chaveAsyncaStorage = `dbSaveNote${usuarioLogado}`.replace(/"/g, '').replace('.', '');

            const dbsavenote = await AsyncStorage.getItem(chaveAsyncaStorage);

            setChaveDBUsuarioLogado(chaveAsyncaStorage);

            if (dbsavenote === null) {
                await AsyncStorage.setItem(chaveAsyncaStorage, '[]');
            } else {
                setDBAsyncStorage(JSON.parse(dbsavenote));
            }

        } catch (error) {
            console.log('creatdbsavenote', error);
        }
    }

    const dbSaveNote = async (nota) => {
        if (!input.anotacao) {
            Alert.alert('Anotação em branco');
        } else if (!input.titulo) {
            Alert.alert('Você esqueceu o título');
        } else {
            try {

                if (route.params.titulo === 'Editar') {
                    await AsyncStorage.setItem(dbChaveUsuarioLogado, JSON.stringify(nota))
                } else {
                    dbAsyncStorage.push(nota);
                    await AsyncStorage.setItem(dbChaveUsuarioLogado, JSON.stringify(dbAsyncStorage));
                }

                navigation.navigate('NoteList', { titulo: 'Listar' });

            } catch (error) {
                console.log('dbSaveNote', error);
            }
        }
    }

    const editar = () => {
        if (route.params.titulo === 'Editar') {
            setTitulo(route.params.editar.titulo);
            setAnotacao(route.params.editar.anotacao);
        }
    }

    const handleSaveNote = () => {
        dbSaveNote(input);
    };

    const handleEditNote = () => {
        let editar = dbAsyncStorage.filter(nota => nota.id !== route.params.editar.id);
        editar.push(input);

        dbSaveNote(editar);
    }

    const handleExcluirNote = () => {
        dbSaveNote(dbAsyncStorage.filter(nota => nota.id !== route.params.editar.id));
    }

    const navigateSair = () => {
        navigation.navigate('NoteList', { titulo: 'Listar' });
    }

    return (

        <View style={styles.container}>

            <StatusBar style={"auto"} />

            <Header
                titulo={route.params.titulo}
                onPressProps={navigateSair}
            ></Header>

            <View style={styles.section}>

                <View style={styles.form}>

                    <View style={styles.fieldset}>
                        <TextInput
                            style={styles.input}
                            placeholder="Título"
                            placeholderTextColor="#04d361"
                            value={titulo}
                            onChangeText={titulo => setTitulo(titulo)}
                        />

                        {
                            route.params.titulo === 'Editar' &&
                            <TouchableOpacity style={styles.label} onPress={() => handleExcluirNote()}>
                                <Text style={styles.iconExcluir}><FontAwesome5 name="times" size={16} color="red" /></Text>
                            </TouchableOpacity>
                        }

                    </View>

                    <TextInput
                        multiline={true}
                        numberOfLines={15}
                        style={styles.textArea}
                        placeholder="Anotação"
                        value={anotacao}
                        onChangeText={anotacao => setAnotacao(anotacao)}
                    />
                </View>

            </View>

            <View style={styles.footer}>
                {route.params.titulo === 'Editar' ?
                    <ButtonAction onPressProps={handleEditNote} icone="pencil-alt" />
                    :
                    <ButtonAction onPressProps={handleSaveNote} icone="sd-card" />
                }
            </View>
        </View>
    );
}

export default Note;