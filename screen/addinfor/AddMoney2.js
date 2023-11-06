import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import ButtonBank from "../../component/ButtonBank";

const AddMoney2 = () => {
  const navigation = useNavigation();
  const countries = ["Bank", "Tiền mặt"];
  const [money, setMoney] = useState(0);
  const [total, setTotal] = useState(0);

  const [selectedItem, setSelectedItem] = useState(null);
  const [showAdditionalButton, setShowAdditionalButton] = useState(false);

  const handleMoneyChange = (value) => {
    const newMoney = Number(value);
    setMoney(newMoney);
    setTotal(newMoney);
  };

  const handleSelectItem = (item, index) => {
    setSelectedItem(item);
    setShowAdditionalButton(true);
    console.log(item, index);
  };

  const handleAdditionalButtonPress = () => {
    // Xử lý khi button bổ sung được nhấn
    console.log("Additional button pressed");
  };
  return (
    <KeyboardAvoidingView
      style={{
        backgroundColor: "#324EE8",
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
          style={{ right: 60 }}
          onPress={() => navigation.goBack()}
        />
        <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
          Thu nhập cố định/tháng
        </Text>
      </View>
      <View
        style={{
          marginTop: 160,
          height: 90,
          borderBottomWidth: 1,
          width: "85%",
          alignSelf: "center",
          borderColor: "#FCFCFC",
        }}
      >
        <Text style={{ color: "#FCFCFC", fontSize: 16 }}>Khoản thu 1</Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <TextInput
            style={{
              width: "92%",
              fontSize: 40,
              fontWeight: "500",
              color: "#FCFCFC",
            }}
            onChangeText={handleMoneyChange}
            value={money.toString()}
            placeholder="0"
            placeholderTextColor="#FCFCFC"
            keyboardType="numeric"
          />
          <Text style={{ color: "#FCFCFC", fontSize: 20, fontWeight: "500" }}>
            vnd
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 21,
          height: 90,
          borderBottomWidth: 1,
          width: "85%",
          alignSelf: "center",
          borderColor: "#FCFCFC",
        }}
      >
        <Text style={{ color: "#FCFCFC", fontSize: 16 }}>Khoản thu 2</Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <TextInput
            style={{
              width: "92%",
              fontSize: 40,
              fontWeight: "500",
              color: "#FCFCFC",
            }}
            onChangeText={handleMoneyChange}
            value={money.toString()}
            placeholder="0"
            placeholderTextColor="#FCFCFC"
            keyboardType="numeric"
          />
          <Text style={{ color: "#FCFCFC", fontSize: 20, fontWeight: "500" }}>
            vnd
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 21,
          height: 90,
          borderBottomWidth: 1,
          width: "85%",
          alignSelf: "center",
          borderColor: "#FCFCFC",
        }}
      >
        <Text style={{ color: "#FCFCFC", fontSize: 16 }}>Tổng</Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Text
            style={{
              width: "92%",
              fontSize: 40,
              fontWeight: "900",
              color: "#FCFCFC",
            }}
          >
            {total}
          </Text>
          <Text style={{ color: "#FCFCFC", fontSize: 20, fontWeight: "500" }}>
            vnd
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 350,
          backgroundColor: "white",
          position: "relative",
          top: 40,
          width: "100%",
          borderRadius: 32,
        }}
      >
        <View style={{ alignItems: "center", width: "100%" }}>
          <View
            style={{
              height: 56,
              width: "90%",
              borderWidth: 1,
              borderRadius: 16,
              marginTop: 26,
              justifyContent: "center",
            }}
          >
            <TextInput
              style={{ paddingLeft: 16, color: "#324EE8" }}
              placeholder="Tên"
              placeholderTextColor="#91919F"
            />
          </View>

          <SelectDropdown
            data={countries}
            onSelect={handleSelectItem}
            defaultButtonText={"Nguồn thu"}
            buttonTextAfterSelection={(selectedItem, index) => selectedItem}
            rowTextForSelection={(item) => item}
            buttonStyle={styles.dropdown2BtnStyle}
            buttonTextStyle={{
              color: selectedItem ? "#324EE8" : "#91919F",
              textAlign: "left",
              fontSize: 16,
            }}
            renderDropdownIcon={(isOpened) => {
              return (
                <FontAwesome
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={"black"}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown2DropdownStyle}
            rowStyle={styles.dropdown2RowStyle}
            rowTextStyle={styles.dropdown2RowTxtStyle}
          />
        </View>

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
        >
          <Text style={{ fontSize: 16, color: "#313131" }}>Xác nhận</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddMoney2;

const styles = StyleSheet.create({
  dropdown2BtnStyle: {
    width: "90%",
    height: 56,
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 1,
    marginTop: 10,
  },
  dropdown2BtnTxtStyle: {},
  dropdown2DropdownStyle: {
    backgroundColor: "white",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dropdown2RowStyle: { backgroundColor: "white", borderBottomColor: "black" },

  dropdown2RowTxtStyle: {
    color: "#324EE8",
    textAlign: "left",
  },
});
