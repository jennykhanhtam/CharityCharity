import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Octicons,
  Ionicons,
  SimpleLineIcons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import CardSaving from "../component/CardSaving";
import FundCard from "../component/FundCard";
import { card } from "../data/fundcard";

export default Fund = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View>
        <View
          style={{
            backgroundColor: "#FFCAD4",
            width: "100%",
            height: 507,
            borderRadius: 20,
          }}
        >
          <View style={{ alignItems: "center", marginTop: 83 }}>
            <Text style={{ fontSize: 16, color: "#91919F", height: 22 }}>
              Tổng thu nhập
            </Text>
            <Text
              style={{
                fontSize: 40,
                color: "#161719",
                fontWeight: "500",
                height: 60,
              }}
            >
              120.000.000
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 323,
              backgroundColor: "#313131",
              marginTop: 18,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                width: "90%",
                height: 190,
                backgroundColor: "#F4F7FF",
                borderRadius: 20,
                alignSelf: "center",
                marginTop: 24,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "45%",
                  height: 170,
                  backgroundColor: "#F7C45E",
                  borderRadius: 20,
                  alignItems: "center",
                }}
              >
                <Feather
                  name="plus-square"
                  size={24}
                  color="black"
                  style={{
                    alignSelf: "flex-end",
                    marginTop: 10,
                    marginRight: 10,
                  }}
                />
                <Text style={{ fontSize: 16, height: 22 }}>Khoản thu</Text>
                <Text
                  style={{
                    fontSize: 27,
                    color: "#161719",
                    fontWeight: "700",
                    height: 41,
                  }}
                >
                  25.000.000
                </Text>
                <View
                  style={{
                    backgroundColor: "rgba(244, 247, 255, 1)",
                    width: "100%",
                    height: 55,
                    borderRadius: 16,
                    marginTop: 18,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image source={require("../storages/icon/income.png")} />
                  <Text style={{ marginTop: 12, marginLeft: 19, fontSize: 16 }}>
                    Tháng 6
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "45%",
                  height: 170,
                  backgroundColor: "#324EE8",
                  borderRadius: 20,
                  alignItems: "center",
                }}
              >
                <Feather
                  name="edit"
                  size={24}
                  color="white"
                  style={{
                    alignSelf: "flex-end",
                    marginTop: 10,
                    marginRight: 10,
                  }}
                />
                <Text style={{ fontSize: 16, height: 22, color: "white" }}>
                  Khoản thu
                </Text>
                <Text
                  style={{
                    fontSize: 27,
                    color: "white",
                    fontWeight: "700",
                    height: 41,
                  }}
                >
                  25.000.000
                </Text>
                <View
                  style={{
                    backgroundColor: "rgba(244, 247, 255, 1)",
                    width: "100%",
                    height: 55,
                    borderRadius: 16,
                    marginTop: 18,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image source={require("../storages/icon/fund.png")} />
                  <Text
                    style={{
                      marginTop: 12,
                      marginLeft: 19,
                      fontSize: 16,
                      color: "#324EE8",
                    }}
                  >
                    Tháng 6
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginHorizontal: 30,
                marginTop: 15,
              }}
            >
              <TouchableOpacity style={{ alignItems: "center" }}>
                <Image source={require("../storages/icon/bill.png")} />
                <Text
                  style={{ color: "#FFFFFF", width: 70, textAlign: "center" }}
                >
                  Lập nhóm chia bill
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: "center" }}>
                <Image source={require("../storages/icon/save.png")} />
                <Text
                  style={{ color: "#FFFFFF", width: 70, textAlign: "center" }}
                >
                  Tiết kiệm
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: "center" }}>
                <Image source={require("../storages/icon/history.png")} />
                <Text
                  style={{ color: "#FFFFFF", width: 70, textAlign: "center" }}
                >
                  Lập nhóm chia bill
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{ alignSelf: "center" }}>
        {card.slice(1).map((item, index) => {
          return (
            <View
              key={index}
              style={{
                width: 336,
                height: 155,
                backgroundColor: item.color,
                borderRadius: 35,
                justifyContent: "center",
                marginTop: 15,
              }}
            >
              <View style={{ marginHorizontal: "4%", marginVertical: "5%" }}>
                <Text
                  style={{
                    fontWeight: "900",
                    fontSize: 18,
                    marginBottom: "3%",
                  }}
                >
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
                  <Text
                    style={{ color: "white", fontSize: 12, fontWeight: "700" }}
                  >
                    {item.members}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
      <View
        style={{
          width: 336,
          height: 89,
          backgroundColor: "#BFA8FF",
          borderRadius: 24,
          justifyContent: "center",
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            height: 60,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginHorizontal: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image source={require("../storages/fund/room.png")} />
            <View
              style={{
                justifyContent: "space-between",
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 16, color: "white" }}>Quỹ phòng</Text>
              <Text style={{ fontWeight: "300", color: "white" }}>
                Thêm quỹ phòng
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("AddFund")}>
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
