import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function PopcornTimer(props) {
    const [value, onChangeText] = useState('');
    return (
        <View>
            <Text style={props.styles.titleText}>Popcorn Timer{"\n"}</Text>
            <TextInput
                style={{ height: 40, borderColor: 'blue', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder={"grams"}
            />
            <Text>
                {"Hello\n"}
            </Text>
            <Button title="Start" onPress={() => { console.log("start"); }} />
        </View>
    );
}

