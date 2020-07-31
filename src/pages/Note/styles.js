import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants'

const primaryColor = '#04d361';
const branco = '#fff';
const card = '#151317e3'


const escuro = '#100f12d9';
const cinza = '#28272c';

export default StyleSheet.create({

    image: {
        flex: 1,
        resizeMode: "cover",
    },

    container: {
        flex: 1,
        backgroundColor: 'black'
    },

    header: {
        height: '10%',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: branco,
        paddingTop: Constants.statusBarHeight + 5,
    },

    headerText: {
        flexDirection: 'row',
        justifyContent: "center",
        width: '70%',
    },

    headerText1: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 8,
    },

    headerText2: {
        color: primaryColor,
        fontWeight: 'bold',
        fontSize: 18,
    },

    buttonVoltar: {
        justifyContent: "center",
        alignItems: 'center',
        height: 35,
        width: '15%',
    },

    buttonVoltarText: {
        color: primaryColor,
        fontSize: 24,
        fontWeight: 'bold',
        transform: [
            { rotate: "90deg" }
        ],
    },

    section: {
        paddingHorizontal: 8,
        height: '90%',
    },

    form: {
        borderColor: cinza,
        backgroundColor: escuro,
        
        marginTop: 64,
        borderWidth: 1,
        borderRadius: 3,
    },

    input: {
        color: primaryColor,
        borderColor: cinza,
        width: '100%',
        height: 60,
        paddingHorizontal: 24,
        borderRadius: 3,
    },

    textArea: {
        color: branco,
        textAlignVertical: 'top',
        padding: 24,
        
        // borderColor: cinza,
        // borderRadius: 3,
        // borderWidth: 1,
    },

    footer: {
        flexDirection: 'row-reverse',
        top: -100,
        right: 40,
    },

    button: {
        backgroundColor: primaryColor,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 50,
        height: 60,
        width: 60,
    },

    buttonText: {
        color: branco,
        fontSize: 24,
    },

});