import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RootStack from "./router/RootStack";
import { AntDesign } from "@expo/vector-icons";
import AppIntroSlider from "react-native-app-intro-slider";
import SimpleModal from "./component/SimpleModal";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const slides = [
  {
    id: 1,
    title: "Quản lý và phân tích chi tiêu hiệu quả",
    img: require("./storages/onboarding/onboarding1.png"),
    color: "#FFFFFF",
  },
  {
    id: 2,
    title: "Lưu trữ giao dịch của bạn theo thời gian",
    img: require("./storages/onboarding/onboarding2.png"),
    color: "#324EE8",
  },
  {
    id: 3,
    title: "Chia tiền nhóm",
    content:
      "Quản lý chi tiêu không còn là nỗi ám ảnh hàng tháng của nhóm/ phòng của bạn nữa (đặc biệt nếu bạn là sinh viên đi học xa)",
    img: require("./storages/onboarding/onboarding3.png"),
    color: "#324EE8",
  },
];

export default function App() {
  const [showHomePage, setshowHomePage] = useState(false);
  const [currentPage, setcurrentPage] = useState(0);
  const appIntroSliderRef = useRef(null);

  const RenderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={item.img}
          style={{
            resizeMode: "cover",
            height: "100%",
            width: "100%",
            position: "absolute",
          }}
        />
        <Text
          style={{
            marginTop: "115%",
            paddingBottom: 5,
            fontSize: 24,
            color: item.color,
            alignSelf: "center",
            fontWeight: "700",
            width: 249,
            textAlign: "center",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            textAlign: "center",
            width: 345,
            color: "#324EE8",
            fontSize: 14,
            alignSelf: "center",
            fontWeight: "400",
            marginTop: 13,
          }}
        >
          {item.content}
        </Text>
        <View>
          <View style={styles.skip}>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                textDecorationLine: "underline",
                position: "relative",
                top: 210,
              }}
              onPress={onSkip}
            >
              Bỏ qua
            </Text>
          </View>
        </View>
      </View>
    );
  };
  const handelNext = () => {
    if (appIntroSliderRef.current) {
      appIntroSliderRef.current.goToSlide(
        appIntroSliderRef.current.state.activeIndex + 1
      );
    }
  };
  const handelPrev = () => {
    if (appIntroSliderRef.current) {
      appIntroSliderRef.current.goToSlide(
        appIntroSliderRef.current.state.activeIndex - 1
      );
    }
  };

  const onSkip = () => {
    setshowHomePage(true);
  };
  const onDone = () => {
    setshowHomePage(true);
  };

  const renderNextButton = () => {
    return (
      <TouchableOpacity
        onPress={handelNext}
        style={{
          position: "relative",
          bottom: 100,
          right: 0,
        }}
      >
        <Image source={require("./storages/onboarding/next.png")} />
      </TouchableOpacity>
    );
  };

  const renderPrevButton = () => {
    return (
      <TouchableOpacity
        onPress={handelPrev}
        style={{
          position: "relative",
          bottom: 100,
          left: 270,
        }}
      >
        <Image source={require("./storages/onboarding/back.png")} />
      </TouchableOpacity>
    );
  };

  const renderDoneButton = () => {
    return (
      <TouchableOpacity
        onPress={onDone}
        style={{
          position: "relative",
          bottom: 100,
          right: 0,
        }}
      >
        <Image source={require("./storages/onboarding/next.png")} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <StatusBar backgroundColor="black" />
      {showHomePage ? (
        <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
          <RootStack />
        </View>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          ref={appIntroSliderRef}
          showPrevButton={true}
          showDoneButton={true}
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
          renderDoneButton={renderDoneButton}
          activeIndex={currentPage}
          activeDotStyle={{
            width: 0,
          }}
          dotStyle={{
            width: 0,
          }}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCircle: {
    width: 41,
    height: 41,
    backgroundColor: "rgba(0,0,0,.2)",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  skip: {
    marginTop: 16,
    alignItems: "flex-end",
    marginRight: "5%",
  },
});
