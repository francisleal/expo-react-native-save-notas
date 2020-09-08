import { StyleSheet } from 'react-native';

const primaryColor = '#04d361';
const branco = '#fff';

const escuro = '#100f12d9';
const cinza = '#28272c';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black',
    },

    section: {
        paddingHorizontal: 8,
        height: '90%',
    },

    fieldset: {
        flexDirection: 'row',

        justifyContent: 'space-between',
    },

    label: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    iconExcluir: {
        textAlign: 'center',
        marginTop: 10,
    },

    iconExcluirLabel: {
        color: 'red',
        fontSize: 12,
        marginTop: 10,
        marginRight: 5
    },

    form: {
        borderColor: cinza,
        backgroundColor: escuro,
        marginTop: '20%',
        borderWidth: 1,
        borderRadius: 3,
    },

    input: {
        color: primaryColor,
        width: '80%',
        height: 60,
        paddingHorizontal: 24,
        borderRadius: 3,
        fontWeight: 'bold'
    },

    textArea: {
        color: branco,
        textAlignVertical: 'top',
        padding: 24,
    },

    footer: {
        flexDirection: 'row-reverse',
        top: -100,
        right: 30,
    },

});