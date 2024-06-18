import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JobCard = ({ job }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{job.title}</Text>
    <Text>{job.company}</Text>
    <Text>{job.salary}</Text>
    <Text>{job.location}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default JobCard;
