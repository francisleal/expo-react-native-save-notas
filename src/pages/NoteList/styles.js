import { StyleSheet, Dimensions } from 'react-native';

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
        right: 30,
    },
});