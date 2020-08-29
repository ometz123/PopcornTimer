import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Input, CheckBox, ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function PopcornTimer(props) {
    const [weight, setWeight] = useState('');
    const buttons = ['Microwave ', 'Stovetop'];
    const [instrument, setInstruments] = useState(0);

    const listen = (weight, instrument) => {
        alert(`weight: ${weight},instrument: ${instrument}`)
    }
    return (
        <ScrollView keyboardShouldPersistTaps='handled'>
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
            <Text>
                {"\n"}
            </Text>
            <Button
                color={"#6317fc"}
                title="Start"
                disabled={weight < 1}
                onPress={() => listen(weight, instrument)}
            />
        </ScrollView >
    );
}

