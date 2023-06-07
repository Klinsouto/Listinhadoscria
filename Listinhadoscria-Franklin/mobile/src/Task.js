import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export default function Tarefa({ data, deleteItem }){
    return (
        <View style={styles.container}>
            <FontAwesome name="trash" size={20} color="#22272e" />
            <Text style={styles.taskName}>{data.nome}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(196, 196, 196, 0.20)',
        marginTop: 12,
        padding: 12,
        borderRadius: 6,
        flexDirection: 'row'
    },
    taskName: {
        fontSize: 16,
        marginHorizontal: 15
    }
})