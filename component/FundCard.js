import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { card } from "../data/fundcard";
import { useNavigation } from "@react-navigation/native";

const FundCard = () => {
  const navigation = useNavigation();
  return card.map((item, index) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("FundMember", {
            title: item.title,
            members: item.members,
          })
        }
        key={index}
        style={{
          width: 370,
          height: 155,
          backgroundColor: item.color,
          borderRadius: 35,
          justifyContent: "center",
          marginTop: 15,
        }}
      >
        <View style={{ marginHorizontal: "4%", marginVertical: "5%" }}>
          <Text style={{ fontWeight: "900", fontSize: 18, marginBottom: "3%" }}>
            {item.title}
          </Text>
          <Text style={{ fontWeight: "300" }}>
            Ngân sách còn:{" "}
            <Text style={{ fontWeight: "700" }}>{item.money}đ</Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: "4%",
          }}
        >
          <Image source={require("../storages/home/groupavt.png")} />
          <View
            style={{
              width: 101,
              height: 40,
              backgroundColor: "#000000",
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 12, fontWeight: "700" }}>
              {item.members}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  });
};

export default FundCard;

const styles = StyleSheet.create({});
