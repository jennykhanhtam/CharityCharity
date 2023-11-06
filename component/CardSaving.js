import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const CardSaving = () => {
  const navigation = useNavigation();
  const card = [
    {
      id: 1,
      title: "Macbook Pro M1",
      moneyfirst: "12.000.000",
      moneytotal: "24.000.000",
      colorprogress: "#E0533D",
      progress: 0.5,
    },
    {
      id: 2,
      title: "Đi Thái Lan",
      moneyfirst: "4.000.000",
      moneytotal: "7.000.000",
      colorprogress: "#00A807",
      progress: 0.8,
    },
  ];
  return card.map((item) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          navigation.navigate("FundDetail");
        }}
        style={{
          width: 160,
          height: 100,
          marginRight: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 10,
          }}
        >
          <View>
            <Text style={{ fontSize: 12, color: "#707070" }}>{item.title}</Text>
            <Text style={{ fontSize: 16, marginVertical: 3 }}>
              {item.moneyfirst}đ
            </Text>
            <Text style={{ fontSize: 12, color: "#C3C3C3" }}>
              {item.moneytotal}đ
            </Text>
          </View>
          <AntDesign name="right" size={20} color="black" />
        </View>
        <Progress.Bar
          color={item.colorprogress}
          unfilledColor="rgba(206, 223, 188, 0.4)"
          borderColor="rgba(206, 223, 188, 0.4)"
          progress={item.progress}
          width={140}
          style={{ alignSelf: "center", marginTop: 10 }}
        />
      </TouchableOpacity>
    );
  });
};

export default CardSaving;

const styles = StyleSheet.create({});
