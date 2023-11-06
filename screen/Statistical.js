import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { satis } from "../data/satis";
import { useNavigation } from "@react-navigation/native";

export default Statistical = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingBottom: 200,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <View
        style={{
          backgroundColor: "#FFCAD4",
          width: "100%",
          height: 199,
          borderRadius: 20,
        }}
      >
        <View
          style={{
            width: "97%",
            height: 240,
            backgroundColor: "#313131",
            marginTop: 18,
            borderRadius: 20,
            alignSelf: "center",
            marginTop: 83,
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
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginTop: "35%",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "500", color: "#292B2D" }}>
          Thống kê
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: "grey",
            width: 95,
            height: 40,
            borderRadius: 40,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign
            name="down"
            size={16}
            color="#7F3DFF"
            style={{ marginRight: 4 }}
          />
          <Text>Tháng</Text>
        </View>
      </View>
      <View>
        <Image
          source={require("../storages/img-chart.png")}
          style={{
            width: "92%",
            height: 300,
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: 350,
          height: 46,
          borderRadius: 32,
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#F1F1FA",
            width: 350,
            height: 46,
            borderRadius: 32,
            justifyContent: "center",
          }}
        >
          <Text style={{ marginLeft: "20%", fontSize: 20, fontWeight: "300" }}>
            Thu
          </Text>
        </View>

        <View
          style={{
            position: "absolute",
            width: 171,
            height: 40,
            backgroundColor: "#324EE8",
            borderRadius: 32,
            marginLeft: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 500, color: "white" }}>
            Chi
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 20, alignSelf: "center" }}>
        {satis.map((data, index) => {
          return (
            <View
              key={index}
              style={{
                width: 350,
                height: 60,
                borderRadius: 20,
                borderColor: "rgba(50, 78, 232, 0.5)",
                borderWidth: 2,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 12,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={data.img}
                  style={{
                    backgroundColor: data.color,
                    borderRadius: 20,
                    marginLeft: 15,
                    marginRight: 16,
                  }}
                />
                <View>
                  <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    {data.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "300",
                      color: "#C3C3C3",
                    }}
                  >
                    {data.trade}
                  </Text>
                </View>
              </View>

              <View style={{ marginRight: 19 }}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>
                  {data.money}
                </Text>
                <Text
                  style={{
                    marginLeft: "auto",
                    fontSize: 12,
                    fontWeight: "300",
                    color: "#C3C3C3",
                  }}
                >
                  {data.per}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("AllStatistical")}
        style={{
          width: "90%",
          height: 56,
          backgroundColor: "#F9DC5C",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          borderRadius: 20,
          marginTop: 25,
          marginBottom: 50,
        }}
      >
        <Text style={{ fontSize: 20, color: "#313131", fontWeight: "500" }}>
          Xác nhận
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
