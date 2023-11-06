import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Cameraback = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      <View
        style={{
          marginTop: 48,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AntDesign
          name="left"
          size={24}
          color="#F9DC5C"
          style={{ position: "relative", right: 40 }}
        />
        <Text
          style={{
            color: "#C3C3C3",
            fontSize: 20,
            fontWeight: "500",
          }}
        >
          Chụp mặt sau CMND/CCCD
        </Text>
      </View>
      <View style={{ marginHorizontal: 25 }}>
        <Text
          style={{
            color: "#C3C3C3",
            marginTop: 30,
            textAlign: "center",
          }}
        >
          Hãy thực hiện xác thực giấy tờ tùy thân để đảm bảo an toàn cho tài
          khoản của bạn ở mức cao nhất.
        </Text>
      </View>
      <View
        style={{
          width: 320,
          height: 210,
          backgroundColor: "#C3C3C3",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          alignSelf: "center",
          marginTop: 100,
        }}
      >
        <Image
          source={require("../../storages/cmnd.png")}
          style={{ width: 321, height: 206 }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Resultback")}
        style={{
          width: 80,
          height: 80,
          backgroundColor: "#D9D9D980",
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          marginTop: 250,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: "#FFFFFF",
            width: 62,
            height: 62,
            borderRadius: 50,
          }}
        ></View>
      </TouchableOpacity>
    </View>
  );
};

export default Cameraback;

const styles = StyleSheet.create({});
