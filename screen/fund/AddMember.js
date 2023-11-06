import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { list } from "../../data/listmember";
import Checkbox from "expo-checkbox";
import { listphone } from "../../data/phonebook";
import { useNavigation } from "@react-navigation/native";

const AddMember = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleModal = (contactData) => {
    setModalVisible(true);
    setSelectedContact(contactData);
  };

  const handleCancelDelete = () => {
    setModalVisible(false);
  };
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 60,
          marginHorizontal: 35,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 38,
            height: 38,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#828282",
          }}
        >
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ right: 20, fontWeight: "600", fontSize: 17 }}>
          Thêm thành viên
        </Text>
        <Text></Text>
      </View>
      <View
        style={{
          alignSelf: "center",
          borderWidth: 1,
          width: 358,
          height: 48,
          borderRadius: 12,
          alignItems: "center",
          flexDirection: "row",
          marginTop: 40,
        }}
      >
        <Image
          source={require("../../storages/search.png")}
          style={{ marginLeft: 10 }}
        />
        <TextInput
          style={{
            color: "#9CA3AF",
            fontWeight: "500",
            paddingLeft: 10,
          }}
          placeholder="Search"
        />
      </View>
      <Text
        style={{
          fontWeight: "600",
          fontSize: 17,
          marginTop: 35,
          marginHorizontal: 35,
        }}
      >
        Gần đây
      </Text>
      <ScrollView horizontal style={{ marginHorizontal: 15, marginTop: 20 }}>
        {list.map((item, index) => {
          return (
            <View key={index} style={{ alignItems: "center", marginLeft: 20 }}>
              <Image source={item.img} />
              <Text>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
      <Text
        style={{
          fontWeight: "600",
          fontSize: 17,
          marginTop: 35,
          marginHorizontal: 35,
        }}
      >
        Liên lạc
      </Text>
      <View
        style={{
          marginHorizontal: 35,
          borderWidth: 1,
          borderRadius: 24,
          backgroundColor: "#F9FAFB",
          marginTop: 20,
          justifyContent: "center",
          marginBottom: 50,
        }}
      >
        {listphone.map((data, index) => {
          const [isChecked, setIsChecked] = useState(data.item);
          return (
            <View
              key={index}
              style={{
                padding: 10,
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
                  onPress={() => handleModal(data)}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Image source={data.img} />
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 16,
                      color: "#1F2937",
                      marginLeft: 20,
                    }}
                  >
                    {data.name}
                  </Text>
                </TouchableOpacity>
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked}
                  onValueChange={setIsChecked}
                  color={isChecked ? "#3B82F6" : undefined}
                />
              </View>
              <Modal
                visible={modalVisible}
                animationType="none"
                transparent={true}
              >
                <View
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    height: "100%",
                  }}
                >
                  <Pressable style={{ marginTop: "auto" }}>
                    <View
                      style={{
                        backgroundColor: "#fff",
                        padding: 40,
                        width: "100%",
                        height: 339,
                        borderRadius: 20,
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          width: 300,
                          height: 151,
                          alignItems: "center",
                        }}
                      >
                        <Image
                          style={{ width: 80, height: 80 }}
                          source={selectedContact?.img}
                        />
                        <Text style={{ fontSize: 22, marginTop: 15 }}>
                          {selectedContact?.name}
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: 9,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 13,
                              fontWeight: "500",
                              marginRight: 20,
                            }}
                          >
                            0912 345 678
                          </Text>
                          <Text style={{ fontSize: 13, fontWeight: "500" }}>
                            hanhnh2003@gmail.com
                          </Text>
                        </View>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          handleCancelDelete();
                          navigation.navigate("FundMember");
                        }}
                        style={{
                          height: 60,
                          width: 358,
                          backgroundColor: "rgba(17, 24, 39, 1)",
                          borderRadius: 100,
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 48,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 17,
                            color: "rgba(255, 255, 255, 1)",
                          }}
                        >
                          Thêm vào phòng
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </Pressable>
                </View>
              </Modal>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default AddMember;

const styles = StyleSheet.create({
  checkbox: {
    borderColor: "#667085",
    borderRadius: 5,
    width: 20,
    height: 20,
  },
});
