import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import { listmini } from "../../data/listmini";
import { member } from "../../data/member";

const FundMember = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = () => {
    setModalVisible(true);
  };

  const handleCancelDelete = () => {
    setModalVisible(false);
  };
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
            width: 358,
            height: 256,
            backgroundColor: "#3B82F6",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 18,
            borderRadius: 24,
          }}
        >
          {listmini.map((items, index) => {
            const [isChecked, setIsChecked] = useState(items.item);
            return (
              <View
                key={index}
                style={{
                  width: 326,
                  height: 68,
                  backgroundColor: "#DBEAFE",
                  borderRadius: 23,
                  marginTop: 13,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                    paddingVertical: 16,
                    alignItems: "center",
                    backgroundColor: isChecked ? "#DBEAFE" : undefined,
                    borderRadius: 23,
                  }}
                >
                  <TouchableOpacity
                    onPress={handleModal}
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <Image source={items.img} />
                    <Text
                      style={{
                        fontWeight: "500",
                        fontSize: 16,
                        color: "#1F2937",
                        marginLeft: 20,
                      }}
                    >
                      {items.name}
                    </Text>
                  </TouchableOpacity>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setIsChecked}
                    color={isChecked ? "#3B82F6" : undefined}
                  />
                </View>
              </View>
            );
          })}
        </View>

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
        <View style={{ alignSelf: "center" }}>
          {member.map((items, index) => {
            const [isChecked, setIsChecked] = useState(items.item);
            return (
              <View
                key={index}
                style={{
                  width: 332,
                  height: 60,
                  backgroundColor: "rgba(249, 220, 92, 0.3)",
                  borderRadius: 23,
                  marginTop: 13,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                    paddingVertical: 16,
                    alignItems: "center",
                    borderRadius: 23,
                  }}
                >
                  <TouchableOpacity
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <Image
                      source={items.img}
                      style={{ width: 32, height: 32 }}
                    />
                    <Text
                      style={{
                        fontWeight: "500",
                        fontSize: 16,
                        color: "#1F2937",
                        marginLeft: 16,
                      }}
                    >
                      {items.name}
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: "rgba(195, 195, 195, 0.3)",
                      width: 124,
                      height: 32,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 40,
                    }}
                  >
                    <Text>{items.money}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate("UpdateFund")}
      >
        <Text style={styles.createText}>Cập nhật quỹ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FundMember;

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
    marginTop: "auto",
    marginBottom: 50,
    borderRadius: 100,
    borderColor: "gray",
    backgroundColor: "#F7C45E",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  createText: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 30,

    color: "#313131",
  },
});
