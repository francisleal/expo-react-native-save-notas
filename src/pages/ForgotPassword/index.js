import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View, TextInput, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import immagemFundo from "../../assets/bg.png";
import styles from './styles';

function Forgot() {

    const [email, setEmail] = useState('');

    const navigation = useNavigation();

    const handleEnviarEmail = async () => {

        const input = { email };

        if (!input.email) {
            Alert.alert('Campo em branco');
        } else {
            let usuarios = [];

            try {
                const registro = await AsyncStorage.getItem('registerSaveNote');

                if (registro !== null) {
                    usuarios = JSON.parse(registro);

                    let usuarioFiltrado = usuarios.filter(usuario => usuario.email === input.email);

                    if (usuarioFiltrado.length == 0) {

                        Alert.alert('E-mail não encontrado');

                    } else if (input.email === usuarioFiltrado[0].email) {

                        Alert.alert(`Sua senha é  "${usuarioFiltrado[0].senha}"`);

                    } else {
                        Alert.alert('Usuário não encontrado Senha ou E-mail inválido');
                    }
                }

            } catch (error) {
                Alert.alert(error);
            }
        }
    }


    function navigateLogin() {
        navigation.navigate('Login');
    }

    return (
        <ImageBackground source={immagemFundo} style={styles.image}>
            <View style={styles.container}>

                <View style={styles.title}>
                    <Text style={styles.titleName}>Save note</Text>
                    <Text style={styles.titleTela}>Forgot Password</Text>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail"
                    onChangeText={email => setEmail(email.toLowerCase())}
                />

                <TouchableOpacity style={styles.button} onPress={handleEnviarEmail}>
                    <Text style={styles.buttonText} >Enviar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={navigateLogin}>
                    <Text style={styles.voltar}>Voltar</Text>
                </TouchableOpacity>


                <StatusBar style="auto" />

            </View>
        </ImageBackground>
    );
}

export default Forgot;
