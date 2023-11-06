import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MonthlyBudget = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      title: "Ăn uống",
      color: "#F096D3",
      img: require("../../storages/monthfund/img1.png"),
      money: "3.000.000đ",
    },
    {
      id: 2,
      title: "Đi lại",
      color: "#6ABE68",
      img: require("../../storages/monthfund/img2.png"),
      money: "0đ",
    },
    {
      id: 3,
      title: "Dịch vụ sinh hoạt",
      color: "#FF724D",
      img: require("../../storages/monthfund/img3.png"),
      money: "0đ",
    },
    {
      id: 4,
      title: "Phát triển bản thân",
      color: "#F9DC5C",
      img: require("../../storages/monthfund/img4.png"),
      money: "0đ",
    },
    {
      id: 5,
      title: "Trang phục",
      color: "#FF87AB",
      img: require("../../storages/monthfund/img5.png"),
      money: "0đ",
    },
  ];
  return (
    <View
      style={{
        backgroundColor: "#324EE8",
        height: "100%",
        position: "absolute",
        width: "100%",
      }}
    >
      <View
        style={{
          paddingTop: 60,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          style={{ right: 60 }}
          onPress={() => navigation.goBack()}
        />
        <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
          Thu nhập cố định/tháng
        </Text>
      </View>
      <View style={{ marginTop: 50, marginHorizontal: "8%" }}>
        <View>
          <Text
            style={{
              fontSize: 20,
              color: "#FFFFFF",
              fontWeight: "500",
              textAlign: "justify",
            }}
          >
            Bạn có thể đặt một số giới hạn chi phí cho từng danh mục
          </Text>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text
            style={{
              fontSize: 16,
              color: "#FFFFFF",
              fontWeight: "300",
              textAlign: "justify",
            }}
          >
            Chúng tôi đã chọn 5 danh mục chi phí phổ biến hàng đầu. Bạn có thể
            giới hạn nhiều danh mục hơn.
          </Text>
        </View>
      </View>
      {data.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
              alignSelf: "center",
              height: 60,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              marginTop: 20,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 32,
                  height: 32,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: item.color,
                  borderRadius: 20,
                  marginLeft: 8.5,
                }}
              >
                <Image source={item.img} style={{ width: 32, height: 32 }} />
              </View>

              <Text
                style={{ fontSize: 16, fontWeight: "500", marginLeft: 14.4 }}
              >
                {item.title}
              </Text>
            </View>

            <View
              style={{
                marginRight: 10,
                backgroundColor: "#C3C3C34D",
                padding: 8,
                paddingHorizontal: 20,
                borderRadius: 20,
              }}
            >
              <Text>{item.money}</Text>
            </View>
          </View>
        );
      })}
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginHorizontal: "7%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 44,
            height: 44,
            backgroundColor: "#FFFFFF",
            borderRadius: 34,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={require("../../storages/monthfund/plus.png")} />
        </View>
        <Text style={{ color: "#FFFFFF", marginLeft: 8, fontSize: 16 }}>
          Thêm danh mục
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: "90%",
          height: 48,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          borderRadius: 20,
          marginTop: 40,
          borderColor: "#F9DC5C",
          borderWidth: 1,
        }}
      >
        <Text style={{ fontSize: 16, color: "#F9DC5C" }}>Bỏ qua</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "90%",
          height: 48,
          backgroundColor: "#F9DC5C",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          borderRadius: 20,
          marginTop: 15,
        }}
        onPress={() => navigation.navigate("DoneMonth")}
      >
        <Text style={{ fontSize: 16, color: "#313131" }}>Xong</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MonthlyBudget;

const styles = StyleSheet.create({});
