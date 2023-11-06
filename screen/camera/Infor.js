import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Infor = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 60 }}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "500", textAlign: "center" }}>
          Xác nhận thông tin
        </Text>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 40 }}>
        <View>
          <Text style={styles.label}>CCCD</Text>
          <Text style={styles.text}>00000000000</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.label}>HỌ VÀ TÊN</Text>
          <Text style={styles.text}>Nguyễn Minh Thảo</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.label}>NGÀY THÁNG NĂM SINH</Text>
          <Text style={styles.text}>10/01/1998</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.label}>QUỐC TỊCH</Text>
          <Text style={styles.text}>Việt Nam</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.label}>NGÀY CẤP</Text>
          <Text style={styles.text}>09/05/2021</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.label}>NƠI CẤP</Text>
          <Text style={styles.text}>
            CỤC TRƯỞNG CỤC CẢNH SÁT QUẢN LÝ HÀNH CHÍNH VỀ TRẬT TỰ XÃ HỘI
          </Text>
        </View>
      </View>
      <TouchableOpacity style={{ marginTop: 250, alignSelf: "center" }}>
        <Text style={{ color: "#324EE8" }}>
          Thông tin chưa chính xác? Chụp lại hình
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("AddMoney")}
        style={{
          width: "90%",
          height: 48,
          backgroundColor: "#F9DC5C",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          borderRadius: 20,
          marginTop: 25,
        }}
      >
        <Text style={{ fontSize: 16, color: "#313131" }}>Xác nhận</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Infor;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: "#C3C3C3",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#313131",
  },
});
