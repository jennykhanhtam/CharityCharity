import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CardActivity = () => {
  const navigation = useNavigation();
  const card = [
    {
      id: 1,
      title: "Ăn uống",
      content: " Bánh mì sáng",
      money: "- 35.000",
      colorBackground: "#F096D3",
      moneyColor: "#FD3C4A",
      img: require("../storages/home/burger.png"),
    },
    {
      id: 2,
      title: "Lương",
      content: "VP Bank",
      money: "+ 20.000.000",
      colorBackground: "#00A807",
      moneyColor: "#00A807",
      img: require("../storages/home/money.png"),
    },
    {
      id: 3,
      title: "Đi lại",
      content: "Grap",
      money: "- 18.000",
      colorBackground: "#6ABE68",
      moneyColor: "#FD3C4A",
      img: require("../storages/home/moto.png"),
    },
  ];
  return card.map((item, index) => {
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

export default CardActivity;

const styles = StyleSheet.create({});
