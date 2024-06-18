import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JobCard = ({ job }) => (
    <View style={styles.card}>
        <View style={styles.cardTop}>
            <View style={styles.cardIcon}>
                {job.icon}
            </View>
            <View style={{justifyContent:'space-between',height:46}}>
                <Text style={styles.title}>{job.title}</Text>
                <Text style={{fontSize:14,color:'white'}}>{job.company}</Text>
            </View>
        </View>
        <View style={styles.cardBottom}>
            <Text style={styles.bottomText}>${job.salary}/y</Text>
            <Text style={styles.bottomText}>{job.location}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    card: {
        height: 186,
        width: 280,
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 20,
        marginHorizontal: 10,
        backgroundColor: '#356899',
    },
    cardTop: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    cardIcon: {
        width: 46,
        height: 46,
        borderRadius: 12,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: 600,
        color: 'white'
    },
    cardBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottomText: {
        fontSize: 15,
        fontWeight: 500,
        color: 'white'
    }
});

export default JobCard;
