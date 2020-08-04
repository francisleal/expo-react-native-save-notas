import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { Text, View, TextInput, ImageBackground, TouchableOpacity, Alert } from 'react-native';

import immagemFundo from "../../assets/bg.png";

import styles from './styles';

function Register() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const navigation = useNavigation();

    const handleRegister = async () => {
        const data = { nome, email, senha, confirmarSenha, id: Math.floor(Math.random() * 99999) };

        if (!data.nome || !data.email || !data.senha) {
            Alert.alert('Campo em branco');
        } else {
            let usuarios = [];

            if (data.senha === data.confirmarSenha) {

                try {

                    const registro = await AsyncStorage.getItem('registerSaveNote');

                    if (registro === null) {
                        salvarRegistro(data);
                    } else {
                        usuarios = JSON.parse(registro);
                        salvarRegistro(data);
                    }

                    async function salvarRegistro(novoUsuario) {

                        await usuarioLogado(novoUsuario.email);

                        usuarios.push(novoUsuario);

                        await AsyncStorage.setItem("registerSaveNote", JSON.stringify(usuarios));

                        Alert.alert(`${novoUsuario.nome} - cadastrado com sucesso`);

                        navigateNoteList();
                    }

                } catch (error) {
                    Alert.alert(error);
                }

            } else {
                Alert.alert('Senha diferentes');
            }
        }
    }

    const usuarioLogado = async (usuario) => {
        try {
            await AsyncStorage.setItem('usuarioLogadoSaveNote', JSON.stringify(usuario));
        } catch (error) {
            Alert.alert('Error - usuario logado');
        }
    }

    const getData = async () => {
        try {
            const registro = await AsyncStorage.getItem('registerSaveNote');

            if (registro !== null) {
                Alert.alert('Pesquisar registros -', registro);
            }
        } catch (e) {
            console.log(e);
        }
    }

    const remove = async () => {
        try {
            await AsyncStorage.removeItem('registerSaveNote');

            console.log('remove sucesso');
        } catch (error) {
            console.log(error);
        }
    }

    function navigateLogin() {
        navigation.navigate('Login');
    }

    function navigateNoteList() {
        navigation.navigate('NoteList', { titulo: 'Listar' });
    }

    return (
        <ImageBackground source={immagemFundo} style={styles.image}>

            <StatusBar style="auto" />

            <View style={styles.container}>

                <View style={styles.title}>
                    <Text style={styles.titleName}>Save note</Text>
                    <Text style={styles.titleTela}>Register</Text>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    onChangeText={nome => setNome(nome)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail"
                    onChangeText={email => setEmail(email.toLowerCase())}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    maxLength={8}
                    secureTextEntry={true}
                    onChangeText={senha => setSenha(senha)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirme sua senha"
                    maxLength={8}
                    secureTextEntry={true}
                    onChangeText={confirmarSenha => setConfirmarSenha(confirmarSenha)}
                />

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText} >Register</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={navigateLogin}>
                    <Text style={styles.voltar}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={getData}>
                    <Text style={styles.voltar}>Pesquisar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={remove}>
                    <Text style={styles.voltar}>Remove</Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    );
}

export default Register;
