import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './pages/Login';
import Forgot from './pages/ForgotPassword';
import Register from './pages/Register';

import Note from './pages/Note';
import NoteList from './pages/NoteList';


const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>                
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Forgot" component={Forgot} />
                <Stack.Screen name="Register" component={Register} />

                <Stack.Screen name="NoteList" component={NoteList} />
                <Stack.Screen name="Note" component={Note} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;