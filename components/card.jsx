import React, { Fragment } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const CardComponent = ({ title, description, onPress, icon }) => {
  return (
    <Fragment>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <View style={{ flex: 0.3 }}>
            <Ionicons name={icon} size={24} />
          </View>
          <View style={{ flex: 0.7 }}>
            <Text>{title}</Text>
            <Text>{description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: width / 1.2,
    shadowColor: "#ccc",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.9,
    marginVertical: 10,
    backgroundColor: "#fff",
    padding: 10,
    alignSelf: "center",
  },
});
export default CardComponent;
