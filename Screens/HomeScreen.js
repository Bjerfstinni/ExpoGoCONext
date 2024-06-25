import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Modal } from 'react-native';

function HomeScreen({ navigation, route }) {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Ref for ScrollView
  const scrollViewRef = useRef(null);

  // Fetch news data
  useEffect(() => {
    fetch("http://192.168.217.62:5000/fetchnews", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch news data");
        }
        return res.json();
      })
      .then((data) => {
        setNews(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const openModal = (newsItem) => {
    setSelectedNews(newsItem);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedNews(null);
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} ref={scrollViewRef}>
      <View style={styles.getConnected}>
        <Text style={styles.heading}>
          Welcome Arlene Baldelovar {route.params && route.params.firstName}
        </Text>
        <Text style={styles.paragraph}>
          A centralized application; An educational blog site for students under the Department of College of Information Technology and Communication in USTP-CDO        </Text>
        <View style={styles.centeredButtonContainer} />
        <Image source={require('../assets/img1.png')} style={styles.image} />
      </View>

      <View style={styles.cards}>
        <View style={styles.cardContainer}>
          {error && <Text style={styles.error}>{error}</Text>}
          {news.slice(0, 3).map((item) => (
            <TouchableOpacity key={item._id} onPress={() => openModal(item)}>
              <View style={[styles.card, styles.darkBackground]}>
                <View style={styles.cardBody}>
                  <Image
                    source={{ uri: item.imageUrl }}
                    style={styles.cardIcon}
                  />
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardText} numberOfLines={3}>{item.description}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
          {!showMore && news.length > 3 && (
            <TouchableOpacity onPress={() => setShowMore(true)} style={styles.imgbtnbg}>
              <Text style={styles.adminButtonText2}>Show more</Text>
            </TouchableOpacity>
          )}
          {showMore && news.slice(3).map((item) => (
            <View key={item._id} style={[styles.card, styles.darkBackground]}>
              <View style={styles.cardBody}>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.cardIcon}
                />
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardText} numberOfLines={3}>{item.description}</Text>
              </View>
            </View>
          ))}
          {showMore && (
            <TouchableOpacity onPress={() => setShowMore(false)} style={styles.imgbtnbg}>
              <Text style={styles.adminButtonText2}>Show less</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.modalScrollView}>
            <View style={styles.modalContent}>
              {selectedNews && (
                <>
                  <Image
                    source={{ uri: selectedNews.imageUrl }}
                    style={styles.modalImage}
                  />
                  <Text style={styles.modalTitle}>{selectedNews.title}</Text>
                  <Text style={styles.modalDescription}>{selectedNews.description}</Text>

                  <TouchableOpacity onPress={closeModal} style={styles.modalCloseButton}>
                    <Text style={styles.modalCloseButtonText}>Close</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </ScrollView>
        </View>
      </Modal>



      <View style={styles.imagebg}>
        <TouchableOpacity
          style={styles.imgbtnbg1}>
          <Text style={styles.adminButtonText1}></Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewStyle}>
        <TouchableOpacity
          style={styles.adminButton}
          onPress={() => navigation.navigate("Administrators")}
        >
          <Text style={styles.adminButtonText}>Administrators</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.viewStyle}>
        <TouchableOpacity
          style={styles.adminButtonspace}
        >
          <Text style={styles.adminButtonText}></Text>
        </TouchableOpacity>
      </View>



      <View style={styles.footer}>
        <Text style={styles.footerText1}>Copyright © 2024 QuantiGoals</Text>
        <TouchableOpacity onPress={() => { }}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <Text style={styles.footerLink}>Terms & Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <Text style={styles.footerLink}>Cookie Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <Text style={styles.footerLink}>Contact</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Container Styles
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },

  // Navbar Styles
  navbar: {
    backgroundColor: '#044556',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navbarText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  // Get Connected Styles
  getConnected: {
    backgroundColor: '#044556',
    padding: 20,
  },

  // Heading Styles
  heading: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  // Paragraph Styles
  paragraph: {
    color: '#aeb2b3',
    marginBottom: 20,
    textAlign: 'justify',
  },

  // Button Styles
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#044556',
    fontWeight: 'bold',
  },

  // Image Styles
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 20,
  },

  // Subscription Styles
  subscription: {
    backgroundColor: '#000',
    padding: 20,
  },
  subscriptionHeading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subscriptionInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Input Styles
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    height: 40,
    color: '#000',
  },

  // Subscribe Button Styles
  subscribeButton: {
    backgroundColor: '#044556',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  subscribeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // Card Styles
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  cardContainer2: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: "#1a75ff"
  },
  card: {
    marginTop: 10,
    flex: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardBody: {
    alignItems: 'center',
  },
  cardIcon: {
    fontSize: 40,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff',
    textAlign: 'center',
  },
  cardText: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  cardTitle2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
  cardText2: {
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  cardTitle3: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 35,
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
  },
  cardText3: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  cardButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  cardButtonText: {
    color: '#044556',
    fontWeight: 'bold',
  },

  // Background Styles
  darkBackground: {
    backgroundColor: '#000',
  },
  whiteBackground: {
    backgroundColor: '#ffffff'
  },
  secondaryBackground: {
    backgroundColor: '#6c757d',
  },

  // Footer Styles
  footer: {
    backgroundColor: '#044556',
    paddingVertical: 20,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  footerText: {
    color: '#fff',
  },
  footerText1: {
    color: '#fff',
    fontSize: 20,
    paddingBottom: 15,
  },
  footerLink: {
    color: '#fff',
    textDecorationLine: 'underline',
    marginBottom: 5,
  },

  // Image Section Styles
  imageSection: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  imageTextContainer: {
    flex: 1,
    paddingRight: 10,
  },
  imageHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007bff', // Text primary color
  },
  imageParagraph: {
    color: '#212529', // Text body color
    marginBottom: 10,
  },
  imageButton: {
    backgroundColor: '#ffffff', // White button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  imageButtonText: {
    color: '#007bff', // Button text color
    fontWeight: 'bold',
  },
  imagebg: {
    backgroundColor: 'white',
    padding: 20,
  },

  // Button Background Styles
  buttonbg: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imgbtnbg: {
    backgroundColor: '#044556',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  imgbtnbg1: {
    backgroundColor: '#fff',
    paddingVertical: -5,
    paddingHorizontal: 0,
    borderRadius: 0,
    alignSelf: 'flex-start',
  },

  // Accordion Styles
  accordion: {
    marginTop: 20,
  },
  accordionButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  accordionButtonText: {
    color: '#044556',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#044556',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 1000,
  },
  accordionContent: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
  },

  // Centered Button Container Styles
  centeredButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Admin Button Styles
  adminButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#044556',
  },
  adminButtonText: {
    color: '#044556',
    fontWeight: 'bold',
  },
  adminButtonText1: {
    color: '#fff',
    fontWeight: 'bold',
  },
  adminButtonText2: {
    color: '#fff',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },

  // Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    shadowOpacity: 'rgba(0,0,0,0.5) ',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: 300, // Fixed width value
    maxHeight: '80%', // Set maximum height to ensure modal content is scrollable

  },
  modalImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: 10,
    textAlign: 'center',
  },
  modalDescription: {
    color: 'rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalCloseButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  modalCloseButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalScrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


});

export default HomeScreen;