import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DoneFund = () => {
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

  const data = [
    {
      id: 1,
      title: "Ăn uống",
      color: "#F096D3",
      img: require("../../storages/monthfund/img1.png"),
      money: "3.000.000đ",
    },
    {
      id: 2,
      title: "Đi lại",
      color: "#6ABE68",
      img: require("../../storages/monthfund/img2.png"),
      money: "1.000.000đ",
    },
    {
      id: 3,
      title: "Dịch vụ sinh hoạt",
      color: "#FF724D",
      img: require("../../storages/monthfund/img3.png"),
      money: "0đ",
    },
    {
      id: 4,
      title: "Phát triển bản thân",
      color: "#F9DC5C",
      img: require("../../storages/monthfund/img4.png"),
      money: "0đ",
    },
    {
      id: 5,
      title: "Trang phục",
      color: "#FF87AB",
      img: require("../../storages/monthfund/img5.png"),
      money: "0đ",
    },
  ];
  return (
    <View
      style={{
        backgroundColor: "#111827",
        height: "100%",
        position: "absolute",
        width: "100%",
      }}
    >
      <View
        style={{
          paddingTop: 60,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          style={{ right: 100 }}
          onPress={() => navigation.goBack()}
        />
        <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
          Ngân sách tháng
        </Text>
      </View>
      <View style={{ marginTop: 50, marginHorizontal: "8%" }}>
        <View>
          <Text
            style={{
              fontSize: 20,
              color: "#FFFFFF",
              fontWeight: "500",
              textAlign: "justify",
            }}
          >
            Bạn có thể đặt một số giới hạn chi phí cho từng danh mục
          </Text>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text
            style={{
              fontSize: 16,
              color: "#FFFFFF",
              fontWeight: "300",
              textAlign: "justify",
            }}
          >
            Chúng tôi đã chọn 5 danh mục chi phí phổ biến hàng đầu. Bạn có thể
            giới hạn nhiều danh mục hơn.
          </Text>
        </View>
      </View>
      {data.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
              alignSelf: "center",
              height: 60,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              marginTop: 20,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 32,
                  height: 32,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: item.color,
                  borderRadius: 20,
                  marginLeft: 8.5,
                }}
              >
                <Image source={item.img} style={{ width: 32, height: 32 }} />
              </View>

              <Text
                style={{ fontSize: 16, fontWeight: "500", marginLeft: 14.4 }}
              >
                {item.title}
              </Text>
            </View>

            <View
              style={{
                marginRight: 10,
                backgroundColor: "#C3C3C34D",
                padding: 8,
                paddingHorizontal: 20,
                borderRadius: 20,
              }}
            >
              <Text>{item.money}</Text>
            </View>
          </View>
        );
      })}
      <TouchableOpacity
        onPress={handleModal}
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginHorizontal: "7%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 44,
            height: 44,
            backgroundColor: "#FFFFFF",
            borderRadius: 34,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={require("../../storages/monthfund/plus.png")} />
        </View>

        <Text style={{ color: "#FFFFFF", marginLeft: 8, fontSize: 16 }}>
          Thêm danh mục
        </Text>
      </TouchableOpacity>
      <View style={{ marginTop: "auto", marginBottom: 50 }}>
        <TouchableOpacity
          style={{
            width: "90%",
            height: 48,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 20,
            marginTop: 40,
            borderColor: "#F9DC5C",
            borderWidth: 1,
          }}
        >
          <Text style={{ fontSize: 16, color: "#F9DC5C" }}>Bỏ qua</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "90%",
            height: 48,
            backgroundColor: "#F9DC5C",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 20,
            marginTop: 15,
          }}
          onPress={() => navigation.navigate("Fund")}
        >
          <Text style={{ fontSize: 16, color: "#313131" }}>Xong</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisible} animationType="none" transparent={true}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0, 0.5)",
            height: "100%",
          }}
        >
          <View
            style={{
              backgroundColor: "#000",
              borderColor: "rgba(255,255,255,0.16)",
              borderWidth: 5,
              padding: 20,
              width: "80%",
              height: 251,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                color: "white",
                fontWeight: "700",
              }}
            >
              Dự chi ngân sách tháng
            </Text>
            <Text
              style={{
                textAlign: "center",
                marginTop: "2%",
                color: "white",
                fontSize: 16,
                fontWeight: "700",
              }}
            >
              Tiền nhà
            </Text>
            <TextInput
              style={{
                backgroundColor: "white",
                width: 265,
                height: 50,
                borderRadius: 15,
                marginTop: 20,
                paddingLeft: 20,
                alignSelf: "center",
                fontWeight: "500",
                fontSize: 24,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: "8%",
              }}
            >
              <TouchableOpacity
                onPress={handleCancelDelete}
                style={{
                  width: 123,
                  borderWidth: 2,
                  borderColor: "white",
                  height: 40,
                  justifyContent: "center",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 14,
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  Bỏ qua
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleNoti}
                style={{
                  width: 123,
                  height: 40,
                  justifyContent: "center",
                  borderRadius: 20,
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 14,
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  Xong
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal visible={notiVisibale} animationType="none" transparent={true}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0, 0.5)",
            height: "100%",
          }}
        >
          <View
            style={{
              backgroundColor: "#000",
              borderColor: "rgba(255,255,255,0.16)",
              borderWidth: 5,
              padding: 30,

              width: "80%",
              height: 251,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                marginTop: 10,
                textAlign: "center",
                fontSize: 14,
                color: "white",
                fontWeight: "700",
              }}
            >
              Thêm danh mục
            </Text>

            <TextInput
              style={{
                backgroundColor: "white",
                width: 265,
                height: 50,
                borderRadius: 15,
                marginTop: 20,
                paddingLeft: 20,
                alignSelf: "center",
                fontWeight: "500",
                fontSize: 24,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: "8%",
              }}
            >
              <TouchableOpacity
                onPress={handleCancelDelete}
                style={{
                  width: 123,
                  borderWidth: 2,
                  borderColor: "white",
                  height: 40,
                  justifyContent: "center",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 14,
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  Bỏ qua
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 123,
                  height: 40,
                  justifyContent: "center",
                  borderRadius: 20,
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 14,
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  Xong
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DoneFund;

const styles = StyleSheet.create({});
