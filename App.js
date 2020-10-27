import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions, Alert } from "react-native";
import ActionSheet from "./components/actionSheet";

const { width, height } = Dimensions.get("screen");

const Buttons = [
  {
    title: "Call Ramie",
    description: "Call (+233) 0 249948242",
    onPress: () => Alert.alert(`Calling user...`),
    icon: "md-call",
  },
  {
    title: "Send message to Ramie",
    description: "Texting Ramie on (+233) 0 249948242",
    onPress: () => Alert.alert(`Texting user...`),
    icon: "ios-heart",
  },
  {
    title: "FaceTime (audio) Ramie",
    description: "FaceTime on (+233) 0 249948242",
    onPress: () => Alert.alert(`Calling user...`),
    icon: "md-call",
  },
  {
    title: "FaceTime (video) Ramie",
    description: "FaceTime on (+233) 0 249948242",
    onPress: () => Alert.alert(`Calling user...`),
    icon: "md-call",
  },
];
export default function App() {
  return (
    <View style={{ width, height }}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <ActionSheet actionSheetButtons={Buttons} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
});
