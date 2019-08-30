import React, {Fragment} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcome}>welcome Diego</Text>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando React Native</Text>
        <Text style={styles.postDescription}>
          Projeto para se aprofundar no react Native
        </Text>
      </View>

      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando React Native</Text>
        <Text style={styles.postDescription}>
          Projeto para se aprofundar no react Native
        </Text>
      </View>

      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando React Native</Text>
        <Text style={styles.postDescription}>
          Projeto para se aprofundar no react Native
        </Text>
      </View>

      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando React Native</Text>
        <Text style={styles.postDescription}>
          Projeto para se aprofundar no react Native
        </Text>
      </View>

      <Text>aqui</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#333',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  postContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postDescription: {
    color: '#666',
  },
});

export default App;
