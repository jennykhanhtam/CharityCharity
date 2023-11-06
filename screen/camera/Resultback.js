import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Resultback = () => {
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
      <View style={{ marginTop: 200 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: "90%",
            height: 48,
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 20,
            marginTop: 25,
            borderColor: "#F9DC5C",
            borderWidth: 1,
          }}
        >
          <Text style={{ fontSize: 16, color: "#F9DC5C" }}>Chụp lại</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Infor")}
          style={{
            width: "90%",
            height: 48,
            backgroundColor: "#F9DC5C",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 20,
            marginTop: 25,
            borderWidth: 1,
          }}
        >
          <Text style={{ fontSize: 16, color: "black" }}>Dùng ảnh này</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Resultback;

const styles = StyleSheet.create({});
