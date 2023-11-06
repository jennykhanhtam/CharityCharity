import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-gesture-handler";
import { color } from "react-native-elements/dist/helpers";

export default AddSaving = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <View style={styles.headerBar}>
          <AntDesign
            onPress={() => {
              navigation.navigate("Saving");
            }}
            name="close"
            size={24}
            color="black"
          />
          <Text style={styles.headerText}>Tạo quỹ tiết kiệm mới</Text>
          <Ionicons name="ios-trash" size={24} color="black" />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.name}>
          <Text style={styles.nameText}>Tên</Text>
          <TextInput style={styles.inputName}>
            <Text style={styles.inputText}>Nhập tên sản phẩm</Text>
          </TextInput>
        </View>
        <View style={styles.name}>
          <Text style={styles.nameText}>Mục tiêu</Text>
          <TextInput style={styles.inputGoal}>
            <Text style={styles.inputText}>Nhập số tiền</Text>
          </TextInput>
        </View>
        <View style={styles.name}>
          <Text style={styles.nameText}>Mục tiêu tiết kiệm trên một tháng</Text>
          <TextInput style={styles.inputGoal}>
            <Text style={styles.inputText}>Nhập số tiền</Text>
          </TextInput>
        </View>
        <TouchableOpacity style={styles.emoji}>
          <MaterialIcons name="phone-iphone" size={24} color="black" />
          <Text style={styles.emojiText}>Chọn emoji</Text>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AddSavingSuccess");
        }}
        style={styles.createButton}
      >
        <Text style={styles.createText}>Tạo quỹ</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  body: {
    height: 400,
    width: 390,
    left: 20,
    justifyContent: "space-between",
    gap: 10,
  },
  name: {
    width: 390,
    height: 95,
    alignItems: "flex-start",
    padding: 0,
    flexDirection: "column",
  },
  nameText: {
    width: 240,
    height: 20,
    top: 10,
    fontWeight: 300,
    fontSize: 16,
    lineHeight: 20,
  },
  inputName: {
    width: 390,
    height: 60,
    top: 20,
    borderRadius: 16,
    padding: 16,
    gap: 10,
    backgroundColor: "#F1F1FA",
    borderColor: "gray",
    borderWidth: 1,
  },
  inputText: {
    width: 287,
    height: 20,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 22,
  },
  inputGoal: {
    width: 390,
    height: 60,
    top: 20,
    borderRadius: 16,
    padding: 16,
    gap: 10,
    backgroundColor: "#F5F5F5",
    borderColor: "gray",
    borderWidth: 1,
  },
  emoji: {
    width: 390,
    height: 60,
    top: 20,
    borderRadius: 16,
    padding: 16,
    gap: 10,
    backgroundColor: "#F5F5F5",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
  },
  emojiText: {
    width: 290,
    height: 20,
    top: 2,
    left: 20,
    fontWeight: 300,
    fontSize: 16,
    lineHeight: 20,
  },
  createButton: {
    width: 390,
    height: 60,
    top: 250,
    left: 16,
    borderRadius: 16,
    borderColor: "gray",
    backgroundColor: "#F7C45E",
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
