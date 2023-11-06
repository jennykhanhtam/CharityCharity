import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { card1 } from "../data/card1";

const CardDetail = () => {
  const navigation = useNavigation();

  return card1.map((item, index) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("HistoryExchange")}
        key={index}
        style={{
          marginTop: 12,
          width: 370,
          height: 89,
          backgroundColor: "rgba(50, 78, 232, 0.05)",
          borderRadius: 24,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 66,
                height: 66,
                backgroundColor: item.colorBackground,
                borderRadius: 40,
              }}
            >
              <Image source={item.img} style={{ width: 66, height: 66 }} />
            </View>

            <View style={{ marginLeft: 10 }}>
              <Text
                style={{ fontSize: 16, color: "#292B2D", marginBottom: 10 }}
              >
                {item.title}
              </Text>
              <Text style={{ fontWeight: "300", color: "#91919F" }}>
                {item.content}
              </Text>
            </View>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text
              style={{ marginBottom: 10, fontSize: 16, color: item.moneyColor }}
            >
              {item.money}đ
            </Text>
            <Text style={{ color: "#91919F" }}>Hôm nay</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  });
};

export default CardDetail;

const styles = StyleSheet.create({});
