import { StyleSheet } from 'react-native';

const primaryColor = '#04d361';
const branco = '#fff';
const escuro = '#100f12d9';
const cinza = '#28272c';

export default StyleSheet.create({

    image: {
        flex: 1,
        resizeMode: "cover",
    },

    container: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: "center",
    },

    title: {
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: 24
    },

    titleName: {
        fontSize: 18,
        marginRight: 10,
        color: branco
    },

    titleTela: {
        fontSize: 18,
        color: primaryColor
    },

    input: {
        color: branco,
        borderColor: cinza,
        backgroundColor: escuro,
        width: '100%',
        height: 50,
        borderWidth: 1,
        marginTop: 8,
        paddingHorizontal: 24,
        borderRadius: 3,
    },

    button: {
        backgroundColor: primaryColor,
        width: '100%',
        alignItems: 'center',
        justifyContent: "center",
        height: 50,
        marginTop: 24,
        borderRadius: 3
    },

    buttonText: {
        color: branco,
        fontSize: 14
    },

    voltar: {
        color: primaryColor,
        textAlign: "center",
        fontSize: 14,
        marginTop: 32
    },
});