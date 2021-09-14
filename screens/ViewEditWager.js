import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Button } from "react-native";
//import { globalStyles } from "../styles/global";

export default function ViewEditWager() {
  return (
    <SafeAreaView>
      <Button
        color="blue"
        title="Create new Wager"
        onPress={() => console.log("goodbye")}
      />
    </SafeAreaView>
  );
}
