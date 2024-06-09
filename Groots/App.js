import { StyleSheet, Text, View, Modal } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Authentication/Login";
import Register from "./screens/Authentication/Register";
import Home from "./screens/Home";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/Firebase";
import InsideTabs from "./screens/InsideTabs";

const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login/Home">
        <Stack.Group>
          {user ? (
            <Stack.Screen
              name="Login/InsideTabs"
              component={InsideTabs}
              options={{ headerShown: false }}
              initialParams={{ user }}
            />
          ) : (
            <Stack.Screen
              name="Login/InsideTabs"
              component={Login}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
