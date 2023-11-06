import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CardActivity from "../component/CardActivity";
import CardDetail from "../component/CardDetail";

const DetailStatistical = () => {
  const navigation = useNavigation();
  const datas = [
    {
      id: 1,
      title: "Tháng 4",
    },
    {
      id: 2,
      title: "Tất cả",
    },
    {
      id: 3,
      title: "<2tr vnđ",
    },
  ];
  const renderItem = ({ item }) => (
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
        marginHorizontal: 20,
      }}
    >
      <AntDesign
        name="down"
        size={16}
        color="#7F3DFF"
        style={{ marginRight: 4 }}
      />
      <Text>{item.title}</Text>
    </View>
  );
  return (
    <ScrollView>
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
          Ăn uống
        </Text>
      </View>

      <View style={{ marginTop: 30, alignSelf: "center", height: 50 }}>
        <FlatList
          horizontal
          data={datas}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>

      <Text
        style={{
          textAlign: "center",
          fontWeight: "300",
          color: "#828282",
          marginTop: 20,
        }}
      >
        tổng khoản chi
      </Text>
      <Text
        style={{
          fontSize: 40,
          color: "#324EEB",
          textAlign: "center",
          fontWeight: "700",
          marginTop: 10,
        }}
      >
        6.750.000đ
      </Text>
      <View>
        <Text
          style={{
            fontSize: 20,
            color: "#292B2D",
            fontWeight: "500",
            marginLeft: 27,
            marginTop: 24,
          }}
        >
          29/4/2023
        </Text>
      </View>
      <View style={{ alignSelf: "center", marginTop: 20 }}>
        <CardDetail />
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            color: "#292B2D",
            fontWeight: "500",
            marginLeft: 27,
            marginTop: 24,
          }}
        >
          28/4/2023
        </Text>
      </View>
      <View style={{ alignSelf: "center", marginTop: 20 }}>
        <CardDetail />
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            color: "#292B2D",
            fontWeight: "500",
            marginLeft: 27,
            marginTop: 24,
          }}
        >
          27/4/2023
        </Text>
      </View>
      <View style={{ alignSelf: "center", marginTop: 20 }}>
        <CardDetail />
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            color: "#292B2D",
            fontWeight: "500",
            marginLeft: 27,
            marginTop: 24,
          }}
        >
          26/4/2023
        </Text>
      </View>
      <View style={{ alignSelf: "center", marginTop: 20 }}>
        <CardDetail />
      </View>
    </ScrollView>
  );
};

export default DetailStatistical;

const styles = StyleSheet.create({});
