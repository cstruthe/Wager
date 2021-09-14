import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Button,
  TextInput,
} from "react-native";
//import { globalStyles } from "../styles/global";

/*export default function CreateWager() {

  return (
    <SafeAreaView>
      <TextInput />
      <Button
        color="blue"
        title="Submit"
        onPress={() => console.log("hello")}
      />
    </SafeAreaView>
  );
}*/
const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("boo");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="10"
        keyboardType="numeric"
      />
      <Button
        title="Submit"
        color="blue"
        onPress={() => console.log("hello")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default UselessTextInput;
//style={[styles.container, containerStyle]}>
