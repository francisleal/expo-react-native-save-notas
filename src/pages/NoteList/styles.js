import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants'

const primaryColor = '#04d361';
const branco = '#fff';
const card = '#151317e3'

const { width } = Dimensions.get('window');

const numberGrid = 3;

const itemWidth = (width - 42) / numberGrid;

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

    iconVoltar: {
        width: 16,
        height: 16,
    },

    section: {
        paddingHorizontal: 8,
        height: '90%',
        marginTop: 16,
    },

    cardContainer: {
        width: itemWidth,
        height: itemWidth,
        backgroundColor: card,
        borderWidth: 1,
        padding: 8,
        margin: 4,
    },

    cardTitle: {
        color: branco,
        fontSize: 12,
    },

    cardText: {
        color: '#999',
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