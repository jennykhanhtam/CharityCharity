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
import { satis } from "../data/satis";
import { useNavigation } from "@react-navigation/native";

const AllStatistical = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 60,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={30}
          color="black"
          style={{ marginLeft: 16 }}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            textAlign: "center",
            marginLeft: "29%",
            fontSize: 20,
            fontWeight: "500",
          }}
        >
          Khoản chi
        </Text>
      </View>
      <View style={{ alignSelf: "center", marginTop: 70 }}>
        <Image source={require("../storages/circle-chart.png")} />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: 350,
          height: 46,
          borderRadius: 32,
          alignItems: "center",
          alignSelf: "center",
          marginTop: 40,
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
      <View style={{ marginTop: 20, alignSelf: "center", marginBottom: 50 }}>
        {satis.map((data, index) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("DetailStatistical")}
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
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default AllStatistical;

const styles = StyleSheet.create({});
