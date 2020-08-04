import { StatusBar } from 'expo-status-bar';

import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';

import IconVoltar from '../../assets/icon/icone.png'

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

            if (dbsavenote === null) {
                await AsyncStorage.setItem(chaveAsyncaStorage, '[]');

                console.log(`banco criado com sucesso`);

            } else {
                setDBAsyncStorage(JSON.parse(dbsavenote));
                setChaveDBUsuarioLogado(chaveAsyncaStorage);
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

                dbAsyncStorage.push(nota);

                await AsyncStorage.setItem(dbChaveUsuarioLogado, JSON.stringify(dbAsyncStorage));

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

    const handleSaveNote = () => { dbSaveNote(input) };

    const handleEditNote = () => {
        
    }

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
                        value={titulo}
                        onChangeText={titulo => setTitulo(titulo)}
                    />

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
                <TouchableOpacity onPress={handleSaveNote}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleEditNote}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>save</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Note;
