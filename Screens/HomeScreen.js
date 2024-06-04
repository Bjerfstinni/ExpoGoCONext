import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Collapsible from 'react-native-collapsible';

function HomeScreen({ navigation }) {
  const [isCollapsed1, setIsCollapsed1] = useState(true);
  const [isCollapsed2, setIsCollapsed2] = useState(true);
  const [isCollapsed3, setIsCollapsed3] = useState(true);
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  // Ref for ScrollView
  const scrollViewRef = useRef(null);
  
  // Fetch news data
  useEffect(() => {
    fetch("http://192.168.1.38:5000/fetchnews", {
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

  return (
    <ScrollView contentContainerStyle={styles.container} ref={scrollViewRef}>
      <View style={styles.getConnected}>
        <Text style={styles.heading}>Welcome to CITC-COnext News</Text>
        <Text style={styles.paragraph}>
          Stay updated with the latest trends and insights in the world of technology and innovation. Our blog brings you the freshest news, intriguing articles, and expert opinions to keep you informed and inspired. Dive into our latest stories and explore the future of tech with us.
        </Text>
        <View style={styles.centeredButtonContainer}>
        </View>
        <Image source={require('../assets/img1.png')} style={styles.image} />
      </View>

      <View style={styles.cards}>
        <View style={styles.cardContainer}>
          {error && <Text style={styles.error}>{error}</Text>}
          {news.map((item) => (
            <View key={item._id} style={[styles.card, styles.darkBackground]}>
              <View style={styles.cardBody}>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.cardIcon}
                />
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardText}>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.imagebg}>
        <Image source={require('../assets/idea.jpg')} style={styles.image} />
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus iusto commodi corrupti praesentium repellat eius, atque, quod nihil tempore inventore tempora error, assumenda numquam consectetur. Optio quae voluptates sunt!
        </Text>
        <TouchableOpacity
          style={styles.imgbtnbg}
          onPress={() => navigation.navigate("Administrators")}>
          <Text style={styles.adminButtonText1}>Meet the developers!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imagebg}>
        <Image source={require('../assets/success.jpg')} style={styles.image} />
        <Text style={styles.paragraph}>
          At CITC-COnext, we understand the importance of staying informed and connected. That's why we have developed a comprehensive suite of resources designed to keep you up-to-date on everything happening within the CITC department, EXCLUSIVELY FOR YOU!
        </Text>
        <TouchableOpacity
          style={styles.imgbtnbg}
          onPress={() => navigation.navigate("Administrators")}>
          <Text style={styles.adminButtonText1}>Meet the developers!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.accordion}>
        <TouchableOpacity
          style={styles.accordionButton}
          onPress={() => setIsCollapsed1(!isCollapsed1)}>
          <Text style={styles.accordionButtonText}>What kind of news are you looking for?</Text>
        </TouchableOpacity>
        <Collapsible collapsed={isCollapsed1}>
          <Text style={styles.accordionContent}>Wanna share some legitimate news?</Text>
        </Collapsible>

        <TouchableOpacity
          style={styles.accordionButton}
          onPress={() => setIsCollapsed2(!isCollapsed2)}>
          <Text style={styles.accordionButtonText}>Do you finance a Project?</Text>
        </TouchableOpacity>
        <Collapsible collapsed={isCollapsed2}>
          <Text style={styles.accordionContent}>No, I haven't</Text>
        </Collapsible>

        <TouchableOpacity
          style={styles.accordionButton}
          onPress={() => setIsCollapsed3(!isCollapsed3)}>
          <Text style={styles.accordionButtonText}>Can I earn money if I join?</Text>
        </TouchableOpacity>
        <Collapsible collapsed={isCollapsed3}>
          <Text style={styles.accordionContent}>Yes, it is possible</Text>
        </Collapsible>
      </View>

      <View style={styles.viewStyle}>
        <TouchableOpacity
          style={styles.adminButtonspace}
        >
          <Text style={styles.adminButtonText}></Text>
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
        <TouchableOpacity onPress={() => { /* Navigate to Privacy Policy screen */ }}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Navigate to Terms & Conditions screen */ }}>
          <Text style={styles.footerLink}>Terms & Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Navigate to Cookie Policy screen */ }}>
          <Text style={styles.footerLink}>Cookie Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Navigate to Contact screen */ }}>
          <Text style={styles.footerLink}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerLink}></Text>
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
    fontSize: 20,
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
  error: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default HomeScreen;
