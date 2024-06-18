import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Login = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        navigation.navigate('Home', { name, email });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jobizz</Text>
            <Text style={styles.subtitle}>Welcome Back 👋</Text>
            <Text style={styles.slogan}>Let's log in. Apply for jobs</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
            />
            <Pressable style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log in</Text>
            </Pressable>
            <View>
            <View style={styles.continueLine}></View>
            <Text style={styles.continueText}>Or continue with</Text>
            </View>
            <View style={styles.iconsContainer}>
                <View style={styles.icons}><Ionicons name="logo-apple" size={28} color="black" /></View>
                <View style={styles.icons}><Ionicons name="logo-google" size={28} color="red" /></View>
                <View style={styles.icons}><Ionicons name="logo-facebook" size={28} color="blue" /></View>
            </View>

            <Text style={styles.already}>
                Have an account? <Text style={{color:'#356899'}}>Register</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 150,
        paddingHorizontal: 30,
        backgroundColor: '#FAFAFD'
    },
    title: {
        fontSize: 22,
        fontWeight: 600,
        color: '#356899',
        marginBottom: 10
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 600,
        marginBottom: 10,
        color: '#0D0D26'
    },
    slogan: {
        fontSize: 14,
        fontWeight: 400,
        color: '#AFB0B6',
        marginBottom: 60
    },
    input: {
        height: 52,
        borderColor: '#AFB0B6',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        borderRadius: 10
    },
    button: {
        height: 56,
        backgroundColor: '#356899',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    continueLine: {
        height: 1,
        backgroundColor: '#AFB0B6',
        marginTop: 70,
        justifyContent: 'center',
    },
    continueText: {
        color: '#AFB0B6',
        fontSize: 13,
        textAlign: 'center',
        backgroundColor: '#FAFAFD',
        width: '40%',
        marginTop: -10,
        marginHorizontal: 'auto',
        paddingHorizontal: 20
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 30,
        marginTop: 40
    },
    icons: {
        width: 56,
        height: 56,
        borderRadius: '50%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    already: {
        textAlign: 'center',
        marginTop: 70,
        color: '#BDBEC2',
        fontSize: 14,
    }
});

export default Login;
