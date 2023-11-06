import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AddFund = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <View style={styles.header}>
        <View style={styles.headerBar}>
          <AntDesign
            onPress={() => {
              navigation.navigate("Fund");
            }}
            name="close"
            size={24}
            color="black"
          />
          <Text style={styles.headerText}>Tạo quỹ tiết kiệm mới</Text>
          <Ionicons name="ios-trash" size={24} color="black" />
        </View>
      </View>
      <View style={{ marginHorizontal: 27, alignSelf: "center" }}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "300", color: "#828282" }}>
            Tên
          </Text>

          <TextInput
            style={{
              width: 370,
              height: 56,
              backgroundColor: "rgba(241, 241, 250, 1)",
              borderRadius: 16,
              padding: 20,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 1,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddMember")}
          style={{
            height: 62,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            justifyContent: "space-between",
            marginTop: 25,
            borderColor: "#828282",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "300", color: "#828282" }}>
            Thêm thành viên
          </Text>
          <AntDesign name="plus" size={24} color="#828282" />
        </TouchableOpacity>
        <View
          style={{
            height: 62,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            justifyContent: "space-between",
            marginTop: 25,
            borderColor: "#828282",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "300", color: "#828282" }}>
            Thêm khoản chi chung
          </Text>
          <AntDesign name="plus" size={24} color="#828282" />
        </View>
      </View>
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createText}>Tạo quỹ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddFund;

const styles = StyleSheet.create({
  header: {
    width: 430,
    height: 70,
    padding: 16,
    gap: 64,
  },
  headerBar: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerText: {
    width: 247,
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 25,
    left: 30,
  },
  createButton: {
    width: 390,
    height: 60,
    top: 400,
    borderRadius: 16,
    borderColor: "gray",
    backgroundColor: "#F7C45E",
    alignSelf: "center",
  },
  createText: {
    width: 72,
    height: 30,
    top: 13,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 30,
    alignSelf: "center",
    color: "#313131",
  },
});
