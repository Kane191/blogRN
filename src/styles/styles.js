import { StyleSheet } from 'react-native';

const btn = {
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 10,
    width: 250,
    borderRadius: 30
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7FA',
        flex: 1,
        paddingTop: 50
    },
    contCenter:{
        flexDirection: 'column',
        // alignItems: 'center'
    },
    img:{
        marginHorizontal: 10,
        // 
    },
    mt20:{
        marginTop: 10
    },
    img2:{
        alignSelf: 'center'
    },
    heading: {
        color: '#7965FF',
        textAlign: 'center',
        fontSize: 42,
        fontWeight: 'bold'
    },
    heading2: {
        color: '#7965FF',
        textAlign: 'center',
        fontSize: 38,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    heading3: {
        fontSize: 18,
        color: '#333333',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
        marginTop: 65
    },
    txt: {
        textAlign: 'center',
        marginHorizontal: 40,
        color: '#666',
        letterSpacing: .6
    },
    btnCont: {
        marginTop: 100,
        flexDirection: 'column',
        alignItems: 'center',
    },
    btnPurple: {
        ...btn,
        backgroundColor: '#7965FF',
    },
    btn: {
        ...btn,
        borderColor: 'rgba(0, 0, 0, 0.30)',
        borderWidth: 1
    },
    btnTextWhite:{
       color: '#fff',
       fontWeight: 'bold'
    },
    btnText:{
        color: '#666',
        fontWeight: 'bold'
    },
    form: {
        marginTop: 50,
        marginHorizontal: 28
    },
    formInput: {
        borderWidth: 1,
        borderColor: '#666',
        padding: 8,
        marginVertical: 8,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    btnRegister: {
        marginTop: 30,
        alignSelf: 'center'
    }
});

export default styles;