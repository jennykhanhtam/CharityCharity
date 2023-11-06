import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import CardActivity from "../component/CardActivity";

export default Exchange = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.month}>
          <SimpleLineIcons
            style={styles.monthIcon}
            name="arrow-down"
            size={20}
            color="#7F3DFF"
          />
          <Text style={styles.monthText}>Tháng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter}>
          <Ionicons
            style={styles.filterIcon}
            name="filter-outline"
            size={30}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.exchangeReport}>
        <Text style={styles.exchangeReportText}>
          Xem báo cáo giao dịch của bạn
        </Text>
        <SimpleLineIcons
          style={styles.exchangeReportIcon}
          name="arrow-right"
          size={20}
          color="#FFF"
        />
      </TouchableOpacity>
      <View style={styles.exchangeHistory}>
        <Text style={styles.exchangeHistoryText}>Hôm nay</Text>
        <TouchableOpacity style={styles.exchangeHistoryButton}>
          <Text style={styles.exchangeHistoryButtonText}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignSelf: "center" }}>
        <CardActivity />
      </View>
      <View style={styles.exchangeHistory}>
        <Text style={styles.exchangeHistoryText}>Hôm qua</Text>
        <TouchableOpacity style={styles.exchangeHistoryButton}>
          <Text style={styles.exchangeHistoryButtonText}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignSelf: "center", paddingBottom: 70 }}>
        <CardActivity />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  month: {
    flexDirection: "row",
  },
  monthIcon: {
    marginLeft: 10,
    marginRight: 10,
  },
  monthText: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 18,
    top: 3,
  },
  exchangeReport: {
    flexDirection: "row",
    marginHorizontal: 16,
    width: 400,
    height: 50,
    backgroundColor: "#324EE8",
    borderRadius: 8,
    justifyContent: "space-between",
  },
  exchangeReportText: {
    fontSize: 16,
    marginTop: 15,
    marginLeft: 16,
    color: "#FFF",
  },
  exchangeReportIcon: {
    marginTop: 15,
    marginRight: 10,
  },
  exchangeHistory: {
    width: 400,
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginLeft: 16,
    marginTop: 16,
  },
  exchangeHistoryText: {
    fontSize: 20,
    fontWeight: 500,
  },
  exchangeHistoryButton: {
    backgroundColor: "rgba(195, 195, 195, 0.30)",
    width: 90,
    height: 25,
    borderRadius: 40,
  },
  exchangeHistoryButtonText: {
    marginLeft: 11,
    marginTop: 5,
    fontWeight: 300,
    lineHeight: 16,
  },
  exchange: {
    width: 380,
    height: 90,
    marginLeft: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  exchangeLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  exchangeLeftText: {
    marginLeft: 10,
    height: 70,
    alignItems: "flex-start",
  },
  exchangeLeftTextUp: {
    fontSize: 16,
    fontWeight: 500,
    color: "#292B2D",
    marginBottom: 10,
    marginTop: 8,
  },
  exchangeLeftTextDown: {
    fontWeight: 300,
    color: "#91919F",
  },
  exchangeRight: {
    height: 70,
    alignItems: "flex-start",
  },
  exchangeRightUp: {
    fontSize: 16,
    lineHeight: 18,
    color: "#FD3C4A",
    marginBottom: 10,
    marginRight: 10,
    marginTop: 8,
  },
  exchangeRightDown: {
    fontWeight: 300,
    color: "#91919F",
    marginLeft: 10,
  },
  exchangeRightUpText: {
    fontSize: 16,
    lineHeight: 18,
    color: "#00A807",
    marginBottom: 10,
    marginTop: 8,
    marginRight: 10,
  },
  exchangeRightDownText: {
    fontWeight: 300,
    color: "#91919F",
    marginLeft: 45,
  },
});
