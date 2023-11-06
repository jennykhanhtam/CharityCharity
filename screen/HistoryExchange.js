import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HistoryExchange = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [notiVisibale, setNotiVisible] = useState(false);

  const handleModal = () => {
    setModalVisible(true);
  };

  const handleCancelDelete = () => {
    setModalVisible(false);
  };

  const handleNoti = () => {
    setModalVisible(false);
    setNotiVisible(true);
  };

  const handleCloseNoti = () => {
    setNotiVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 282,
          backgroundColor: "#FD3C4A",
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 60,
            justifyContent: "space-around",
          }}
        >
          <AntDesign
            onPress={() => navigation.goBack()}
            name="arrowleft"
            size={24}
            color="#FFFFFF"
          />
          <Text style={{ fontSize: 18, color: "#FFFFFF", fontWeight: "600" }}>
            Chi tiết giao dịch
          </Text>
          <Ionicons
            name="trash"
            size={24}
            color="#FFFFFF"
            onPress={handleModal}
          />
        </View>
        <Text
          style={{
            fontSize: 40,
            color: "#FFFFFF",
            fontWeight: "500",
            textAlign: "center",
            marginTop: 50,
          }}
        >
          -35.000đ
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#FFFFFF",
            fontWeight: "500",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Bánh mì sáng
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginHorizontal: "10%",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "#FFFFFF",
              fontWeight: "500",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Hôm nay, thứ 6, ngày 12 tháng 5 năm 2023
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#FFFFFF",
              fontWeight: "500",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            8:00
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            height: 70,
            width: 343,
            backgroundColor: "white",
            borderRadius: 12,
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#91919F" }}>Loại</Text>
            <Text style={{ fontWeight: "700", marginTop: 10 }}>Khoản chi</Text>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#91919F" }}>Danh mục</Text>
            <Text style={{ fontWeight: "700", marginTop: 10 }}>Ăn uống</Text>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#91919F" }}>Nguồn chi</Text>
            <Text style={{ fontWeight: "700", marginTop: 10 }}>VP Bank</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, marginTop: 71, marginHorizontal: "10%" }}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "300", color: "#91919F" }}>
            Mô tả
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#0D0E0F" }}>
            Ăn sáng đặt shoppe food
          </Text>
        </View>
        <View style={{ marginTop: 73 }}>
          <Text style={{ fontSize: 16, color: "#91919F", fontWeight: "300" }}>
            Hình ảnh
          </Text>
          <Image
            style={{ width: 343, height: 168, borderRadius: 8, marginTop: 16 }}
            source={require("../storages/fund/img.png")}
          />
        </View>
        <View
          style={{
            width: 343,
            height: 56,
            borderRadius: 100,
            backgroundColor: "#F7C45E",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500", color: "#313131" }}>
            Chỉnh sửa
          </Text>
        </View>
      </View>
      <Modal visible={modalVisible} animationType="none" transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            backgroundColor: "rgba(13, 14, 15, 0.3)",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              padding: 40,
              width: "100%",
              height: 251,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                color: "#000000",
                fontWeight: "700",
              }}
            >
              Xóa giao dịch này?
            </Text>
            <Text
              style={{
                textAlign: "center",
                marginTop: "6%",
                color: "#91919F",
                fontSize: 16,
              }}
            >
              Bạn có chắc sẽ xóa giao dịch này?
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: "8%",
              }}
            >
              <TouchableOpacity
                onPress={handleNoti}
                style={{
                  width: 164,
                  borderWidth: 2,
                  borderColor: "#F7C45E",
                  height: 56,
                  justifyContent: "center",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    color: "#313131",
                    fontWeight: "600",
                  }}
                >
                  Có
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleCancelDelete}
                style={{
                  width: 164,
                  height: 56,
                  justifyContent: "center",
                  borderRadius: 20,
                  backgroundColor: "#F7C45E",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    color: "#313131",
                    fontWeight: "600",
                  }}
                >
                  Không
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal visible={notiVisibale} animationType="none" transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(13, 14, 15, 0.3)",
          }}
        >
          <Pressable onPress={handleCloseNoti}>
            <View
              style={{
                backgroundColor: "#fff",
                padding: 40,
                width: 328,
                height: 144,
                borderRadius: 20,
                alignItems: "center",
              }}
            >
              <AntDesign name="checkcircle" size={48} color="#324EE8" />
              <Text
                style={{
                  textAlign: "center",
                  marginTop: "6%",
                  color: "#91919F",
                  fontSize: 16,
                }}
              >
                Quỹ tiết kiệm đã được xóa
              </Text>
            </View>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default HistoryExchange;

const styles = StyleSheet.create({});
