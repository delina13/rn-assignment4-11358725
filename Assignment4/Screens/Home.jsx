import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const jobs = [
  { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' },
  { id: '2', title: 'Product Manager', company: 'Beats', salary: '$84,000', location: 'Florida, US' },
  // Add more jobs as required
];

const JobCard = ({ job }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{job.title}</Text>
    <Text>{job.company}</Text>
    <Text>{job.salary}</Text>
    <Text>{job.location}</Text>
  </View>
);

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello, {name}!</Text>
      <Text style={styles.email}>{email}</Text>
      <FlatList
        data={jobs}
        renderItem={({ item }) => <JobCard job={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    marginBottom: 16,
  },
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

export default HomeScreen;
