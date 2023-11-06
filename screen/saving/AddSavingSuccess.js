import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default AddSavingSuccess = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Quỹ tiết kiệm được tạo thành công!
        </Text>
      </View>
      <View style={styles.image}>
        <Image
          style={styles.imageBody}
          source={require("../../storages/fund/success.png")}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Đạt mục tiêu quỹ tiết kiệm bằng cách thường xuyên theo dõi bảng thống
          kê
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AddSaving");
        }}
        style={styles.createButton}
      >
        <Text style={styles.createText}>Tạo quỹ mới</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SavingDetail");
        }}
        style={styles.viewButton}
      >
        <Text style={styles.viewText}>Xem thống kê</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignSelf: "center",
    top: 20,
    left: 10,
  },
  headerText: {
    color: "#E0533D",
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 30,
  },
  image: {
    width: 300,
    height: 485,
    top: 30,
    left: 65,
    alignItems: "center",
  },
  footer: {
    width: 380,
    top: 50,
    height: 50,
    alignSelf: "center",
  },
  footerText: {
    textAlign: "center",
    color: "#313131",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 22,
  },
  createButton: {
    width: 380,
    height: 60,
    top: 80,
    left: 20,
    borderRadius: 16,
    borderColor: "gray",
    backgroundColor: "#F7C45E",
  },
  createText: {
    width: 150,
    height: 30,
    top: 13,
    left: 20,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 30,
    alignSelf: "center",
    color: "#313131",
  },
  viewButton: {
    width: 380,
    height: 60,
    top: 100,
    left: 20,
    borderRadius: 16,
    borderColor: "#F7C45E",
    borderWidth: 1.5,
    backgroundColor: "#F5F5F5",
  },
  viewText: {
    width: 150,
    height: 30,
    top: 13,
    left: 20,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 30,
    alignSelf: "center",
    color: "#313131",
  },
});
