// MainNavigator.js
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from './Navigation/AuthContext.js';
import { Image, TouchableOpacity } from 'react-native';
import HomeScreen from './Screens/HomeScreen.js';
import ProfileScreen from './Screens/ProfileScreen.js';
import UserScreen from './Screens/UserScreen.js';
import Administrators from './Screens/Administrators.js';
import Login from './Components/Login.js';
import SignUp from './Components/SignUp.js';
import HomePage from './Components/Homepage.js';
import ModalComponent from './Components/ModalComponents.js';
import { useNavigation } from '@react-navigation/native';

import MenuIcon from './assets/menu.png';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen 
              name="HomeScreen" 
              component={HomeScreen} 
              options={{
                title: "CITC CoNexT",
                headerStyle: { backgroundColor: '#044556' },
                headerTintColor: '#fff',
                headerRight: () => (
                  <TouchableOpacity onPress={toggleModal}>
                    <Image 
                      source={MenuIcon}
                      style={{ width: 25, height: 25, marginRight: 15 }}
                    />
                  </TouchableOpacity>
                ),
              }}  
            />
            <Stack.Screen name="Administrators" component={Administrators} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="User" component={UserScreen} />
          </>
        ) : (
          <>
            <Stack.Screen 
              name="HomePage" 
              component={HomePage} 
              options={{
                title: "CITC CoNexT",
                headerStyle: { backgroundColor: '#044556' },
                headerTintColor: '#fff',
              }}  
            />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} /> 
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Administrators" component={Administrators} />
          </>
        )}
      </Stack.Navigator>
      {isLoggedIn && <ModalComponent visible={modalVisible} onClose={toggleModal} onLogout={handleLogout} navigation={navigation} />}
    </>
  );
};

export default MainNavigator;
