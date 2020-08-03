import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { Text, View, TextInput, ImageBackground, TouchableOpacity, Alert } from 'react-native';

import immagemFundo from "../../assets/bg.png";
import styles from './styles';

function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    const handleLogin = async () => {
        const input = { email, senha };

        if (!input.email || !input.senha) {
            Alert.alert('Campo em branco')
        } else {
            let usuarios = [];

            try {
                const registro = await AsyncStorage.getItem('registerSaveNote');

                if (registro !== null) {
                    usuarios = JSON.parse(registro);

                    let usuarioFiltrado = usuarios.filter(usuario => usuario.email === input.email && usuario.senha === input.senha);

                    if (usuarioFiltrado.length == 0) {
                        Alert.alert('Não possível logar');
                    } else if (input.email === usuarioFiltrado[0].email && input.senha === usuarioFiltrado[0].senha) {

                        await usuarioLogado(usuarioFiltrado[0].email);

                        navigateNote();
                    } else {
                        Alert.alert('Usuário não encontrado Senha ou E-mail inválido');
                    }
                }

            } catch (error) {
                Alert.alert(error);
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

    function navigateRegister() {
        navigation.navigate('Register');
    }

    function navigateForgotPassword() {
        navigation.navigate('Forgot');
    }

    function navigateNote() {
        navigation.navigate('NoteList');
    }

    return (
        <ImageBackground source={immagemFundo} style={styles.image}>

            <StatusBar style="auto" />

            <View style={styles.container}>

                <View style={styles.title}>
                    <Text style={styles.titleName}>Save note</Text>
                    <Text style={styles.titleTela}>Login</Text>
                </View>


                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    onChangeText={email => setEmail(email.toLowerCase())}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry={true}
                    onChangeText={senha => setSenha(senha)}
                />

                <TouchableOpacity onPress={navigateForgotPassword}>
                    <Text style={styles.forgot}>Esqueci minha senha</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText} >
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={navigateRegister}>
                    <View style={styles.register}>
                        <Text style={styles.registerText1}>Não tem uma conta?</Text>
                        <Text style={styles.registerText2}>Registre-se</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

export default Login;