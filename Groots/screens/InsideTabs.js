import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Styles from "../Styles/Standard";
import Home from "./Home";
import { FontAwesome } from "@expo/vector-icons";

const InsideTabs = ({ navigation, route }) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Events") {
            iconName = focused ? "calendar" : "calendar-o";
          } else if (route.name === "Settings") {
            iconName = focused ? "user" : "user-o";
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" options={{}} component={Home} />
      <Tab.Screen name="Events" options={{}} component={Home} />
      <Tab.Screen name="Settings" options={{}} component={Home} />
    </Tab.Navigator>
  );
};

export default InsideTabs;
