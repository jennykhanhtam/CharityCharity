import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Verify = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 60 }}>
      <View style={{ marginHorizontal: "5%" }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            color: "#313131",
            textAlign: "center",
          }}
        >
          Xác minh danh tính
        </Text>
        <Text style={{ marginTop: 25, fontSize: 16, textAlign: "justify" }}>
          Theo{" "}
          <Text style={{ color: "#324EE8", fontWeight: "700" }}>
            Thông tư 23 của Ngân hàng nhà nước
          </Text>
          , tất cả Ví điện tử đang hoạt động phải tiến hành xác thực tài khoản
          ví nhằm tăng cường bảo mật và ngăn chặn các hành vi gian lận trong
          thanh toán.
        </Text>
        <Text style={{ marginTop: 30, textAlign: "justify", fontSize: 16 }}>
          Một bước duy nhất để xác minh danh tính của bạn, chụp ảnh 2 mặt
          CMND/CCCD hợp lệ.
        </Text>
      </View>

      <View style={{ marginTop: 50, alignSelf: "center" }}>
        <Image
          source={require("../storages/license.png")}
          style={{ width: 320, height: 195 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginTop: 180,
        }}
      >
        <SimpleLineIcons name="lock" size={20} color="#324EE8" />
        <Text style={{ width: 350, textAlign: "justify" }}>
          Mọi hình ảnh của bạn sẽ được mã hóa, lưu trữ an toàn, và chỉ dùng với
          mục đích duy nhất để xác minh danh tính của bạn
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Camerafront")}
        style={{
          width: "90%",
          height: 48,
          backgroundColor: "#324EE8",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          borderRadius: 20,
          marginTop: 25,
        }}
      >
        <Text style={{ fontSize: 16, color: "#FFFFFF" }}>Chụp ảnh</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Verify;

const styles = StyleSheet.create({});
