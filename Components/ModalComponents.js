import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Dimensions, Alert, Image } from 'react-native';

const { height, width } = Dimensions.get('window');

const ModalComponent = ({ visible, onClose, onLogout, navigation }) => {
  const handleLogout = () => {
    onClose();
    onLogout();
  };

  const handleNewsPress = () => {
    Alert.alert('Restricted', 'Access to News is restricted.');
  };

  const handleProfilePress = () => {
    Alert.alert(
      'User Profile',
      '<Profile Picture>\n\n\n\nEmail: danz.famas678@gamil.com \nFirst Name: Danz Bjerfstin \nLast Name: Famas',
      [{ text: 'Back' }]
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.drawer}>
          <Text style={styles.header}>MENU</Text>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => {
              navigation.navigate("Administrators");
              onClose();
            }}
          >
            <Text style={styles.drawerItemText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={handleNewsPress}
          >
            <Text style={styles.drawerItemText}>News</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={handleProfilePress}
          >
            <Text style={styles.drawerItemText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={handleLogout}
          >
            <Text style={styles.drawerItemText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.overlay} onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
  },
  drawer: {
    backgroundColor: 'white',
    width: width * 0.8, // 80% of the screen width
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderRightWidth: 1,
    borderRightColor: 'lightgray',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  drawerItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  drawerItemText: {
    fontSize: 16,
  },
  overlay: {
    flex: 1,
  },
});

export default ModalComponent;
