import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import immagemFundo from "../../assets/bg.png";
import styles from './styles';

function Login() {

    const navigation = useNavigation();

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
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                />

                <TouchableOpacity onPress={navigateForgotPassword}>
                    <Text style={styles.forgot}>Esqueci minha senha</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={navigateNote}>
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