import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Button } from "react-native";
import CreateWager from "./CreateWager";
import ViewEditWager from "./ViewEditWager";
//import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const CreateWagerHandler = () => {
    navigation.push("Create Wager");
  };
  const ViewEditWagerHandler = () => {
    navigation.push("View and Edit Wagers");
  };

  return (
    <SafeAreaView>
      <Button
        color="blue"
        title="Create new Wager"
        onPress={CreateWagerHandler}
      />
      <Button
        title="View and Edit Wager"
        color="blue"
        onPress={ViewEditWagerHandler}
      />
    </SafeAreaView>
  );
}
