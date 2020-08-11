import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

const primaryColor = '#04d361';

export default StyleSheet.create({

    header: {
        height: 80,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight + 5,
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        width: '70%',
    },

    headerPage: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 8,
    },

    headerTitulo: {
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
});