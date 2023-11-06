import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Bottom = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: 370,
        }}
      >
        <View
          style={{ flex: 1, height: 1, backgroundColor: "white", width: 140 }}
        />
        <View>
          <Text
            style={{
              textAlign: "center",
              marginHorizontal: "2%",
              color: "white",
              fontSize: 12,
            }}
          >
            Or
          </Text>
        </View>
        <View
          style={{ flex: 1, height: 1, backgroundColor: "white", width: 140 }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View style={styles.btn}>
          <Image source={require("../storages/google.png")} />
        </View>
        <View style={styles.btn}>
          <Image source={require("../storages/fb.png")} />
        </View>
      </View>
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  btn: {
    borderWidth: 0.8,
    width: 50,
    height: 50,
    borderRadius: 14,
    borderColor: "#DDDADA",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "4%",
    marginTop: "3%",
    backgroundColor: "white",
  },
});
