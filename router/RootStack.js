import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Exchange from "../screen/Exchange";
import Home from "../screen/Home";
import Add from "../screen/Add";
import Statistical from "../screen/Statistical";
import Fund from "../screen/Fund";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screen/Login";
import Resgister from "../screen/Resgister";
import Verify from "../screen/Verify";
import Camerafront from "../screen/camera/Camerafront";
import Cameraback from "../screen/camera/Cameraback";
import Resultback from "../screen/camera/Resultback";
import Resultfront from "../screen/camera/Resultfront";
import Infor from "../screen/camera/Infor";
import AddMoney from "../screen/addinfor/AddMoney";
import AddMoney2 from "../screen/addinfor/AddMoney2";
import AddMonth from "../screen/addinfor/AddMonth";
import MonthlyBudget from "../screen/addinfor/MonthlyBudget";
import DoneMonth from "../screen/addinfor/DoneMonth";
import HistoryExchange from "../screen/HistoryExchange";
import Saving from "../screen/Saving";
import AddSavingSuccess from "../screen/saving/AddSavingSuccess";
import AddSaving from "../screen/saving/AddSaving";
import SavingDetail from "../screen/saving/SavingDetail";
import AddFund from "../screen/fund/AddFund";
import AddMember from "../screen/fund/AddMember";
import FundMember from "../screen/fund/FundMember";
import UpdateFund from "../screen/fund/UpdateFund";
import DoneFund from "../screen/fund/DoneFund";
import AllStatistical from "../screen/AllStatistical";
import DetailStatistical from "../screen/DetailStatistical";

const HomeStack = createNativeStackNavigator();
function HomeStacks() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home Stack" component={Home} />
    </HomeStack.Navigator>
  );
}

const ExchangeStack = createNativeStackNavigator();
function ExchangeStacks() {
  return (
    <ExchangeStack.Navigator screenOptions={{ headerShown: false }}>
      <ExchangeStack.Screen name="Exchange Stack" component={Exchange} />
      <ExchangeStack.Screen
        name="HistoryExchange"
        component={HistoryExchange}
      />
    </ExchangeStack.Navigator>
  );
}

const AddStack = createNativeStackNavigator();
function AddStacks() {
  return (
    <AddStack.Navigator screenOptions={{ headerShown: false }}>
      <AddStack.Screen name="Add Stack" component={Add} />
    </AddStack.Navigator>
  );
}

const StatisticalStack = createNativeStackNavigator();
function StatisticalStacks() {
  return (
    <StatisticalStack.Navigator screenOptions={{ headerShown: false }}>
      <StatisticalStack.Screen
        name="Statistical Stack"
        component={Statistical}
      />
      <StatisticalStack.Screen
        name="AllStatistical"
        component={AllStatistical}
      />
      <StatisticalStack.Screen
        name="DetailStatistical"
        component={DetailStatistical}
      />
    </StatisticalStack.Navigator>
  );
}

const FundStack = createNativeStackNavigator();
function FundStacks() {
  return (
    <FundStack.Navigator screenOptions={{ headerShown: false }}>
      <FundStack.Screen name="Fund Stack" component={Fund} />
    </FundStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          backgroundColor: "#FFFFFF",
          width: "100%",
          height: "9%",
          shadowColor: "#FFF9EC",
          shadowOffset: {
            width: 5,
            height: 3,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
          borderRadius: 15,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../storages/home.png")}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? "#324EE8" : "#C6C6C6",
                }}
              ></Image>
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? "#324EE8" : "#C6C6C6",
                  marginTop: 6,
                }}
              >
                Trang chủ
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Exchange"
        component={ExchangeStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../storages/exchange.png")}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? "#324EE8" : "#C6C6C6",
                }}
              ></Image>
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? "#324EE8" : "#C6C6C6",
                  marginTop: 6,
                }}
              >
                Giao dịch
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: -30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  backgroundColor: focused ? "#324EE8" : "#324EE8",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../storages/add.png")}
                  resizeMode="contain"
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? "#FCFCFC" : "#FCFCFC",
                  }}
                ></Image>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Statistical"
        component={StatisticalStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../storages/statistical.png")}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? "#324EE8" : "#C6C6C6",
                }}
              ></Image>
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? "#324EE8" : "#C6C6C6",
                  marginTop: 6,
                }}
              >
                Thống kê
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Fund"
        component={FundStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../storages/salary.png")}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? "#324EE8" : "#C6C6C6",
                }}
              ></Image>
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? "#324EE8" : "#C6C6C6",
                  marginTop: 6,
                }}
              >
                Quỹ Nhóm
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Stacks = createNativeStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stacks.Navigator screenOptions={{ headerShown: false }}>
        <Stacks.Screen name="Login" component={Login} />
        <Stacks.Screen name="Resgister" component={Resgister} />
        <Stacks.Screen name="Verify" component={Verify} />
        <Stacks.Screen name="Camerafront" component={Camerafront} />
        <Stacks.Screen name="Resultfront" component={Resultfront} />
        <Stacks.Screen name="Cameraback" component={Cameraback} />
        <Stacks.Screen name="Resultback" component={Resultback} />
        <Stacks.Screen name="Infor" component={Infor} />
        <Stacks.Screen name="AddMoney" component={AddMoney} />
        <Stacks.Screen name="AddMoney2" component={AddMoney2} />
        <Stacks.Screen name="AddMonth" component={AddMonth} />
        <Stacks.Screen name="MonthlyBudget" component={MonthlyBudget} />
        <Stacks.Screen name="DoneMonth" component={DoneMonth} />
        <Stacks.Screen name="Tabs" component={Tabs} />
        <Stacks.Screen name="AddSaving" component={AddSaving} />
        <Stacks.Screen name="AddSavingSuccess" component={AddSavingSuccess} />
        <Stacks.Screen name="SavingDetail" component={SavingDetail} />
        <Stacks.Screen name="Saving" component={Saving} />
        <Stacks.Screen name="AddFund" component={AddFund} />
        <Stacks.Screen name="AddMember" component={AddMember} />
        <Stacks.Screen name="FundMember" component={FundMember} />
        <Stacks.Screen name="UpdateFund" component={UpdateFund} />
        <Stacks.Screen name="DoneFund" component={DoneFund} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
