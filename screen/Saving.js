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

const Saving = () => {
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
          <View style={{ alignItems: "center", marginTop: 70 }}>
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
              style={{ alignSelf: "flex-start", marginLeft: 20 }}
              onPress={() => navigation.goBack()}
            />
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
                  Lập nhóm chia bill
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
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: "7%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 500 }}>Tiết kiệm</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(195, 195, 195, 0.3)",
            width: 98,
            height: 32,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 40,
          }}
        >
          <Text style={{ color: "#828282", fontWeight: "300" }}>
            Xem tất cả
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={{ marginTop: 15, marginHorizontal: 40 }}>
        <CardSaving />
      </ScrollView>

      <View style={styles.providentFund}>
        <View style={styles.providentFundCircle}>
          <Image
            style={styles.providentFundImage}
            source={require("../storages/icon/burger.png")}
          />
        </View>
        <View style={styles.providentFundComponent}>
          <Text style={styles.providentFundText}>Quỹ tiết kiệm</Text>
          <Text style={styles.providentFundAddText}>Thêm quỹ tiết kiệm</Text>
        </View>
        <TouchableOpacity>
          <AntDesign
            onPress={() => {
              navigation.navigate("AddSaving");
            }}
            style={styles.providentFundIcon}
            name="plus"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Saving;

const styles = StyleSheet.create({
  providentFund: {
    marginTop: 20,
    width: 380,
    borderRadius: 24,
    backgroundColor: "#FF724D",
    height: 90,
    left: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  providentFundCircle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#212325",
    marginLeft: 18,
  },
  providentFundImage: {
    alignItems: "center",
    justifyContent: "center",
    bottom: 3,
    right: 2,
  },
  providentFundComponent: {
    width: 120,
    height: 60,
    justifyContent: "space-between",
    gap: 11,
    left: -25,
  },
  providentFundText: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 22,
    color: "#FFF",
    marginBottom: 5,
    width: 100,
  },
  providentFundAddText: {
    ontStyle: "normal",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: 18,
    color: "#FFF",
    width: 130,
  },
  providentFundIcon: {
    marginRight: 45,
  },
});
