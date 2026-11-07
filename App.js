import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity, ToastAndroid} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Alert} from 'react-native';


//Create custom component InputBox for TextInputs with Labels

const MyApp = () => {
    // Declare variables
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const InputBox = ({lable, onChangeText}) => {
        return (
            <View>
                <Text>{lable}</Text>
                <TextInput style={{broderWidth: 1}} onChangeText={onChangeText}/>
            </View>
        );
    };
    return (
        <View>
            <Text></Text>
            <Text>User Type:</Text>
            {/* Ex1B: Add a Picker that is labelled "User Type:" with 2 options Admin and Guest. */}
            <Picker onValueChange={(value) => setType(value)}>
                <Picker.Item label="Select an item..." value="" enabled={false} color="#999"/>
                <Picker.Item label='Admin' value='Admin'/>
                <Picker.Item label='Guest' value='Guest'/>
            </Picker>

            {/*/!* Ex1G: Create a TextInput labelled as "User Name".*/}
            <Text>User name:</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={(text) => setName(text)}/>

            {/* Ex1A:  Display the text "Password:" with a simple TextInput underneath */}
            <Text>Password: {pw}</Text>
            <TextInput style={{broderWidth: 1}} onChangeText={(text) => setPw(text)} secureTextEntry={true} />
            <TouchableOpacity onPress={() => {
                const correctPassword = '123';
                let mymessage = 'Error! Wrong Password!';
                if (pw == correctPassword) {
                    mymessage = 'Welcome ' + type + ' ' + name;
                }
                ToastAndroid.show(mymessage, ToastAndroid.SHORT);
            }
            }>
                <Text>LOG IN</Text>
            </TouchableOpacity>


            {/* Ex1C: Add a Button with the title "LOG IN".   */}
            <Button onPress={() => Alert.alert("Welcome!")} title="LOG IN"/>

            {/* Ex1D: Display Alert message "Welcome!" when the LOG IN button pressed. */}

            <Text></Text>

            {/* Ex1E: Add TouchableOpacity labelled as "Alternative LOG IN" with Alert message "Hi hi!" */}
            <TouchableOpacity onPress={() => ToastAndroid.show("Welcome!", ToastAndroid.TOP)}>
                <Text>I'm pressable!</Text>
            </TouchableOpacity>

            {/* Ex1F: change Alert message to Toast message */}

        </View>
    );
};

export default MyApp;
