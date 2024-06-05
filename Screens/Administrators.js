import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

// Import your images
import pabsIcon from '../assets/Admins/pabs.png';
import danzIcon from '../assets/Admins/dan.png';
import risuIcon from '../assets/Admins/iris.png';

function Administrators() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Meet Our Administrators</Text>
        <Text style={styles.cardText}>Our administrators are experts in the field of IT, each with over 5 years of experience.</Text>

        {/* First Card */}
        <View style={[styles.card, styles.cardBackground1]}>
          <View style={styles.cardBody}>
            <Image source={pabsIcon} style={styles.cardIcon} />
            <Text style={styles.cardTitle2}>Jushua Pabelic</Text>
            <Text>Fullstack Developer</Text>
            <Text style={styles.cardText2}>Jushua is the backbone of the development team, proficient in both front-end and back-end technologies. With a keen eye for design and a passion for problem-solving, Jushua crafts seamless user experiences while ensuring the robustness and efficiency of the underlying codebase. Experienced in a variety of programming languages and frameworks, Jushua brings versatility and innovation to every project, collaborating closely with designers and stakeholders to turn concepts into reality.</Text>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Connect</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Second Card */}
        <View style={[styles.card, styles.cardBackground2]}>
          <View style={styles.cardBody}>
            <Image source={danzIcon} style={styles.cardIcon} />
            <Text style={styles.cardTitle2}>Danz Bjerfstin Famas</Text>
            <Text>Mobile App Developer</Text>
            <Text style={styles.cardText2}>Danz is a visionary in the world of mobile app development, specializing in crafting engaging and intuitive experiences for iOS and Android platforms. With a deep understanding of mobile technologies and user interface design principles, Danz transforms ideas into sleek, feature-rich applications that captivate users. Whether it's building from scratch or optimizing existing code, Danz's meticulous attention to detail and commitment to quality ensure that every app delivers exceptional performance and usability.</Text>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Connect</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Third Card */}
        <View style={[styles.card, styles.cardBackground3]}>
          <View style={styles.cardBody}>
            <Image source={risuIcon} style={styles.cardIcon} />
            <Text style={styles.cardTitle2}>Irisjen De Lara</Text>
            <Text>Project Manager</Text>
            <Text style={styles.cardText2}>Iris is the orchestrator of project success, adept at guiding teams through every stage of development with precision and clarity. With a strategic mindset and exceptional organizational skills, Iris oversees project timelines, resources, and priorities to ensure efficient delivery while maintaining the highest standards of quality. A skilled communicator and problem-solver, Iris fosters collaboration among team members, stakeholders, and clients, ensuring alignment and driving projects towards successful outcomes.</Text>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Connect</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5', // Light gray background
  },
  cardContainer: {
    width: '90%',
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
  },
  cardBody: {
    alignItems: 'center',
  },
  cardIcon: {
    width: 100, // Set the width of the image
    height: 100, // Set the height of the image
    marginBottom: 10,
    borderRadius: 50, // Make it a circle
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333', // Dark gray title
  },
  cardText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666', // Medium gray text
  },
  cardTitle2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333', // Dark gray title
  },
  cardText2: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#666', // Medium gray text
  },
  cardButton: {
    backgroundColor: '#1a75ff', // Blue button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  cardButtonText: {
    color: '#fff', // White button text
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardBackground1: {
    backgroundColor: '#ff6f61', // Light red
  },
  cardBackground2: {
    backgroundColor: '#5bc0de', // Light blue
  },
  cardBackground3: {
    backgroundColor: '#5cb85c', // Light green
  },
  cardBackground4: {
    backgroundColor: '#f0ad4e', // Light orange
  },
});

export default Administrators;
