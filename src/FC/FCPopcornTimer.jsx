import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ActivityIndicator } from 'react-native';
import { Input, CheckBox, ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function PopcornTimer(props) {

    const [weight, setWeight] = useState('');
    const buttons = ['Microwave ', 'Stovetop'];
    const [instrument, setInstruments] = useState(0);
    const [listening, setListening] = useState(false);

    const listen = (weight, instrument) => {
        console.log(`listen(${weight},${instrument})`);
        setListening(true);
    }
    const cancel = () => {
        console.log("cancel()")
        setListening(false);
    }


    return (
        <ScrollView keyboardShouldPersistTaps='handled'>
            <View>
                <Text style={props.styles.titleText}>Popcorn Timer{"\n"}</Text>
                <View>
                    <ButtonGroup
                        onPress={(e) => setInstruments(e)}
                        selectedIndex={instrument}
                        buttons={buttons}
                        containerStyle={{ height: 50 }}
                        selectedButtonStyle={{ backgroundColor: '#6317fc' }}
                    />
                    <Input
                        onChangeText={weight => setWeight(weight)}
                        value={weight}
                        keyboardType={'numeric'}
                        label={'Weight (g)'}
                        leftIcon={
                            <Icon
                                name='weight'
                                size={24}
                                color='black'
                            />
                        }
                    />
                </View>
                <Button
                    color={listening ? 'red' : "#6317fc"}
                    title={listening ? "Cancel" : "Start"}
                    disabled={weight < 1}
                    onPress={() => listening ? cancel() : listen(weight, instrument)}
                />
                <View style={{ margin: 30 }}>
                    {listening && <ActivityIndicator size="large" color="#1767fc" />}
                </View>
            </View>
        </ScrollView >
    );
}
