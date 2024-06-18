import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Search = () => {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchbar}>
                <Ionicons name="search" size={25} color='#95969D' style={styles.searchIcon} />
                <TextInput style={styles.search} placeholder="Search a job or position" />
            </View>
            <View style={styles.tuneContainer}><MaterialCommunityIcons name="tune-vertical-variant" size={32} color="#356899" /></View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        height: 48,
        flexDirection: "row",
        alignItems: 'center',
        gap: 10
    },
    searchbar: {
        flexDirection: 'row',
        flex: 1
    },
    search: {
        backgroundColor: "#F2F2F3",
        height: 48,
        width: "100%",
        borderRadius: 12,
        paddingLeft: 40,
        fontSize: 16,
        fontWeight: 700
    },
    searchIcon: {
        left: 35,
        marginLeft: -30,
        zIndex: 10,
        top: 12
    },
    tuneContainer: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: "#F2F2F3",
        justifyContent: 'center',
        alignItems: 'center'
    },
    tuneIcon: {
        color: "white",
        borderRadius: 15
    },
})

export default Search
