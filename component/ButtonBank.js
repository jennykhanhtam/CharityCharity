import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const options = [
  { id: 1, img: require("../storages/bank/bank1.png") },
  { id: 2, img: require("../storages/bank/bank2.png") },
  { id: 3, img: require("../storages/bank/bank3.png") },
  { id: 4, img: require("../storages/bank/bank4.png") },
  { id: 5, img: require("../storages/bank/bank5.png") },
  { id: 6, img: require("../storages/bank/bank6.png") },
  { id: 7, img: require("../storages/bank/bank7.png") },
  { id: 8, img: require("../storages/bank/other.png") },
];

const handleSelectItem = (item) => {
  // Xử lý khi mục được chọn
  console.log(item);
};

const ButtonBank = () => {
  const renderItem = ({ item, focused }) => (
    <TouchableOpacity
      style={{
        width: 80,
        height: 40,
        backgroundColor: focused ? "#EEE5FF" : "#F1F1FA",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        marginRight: 10,
      }}
      onPress={() => handleSelectItem(item)}
    >
      <Image source={item.img} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={options}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={4}
      contentContainerStyle={styles.container}
    />
  );
};

export default ButtonBank;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 80,
    height: 40,
    backgroundColor: "#F1F1FA",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
