import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DoneMonth = () => {
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
      money: "600.000đ",
    },
  ];
  return (
    <View style={{ paddingBottom: 150 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#324EE8",
          height: 120,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          style={{ right: 60, marginTop: 20 }}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "500",
            marginTop: 20,
          }}
        >
          Thu nhập cố định/tháng
        </Text>
      </View>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../storages/monthfund/circle.png")}
            style={{ position: "absolute", marginTop: 10 }}
          />
          <View style={{ alignItems: "center", marginTop: 99 }}>
            <Text style={{ width: 70, textAlign: "center" }}>
              Còn lại của 100%
            </Text>
            <Text style={{ fontWeight: "700", fontSize: 22 }}>7.000.000</Text>
          </View>
        </View>
        <View style={{ marginTop: 135 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
              alignSelf: "center",
              height: 60,
              backgroundColor: "rgba(195, 195, 195, 0.3)",
              borderRadius: 20,
              marginTop: 20,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", marginLeft: 14.4 }}
              >
                Ngân sách dự chi
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
              <Text>3.600/7.000.000đ</Text>
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
                    <Image
                      source={item.img}
                      style={{ width: 32, height: 32 }}
                    />
                  </View>

                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      marginLeft: 14.4,
                    }}
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
              marginTop: 20,
              width: "85%",
              alignSelf: "center",
              height: 98,
              backgroundColor: "#FFCAD4",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "80%",
                marginBottom: 5,
              }}
            >
              <AntDesign name="checkcircle" size={16} color="#324EE8" />
              <Text style={{ marginLeft: 8, fontSize: 16, fontWeight: "700" }}>
                Tháng mới, ngân sách mới!
              </Text>
            </View>
            <Text
              style={{
                width: "80%",
                fontSize: 16,
                color: "#828282",
                textAlign: "justify",
              }}
            >
              Tháng này cố gắng chi tiêu hợp lý và tiết kiệm bạn nhé.
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              width: "85%",
              alignSelf: "center",
              height: 54,
              backgroundColor: "rgba(255, 202, 212, 0.37)",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "300", marginRight: 100 }}
              >
                Còn lại cho 23 ngày
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "400" }}>
                7.000.000đ
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              width: "85%",
              alignSelf: "center",
              height: 83,
              backgroundColor: "rgba(255, 202, 212, 0.37)",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "300", marginRight: 100 }}
              >
                Còn lại cho 23 ngày
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "400" }}>
                7.000.000đ
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
              }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "300", marginRight: 110 }}
              >
                Tối đa cho mỗi ngày
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "400" }}>304.347đ</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: "90%",
            height: 48,
            backgroundColor: "#F9DC5C",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 20,
            marginTop: 30,
          }}
          onPress={() => navigation.replace("Tabs")}
        >
          <Text style={{ fontSize: 16, color: "#313131" }}>Xong</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DoneMonth;

const styles = StyleSheet.create({});
