import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Popular = ({ job }) => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                {job.icon}
                <View style={styles.middle}>
                    <Text style={{fontWeight:600}}>{job.title}</Text>
                    <Text style={{fontSize:13,color:'#95969D'}}>{job.company}</Text>
                </View>
            </View>
            <View style={styles.middle}>
                <Text style={{textAlign:'right'}}>${job.salary}/y</Text>
                <Text style={{fontSize:13,color:'#95969D'}}>{job.location}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 74,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 20,
        padding: 15,
        justifyContent: 'space-between'
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    middle: {
        gap: 10,
        marginLeft: 20
    },
})

export default Popular
