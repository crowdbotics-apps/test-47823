import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const UserProfileScreen = () => {
  const userInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    profilePicture: 'https://tinyurl.com/42evm3m3',
    interests: ['Photography', 'Traveling', 'Reading', 'Coding']
  };
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.profileHeader}>
          <Image source={{
          uri: userInfo.profilePicture
        }} style={styles.profilePic} />
          <Text style={styles.name}>{userInfo.name}</Text>
          <Text style={styles.email}>{userInfo.email}</Text>
        </View>
        <View style={styles.bioSection}>
          <Text style={styles.bio}>{userInfo.bio}</Text>
        </View>
        <View style={styles.interestsSection}>
          <Text style={styles.sectionTitle}>Interests</Text>
          {userInfo.interests.map((interest, index) => <Text key={index} style={styles.interest}>
              {interest}
            </Text>)}
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  },
  scrollView: {
    alignItems: 'center',
    padding: 20
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginTop: 5
  },
  bioSection: {
    width: '100%'
  },
  bio: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify'
  },
  interestsSection: {
    marginTop: 20,
    width: '100%'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  interest: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5
  }
});
export default UserProfileScreen;