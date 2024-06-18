import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Search from '../Components/Search';
import JobCard from '../Components/JobCard';
import Popular from '../Components/Popular';

const featuredJobs = [
    { id: 1, title: 'Software Engineer', company: 'Facebook', salary: 180000, location: 'Accra, Ghana', icon: <Ionicons name="logo-facebook" size={28} color="blue" /> },
    { id: 2, title: 'Product Manager', company: 'Beats', salary: 84000, location: 'Florida, US', icon: <Ionicons name="logo-google" size={28} color="red" /> },
    { id: 3, title: 'Software Engineer', company: 'Facebook', salary: 180000, location: 'Accra, Ghana', icon: <Ionicons name="logo-facebook" size={28} color="blue" /> },
    { id: 4, title: 'Product Manager', company: 'Beats', salary: 84000, location: 'Florida, US', icon: <Ionicons name="logo-google" size={28} color="red" /> },
    { id: 5, title: 'Software Engineer', company: 'Facebook', salary: 180000, location: 'Accra, Ghana', icon: <Ionicons name="logo-facebook" size={28} color="blue" /> },
    { id: 6, title: 'Product Manager', company: 'Beats', salary: 84000, location: 'Florida, US', icon: <Ionicons name="logo-google" size={28} color="red" /> },
    { id: 7, title: 'Software Engineer', company: 'Facebook', salary: 180000, location: 'Accra, Ghana', icon: <Ionicons name="logo-facebook" size={28} color="blue" /> },
    { id: 8, title: 'Product Manager', company: 'Beats', salary: 84000, location: 'Florida, US', icon: <Ionicons name="logo-google" size={28} color="red" /> },
    { id: 9, title: 'Software Engineer', company: 'Facebook', salary: 180000, location: 'Accra, Ghana', icon: <Ionicons name="logo-facebook" size={28} color="blue" /> },
    { id: 10, title: 'Product Manager', company: 'Beats', salary: 84000, location: 'Florida, US', icon: <Ionicons name="logo-google" size={28} color="red" /> },
];

const popularJobs = [
    { id: 1, title: 'Jr Executive', company: 'Burger King', salary: 96000, location: 'Los Angeles, US', icon: <Image source={require('../assets/burger.png')} style={{ height: 62, width: 62, marginLeft: -10, marginRight: -10 }} /> },
    { id: 2, title: 'Product Manager', company: 'beats', salary: 84000, location: 'Florida, US', icon: <Image source={require('../assets/beats.png')} style={{ height: 43, width: 43 }} /> },
    { id: 3, title: 'Product Manager', company: 'Facebook', salary: 86000, location: 'Florida, US', icon: <Ionicons name="logo-facebook" size={43} color="blue" /> },
    { id: 4, title: 'Jr Executive', company: 'Burger King', salary: 96000, location: 'Los Angeles, US', icon: <Image source={require('../assets/burger.png')} style={{ height: 62, width: 62, marginLeft: -10, marginRight: -10 }} /> },
    { id: 5, title: 'Product Manager', company: 'beats', salary: 84000, location: 'Florida, US', icon: <Image source={require('../assets/beats.png')} style={{ height: 43, width: 43 }} /> },
    { id: 6, title: 'Product Manager', company: 'Facebook', salary: 86000, location: 'Florida, US', icon: <Ionicons name="logo-facebook" size={43} color="blue" /> },
    { id: 7, title: 'Jr Executive', company: 'Burger King', salary: 96000, location: 'Los Angeles, US', icon: <Image source={require('../assets/burger.png')} style={{ height: 62, width: 62, marginLeft: -10, marginRight: -10 }} /> },
    { id: 8, title: 'Product Manager', company: 'beats', salary: 84000, location: 'Florida, US', icon: <Image source={require('../assets/beats.png')} style={{ height: 43, width: 43 }} /> },
    { id: 9, title: 'Product Manager', company: 'Facebook', salary: 86000, location: 'Florida, US', icon: <Ionicons name="logo-facebook" size={43} color="blue" /> },
];

const HomeScreen = ({ route }) => {
    const { name, email } = route.params;

    return (
            <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.header}>Hello, {name}!</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>
                <Image source={require('../assets/person.jpeg')}
                    style={{
                        height: 54,
                        width: 54,
                        borderRadius: '50%'
                    }} />
            </View>
            <Search />
            <View style={styles.featured}>
                <Text style={styles.featuredJobs}>Featured Jobs</Text>
                <Text style={styles.seeAll}>See all</Text>
            </View>
            <View style={styles.featuredFlatlist}>
                <FlatList
                    data={featuredJobs}
                    renderItem={({ item }) => <JobCard job={item} />}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.featured}>
                <Text style={styles.featuredJobs}>Popular Jobs</Text>
                <Text style={styles.seeAll}>See all</Text>
            </View>
                <FlatList
                    data={popularJobs}
                    renderItem={({ item }) => <Popular job={item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.popularFlatlist}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 100,
        backgroundColor: '#FAFAFD'
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    header: {
        fontSize: 24,
        fontWeight: 700,
    },
    email: {
        fontSize: 20,
        marginBottom: 16,
        textTransform: 'lowercase',
        color: '#95969D'
    },
    featured: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        marginBottom: 30
    },
    featuredJobs: {
        fontSize: 16,
        fontWeight: 600,
        color: '#0D0D26'
    },
    seeAll: {
        fontSize: 13,
        color: '#95969D'
    },
    featuredFlatlist: {
        marginHorizontal: -20,
    },
    popularFlatlist: {
        flexGrow: 1,
    }
});

export default HomeScreen;
