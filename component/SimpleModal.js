import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";

export default SimpleModal = () => {
  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.textView}>
          <Text style={styles.text}>Sample modal text</Text>
          <Text style={styles.text}>Sample modal description</Text>
        </View>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>Cancle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>OK</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    height: 100,
    paddingTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  text: {
    margin: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  touchableOpacity: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  textView: {
    flex: 1,
    alignItems: "center",
  },
  buttonView: {
    width: "100%",
    flexDirection: "row",
  },
});
