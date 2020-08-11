import { StatusBar } from 'expo-status-bar';

import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { Text, View, TextInput, ImageBackground, TouchableOpacity, Alert, CheckBox } from 'react-native';

import immagemFundo from "../../assets/bg.png";
import styles from './styles';

function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [isSelected, setSelection] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {
        getRemember();
    }, []);

    const handleLogin = async () => {
        const input = { email, senha };

        if (!input.email) {
            Alert.alert('Informe seu e-mail');
        } else if (!input.senha) {
            Alert.alert('Informe sua senha');
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

                        await handleRemember();

                        navigateNote();
                    } else {
                        Alert.alert('Usuário não encontrado Senha ou E-mail inválido!');
                    }
                }

                if (registro === null) {
                    Alert.alert('Crie uma conta para poder logar!');
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

    const handleRemember = async () => {

        const input = { email, senha };

        const remember = await AsyncStorage.getItem('remember');

        if (isSelected) {
            try {
                await AsyncStorage.setItem('remember', JSON.stringify(input));
            } catch (error) {
                console.log(`handleRemember - ${error}`)
            }

        } else {
            if (remember !== null) {
                await AsyncStorage.removeItem('remember');
            }
        }
    }

    const getRemember = async () => {
        const remember = await AsyncStorage.getItem('remember');

        if (remember !== null) {

            setEmail(JSON.parse(remember).email);
            setSenha(JSON.parse(remember).senha);

            setSelection(true);
        }
    }

    function navigateRegister() {
        navigation.navigate('Register');
    }

    function navigateForgotPassword() {
        navigation.navigate('Forgot');
    }

    function navigateNote() {
        navigation.navigate('NoteList', { titulo: 'Listar' });
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
                    value={email}
                    onChangeText={email => setEmail(email.toLowerCase())}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={senha}
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

                <View style={styles.remember}>
                    <View style={styles.viewCheckBox}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkBox}
                        />
                    </View>

                    <Text style={styles.rememberText}>Lembrar de mim</Text>
                </View>

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