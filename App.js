/*import { StatusBar } from "expo-status-bar";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import React from "react";
import { render } from "react-dom";
//import { StyleSheet, Text, View } from 'react-native';
import { StyleSheet, SafeAreaView, Button } from "react-native";
import Navigator from "./routes/homeStack";
import Home from "./screens/Home";*/
import React, { useState } from "react";
import Home from "./screens/Home";
import Navigator from "./routes/homeStack";
export default function App() {
  return <Navigator />;
}

/*<SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        color="blue"
        title="Create new Wager"
        onPress={() => [CreatePanel(), console.log("hello")]}
      />
      <Button color="blue" title="view/edit existing wager" />
    </SafeAreaView>*/
/*const Navigator = StrackNavigator(
  {
    Home: { screen: HomeScreen },
    NewWager: { screen: ProfileScreen },
  },
  {
    navigationOptions: {
      headerStyle: {
        marginTop: Expo.Constants.statusBarHeight,
      },
    },
  }
);*/

/*export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        color="blue"
        title="Create new Wager"
        onPress={() => [CreatePanel(), console.log("hello")]}
      />
      <Button color="blue" title="view/edit existing wager" />
    </SafeAreaView>
  );
  render(){
    return(
      <Navigator initialRoute={{id:'CreatePanel'}}
      />
    )
  }
}
export function CreatePanel() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button color="blue" title="Hello" />
    </SafeAreaView>
  );
}
const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
*/
